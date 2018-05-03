import { select, selectAll, addClass, removeClass, hasClass } from "./utils/dom"

const hoverBtns = () => {
  const diffBtns = selectAll("[data-diff]")
  const diffHover = select("[diff-hover-btns]")

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
      })
    })
  }
}

const clickActions = () => {
  const actionBtns = selectAll("[data-action-btn]")

  actionBtns.forEach(btn => {
    const id = btn.getAttribute("data-action-btn")
    const copyEl = select(`[data-compare-copy=${id}]`)
    const actionsEl = select(`[data-compare-actions=${id}]`)
    const undo = select(`[data-compare-undo=${id}]`)

    btn.addEventListener("click", () => {
      addClass(copyEl, "dn")
      addClass(actionsEl, "dn")
      removeClass(undo, "dn")
    })

    undo.addEventListener("click", () => {
      removeClass(copyEl, "dn")
      removeClass(actionsEl, "dn")
      addClass(undo, "dn")
    })

  })
}

const init = () => {
  hoverBtns()
  clickActions()
}
export default init