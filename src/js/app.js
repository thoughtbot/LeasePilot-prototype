import setPathCookie from './utils/setPathCookie.js'
import removeMobileHover from './utils/removeMobileHover.js'
import sendButtonMessage from "./sendButtonMessage.js"

removeMobileHover()
setPathCookie()
sendButtonMessage()

// Add class to html if JS is loaded
document.querySelector('html').classList.add('js-is-loaded')
