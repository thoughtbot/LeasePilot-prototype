import Vue from "vue";

Vue.component("compare-mark", {
  template: "#comment-mark-template",
  props: ["type"],
  data: function() {
    return { showMenu: false };
  },
  methods: {
    notImplementedAlert: function() {
      alert("This has not been implemented yet.");
    },
    backgroundColor: function() {
      if (this.type === "addition") {
        return "bg-light-green";
      } else if (this.type === "deletion") {
        return "bg-light-pink strike";
      } else {
        throw `compare-mark type must be 'addition' or 'deletion', got ${
          this.type
        }`;
      }
    }
  }
});
