import $ from "jquery";
import _ from "lodash";
import Comment from "./comment.js";
import CommentStore from "./comment_store.js";

export default class VueCommenting {
  constructor() {
    this.currentId = 1;
    this.setupSections();
    this.setupVue();
  }

  nextId() {
    return this.currentId++;
  }

  setupVue() {
    Vue.component("commentable", this.commentable());

    new Vue({ el: "#vue-app" });
  }

  commentable() {
    return {
      props: ["commentableId"],
      template: "#commentable-template",
      data: () => {
        return {
          showComments: false,
          body: ""
        };
      },
      methods: {
        openComments: function() {
          this.showComments = true;
        },
        closeComments: function() {
          this.showComments = false;
        },
        saveComment: function() {
          new Comment(this.commentableId, this.body).save();
          this.body = "";
        },
        comments: function() {
          return new CommentStore(this.commentableId).all();
        },
        removeComment: function(index) {
          new CommentStore(this.commentableId).remove(index);
          this.$forceUpdate();
        },
        hasComments: function() {
          return this.comments().length;
        }
      }
    };
  }

  setupSections() {
    const sections = $(".lease p, .lease h1, .lease h2, .lease h3");
    _.forEach(sections, section => {
      const id = this.nextId();
      var section = $(section);
      if (_.trim(section.text()) !== "") {
        section.wrap(
          `<commentable class='commentable-section' commentable-id="${id}"></commentable>`
        );
      }
    });
  }
}
