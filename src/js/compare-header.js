import { select } from "./utils/dom";

Vue.component("compare-header", {
  data: () => {
    return {
      offscreen: false
    };
  },
  mounted: function() {
    window.addEventListener("scroll", () => {
      const compareContainer = select("[data-compare-container]");
      const containerTop = compareContainer.offsetTop;

      if (window.pageYOffset >= containerTop) {
        this.offscreen = true;
      } else {
        this.offscreen = false;
      }
    });
  }
});
