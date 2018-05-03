import Vue from "vue";

Vue.component("compare-mark", {
  template: "#comment-mark-template",
  props: ["type"],
  data: function() {
    return { showMenu: false };
  },
  methods: {
    backgroundColor: function() {
      if (this.type === "addition") {
        return "bg-light-green";
      } else if (this.type === "deletion") {
        return "bg-light-pink";
      } else {
        throw `compare-mark type must be 'addition' or 'deletion', got ${
          this.type
        }`;
      }
    }
  }
});
