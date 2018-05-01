import { select, addClass, removeClass } from "./utils/dom"

const header = select("[data-sticky-header]")
const compareContainer = select("[data-compare-container]")

const stickyHeader = () => {
  if (header) {
    window.addEventListener("scroll", () => {
      const containerTop = compareContainer.offsetTop

      if (window.pageYOffset >= containerTop) {
        addClass(header, "fixed")
        addClass(header, "pt3")
      }
      else {
        removeClass(header, "fixed")
        removeClass(header, "pt3")
      }
    })
  }
}
export default stickyHeader