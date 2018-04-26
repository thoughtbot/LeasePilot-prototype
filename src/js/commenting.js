import $ from "jquery";
import _ from "lodash";

window.Comments = {};

Comments.init = function() {
  Comments.setupSections();
  Comments.setupMarkerEvents();
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
  Comments.createModal();
  Comments.positionModalNear(marker);
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

Comments.createModal = function() {
  var modalTemplate = _.template(
    document.getElementById("comment-modal-template").innerHTML
  );
  $("body").append(modalTemplate());
};

Comments.deleteModalIfCreatedPreviously = function() {
  $(".comment-modal").remove();
};

Comments.positionModalNear = function(marker) {
  var modal = $(".comment-modal");
  var marker = $(marker);
  var offset = marker.offset();

  var width = marker.outerWidth();

  modal.css({
    position: "absolute",
    top: offset.top - 35 + "px",
    left: offset.left + width + 60 + "px"
  });
};

Comments.setupSections = function() {
  var sections = $(".lease p, .lease h1, .lease h2, .lease h3");
  _.forEach(sections, function(section) {
    var section = $(section);
    if (_.trim(section.text()) !== "") {
      section.wrap("<div class='commentable-section'></div>");
      section
        .parent(".commentable-section")
        .append("<a class='commentable-section--marker'>+</a>");
    }
  });
};

export default Comments.init;
