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
    const card = select(`[data-compare-card=${id}]`)
    const result = select(`[data-compare-result=${id}]`)

    btn.addEventListener("click", () => {
      addClass(copyEl, "dn")
      addClass(actionsEl, "dn")
      removeClass(undo, "dn")

      if (btn.hasAttribute("data-action-accept")) {
        removeClass(card, "b--lightest-blue")
        addClass(card, "b--green")
        result.innerHTML = "✓ Accepted"
      }

      else if (btn.hasAttribute("data-action-ignore")) {
        removeClass(card, "b--lightest-blue")
        addClass(card, "b--red")
        result.innerHTML = "x Ignored"
      }

      else if (btn.hasAttribute("data-action-replace")) {
        removeClass(card, "b--lightest-blue")
        addClass(card, "b--navy")
        result.innerHTML = "+ Language replaced"
      }

    })

    undo.addEventListener("click", () => {
      removeClass(copyEl, "dn")
      removeClass(actionsEl, "dn")
      addClass(undo, "dn")
      result.innerHTML = ""

      if (hasClass(card, "b--green")) {
        removeClass(card, "b--green")
        addClass(card, "b--lightest-blue")
      }

      else if (hasClass(card, "b--red")) {
        removeClass(card, "b--red")
        addClass(card, "b--lightest-blue")
      }

      else if (hasClass(card, "b--navy")) {
        removeClass(card, "b--navy")
        addClass(card, "b--lightest-blue")
      }
    })

  })
}

const init = () => {
  hoverBtns()
  clickActions()
}
export default init