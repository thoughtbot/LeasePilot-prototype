import Vue from "vue";
import _ from "lodash";

Vue.component("compare-card", {
  props: ["changeNumber"],
  data: function() {
    return {
      status: "new"
    };
  },
  methods: {
    borderColor: function() {
      const status = this.status;
      if (status === "new") {
        return "b--lightest-blue";
      } else if (status === "accepted") {
        return "b--green";
      } else if (status === "rejected") {
        return "b--red";
      } else if (status === "replaced") {
        return "b--navy";
      } else {
        throw `Status is invalid: ${status}`;
      }
    },
    isNew: function() {
      return this.status === "new";
    },
    accept: function() {
      this.status = "accepted";
    },
    reject: function() {
      this.status = "rejected";
    },
    replace: function() {
      this.status = "replaced";
    },
    formattedStatus: function() {
      return _.capitalize(this.status);
    },
    undo: function() {
      this.status = "new";
    }
  }
});
