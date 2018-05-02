Vue.component("compare-header", {
  data: () => {
    return {
      visibleOnPage: false
    };
  },
  mounted: function() {
    const containerTop = compareContainer.offsetTop;
    window.addEventListener("scroll", () => {
      if (window.pageYOffset >= 200) {
        this.visibleOnPage = false;
      } else {
        this.visibleOnPage = true;
      }
    });
  }
});
