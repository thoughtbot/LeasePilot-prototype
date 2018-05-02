import Comment from "./comment.js";
import CommentStore from "./comment_store.js";
import { mixin as focusMixin } from "vue-focus";
import Vue from "vue";

Vue.component("commentable", {
  props: ["commentableId"],
  template: "#commentable-template",
  mixins: [focusMixin],
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
});
