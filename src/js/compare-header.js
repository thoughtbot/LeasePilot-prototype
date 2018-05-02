import { select } from "./utils/dom";
const compareContainer = select("[data-compare-container]");

Vue.component("compare-header", {
  data: () => {
    return {
      visibleOnPage: false
    };
  },
  mounted: function() {
    const containerTop = compareContainer.offsetTop;

    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= containerTop) {
        this.visibleOnPage = false;
      } else {
        this.visibleOnPage = true;
      }
    });
  }
});
