import $ from "jquery";
import _ from "lodash";

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
    new Vue({ el: "#vue-app" });
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
