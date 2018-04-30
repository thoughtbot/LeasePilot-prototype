import setPathCookie from "./utils/setPathCookie.js";
import removeMobileHover from "./utils/removeMobileHover.js";
import sendButtonMessage from "./sendButtonMessage.js";
import vueCommenting from "./vue-commenting.js";

Vue.config.ignoredElements = [
  "lease-var",
  "building-variable",
  "lease-attachment",
  "crb",
  "lease-start",
  "lease-end"
];

removeMobileHover();
setPathCookie();
sendButtonMessage();
new vueCommenting();

// Add class to html if JS is loaded
document.querySelector("html").classList.add("js-is-loaded");
