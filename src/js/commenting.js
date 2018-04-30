import $ from "jquery";
import _ from "lodash";
import Comment from "./comment";

window.Comments = {};

Comments.currentId = 1;

Comments.nextId = function() {
  return Comments.currentId++;
};

Comments.init = function() {
  Comments.setupSections();
  Comments.setupMarkerEvents();
  Comments.setupSaveEvents();
  Comments.attachSavedComments();
};

Comments.attachSavedComments = function() {
  _.forEach($("[commentable-id]"), function(commentable) {
    const commentableId = $(commentable).attr("commentable-id");
    const commentBody = localStorage.getItem(`commentable-${commentableId}`);
    if (commentableId && commentBody) {
      Comments.showComment(commentable, commentBody);
    }
  });
};

Comments.showComment = function(commentable, commentBody) {
  var commentable = $(commentable);
  const commentableId = $(commentable).attr("commentable-id");
  Comments.displayComment(commentable, commentBody);
  var offset = commentable.offset();
  var width = commentable.outerWidth();

  var comment = $(
    `.floating-comment[floating-commentable-id='${commentableId}']`
  );
  comment.css({
    position: "absolute",
    top: offset.top - 35 + "px",
    left: offset.left + width + 60 + "px"
  });
};

Comments.displayComment = function(commentable, commentBody) {
  var commentableId = commentable.attr("commentable-id");
  var modalTemplate = _.template(
    document.getElementById("comment-template").innerHTML
  );
  $("body").append(
    modalTemplate({
      body: commentBody,
      commentableId: commentableId
    })
  );
};

Comments.setupSaveEvents = function() {
  $(document).on("submit", ".comment-modal form", function(e) {
    Comments.saveComment(e.currentTarget);
  });
};

Comments.saveComment = function(form) {
  const body = $(form)
    .find("textarea")
    .val();
  const commentableId = $(form).attr("commentable-id");
  new Comment(commentableId, body).save();
};

Comments.setupMarkerEvents = function() {
  $(document).on("click", ".commentable-section--marker", function(e) {
    Comments.showModal(e.currentTarget);
  });

  $(document).on("click", ".comment-modal .close", function(e) {
    $(e.currentTarget)
      .closest(".comment-modal")
      .remove();
    Comments.unhighlightCommentable();
  });
};

Comments.unhighlightCommentable = function() {
  $(".highlight").removeClass("highlight");
};

Comments.showModal = function(marker) {
  Comments.unhighlightCommentable();
  Comments.deleteModalIfCreatedPreviously();
  Comments.createModal(marker);
  Comments.positionNear(marker);
  Comments.focusCommentModal();
  Comments.highlightCommentableNear(marker);
};

Comments.focusCommentModal = function() {
  $(".comment-modal textarea").focus();
};

Comments.highlightCommentableNear = function(marker) {
  $(marker)
    .closest(".commentable-section")
    .addClass("highlight");
};

Comments.createModal = function(marker) {
  const commentableId = $(marker)
    .closest("[commentable-id]")
    .attr("commentable-id");
  var modalTemplate = _.template(
    document.getElementById("comment-modal-template").innerHTML
  );
  $("body").append(modalTemplate({ id: commentableId }));
};

Comments.deleteModalIfCreatedPreviously = function() {
  $(".comment-modal").remove();
};

Comments.positionNear = function(marker) {
  var modal = $(".comment-modal");
  var marker = $(marker);
  var offset = marker.offset();

  var width = marker.outerWidth();

  modal.css({
    position: "absolute",
    top: offset.top + "px",
    left: offset.left + width + 8 + "px"
  });
};

Comments.setupSections = function() {
  var sections = $(".lease p, .lease h1, .lease h2, .lease h3");
  _.forEach(sections, function(section) {
    var id = Comments.nextId();
    var section = $(section);
    if (_.trim(section.text()) !== "") {
      section.wrap(
        `<div class='commentable-section' commentable-id=${id}></div>`
      );
      section
        .parent(".commentable-section")
        .append(
          "<a class='commentable-section--marker shadow-4 br2'> <i class='material-icons'>insert_comment</i> </a>"
        );
    }
  });
};

export default Comments.init;
