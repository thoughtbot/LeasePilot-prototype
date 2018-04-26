import setPathCookie from "./utils/setPathCookie.js";
import removeMobileHover from "./utils/removeMobileHover.js";
import sendButtonMessage from "./sendButtonMessage.js";
import commenting from "./commenting.js";

removeMobileHover();
setPathCookie();
sendButtonMessage();
commenting();

// Add class to html if JS is loaded
document.querySelector("html").classList.add("js-is-loaded");
