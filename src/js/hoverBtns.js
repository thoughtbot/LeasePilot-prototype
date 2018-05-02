import { select, selectAll, addClass, removeClass, hasClass } from "./utils/dom"

const diffBtns = selectAll("[data-diff]")
const diffHover = select("[diff-hover-btns]")

const hoverBtns = () => {

  if (diffBtns) {

    diffBtns.forEach(btn => {

      btn.addEventListener("mouseover", () => {
        const btnTop = btn.getBoundingClientRect().top
        const btnLeft = btn.getBoundingClientRect().left

        addClass(diffHover, "db")
        document.documentElement.style.setProperty("--posX", btnLeft + "px")
        document.documentElement.style.setProperty("--posY", (btnTop + 18) + "px")
      })


      diffHover.addEventListener("mouseleave", () => {
        
        if (hasClass(diffHover, "db")) {
          removeClass(diffHover, "db")
        }

        // console.log("here")
        // const btnTop = btn.getBoundingClientRect().top
        // const btnLeft = btn.getBoundingClientRect().left

        // document.documentElement.style.setProperty("--posX", btnLeft + "px")
        // document.documentElement.style.setProperty("--posY", (btnTop + 18) + "px")

        // 128 x 150
        // if (hasClass(diffHover, "db")) {
        //   removeClass(diffHover, "db")
        // }
      })
    })

  }

}
export default hoverBtns