import setPathCookie from "./utils/setPathCookie.js";
import removeMobileHover from "./utils/removeMobileHover.js";
import Commentable from "./commentable.js";
import ShareForm from "./share-form.js";
import VueApp from "./vue-app.js";
import Vue from "vue";

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
new VueApp();

// Add class to html if JS is loaded
document.querySelector("html").classList.add("js-is-loaded");
