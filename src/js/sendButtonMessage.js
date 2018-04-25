import { select, addClass, removeClass } from "./utils/dom.js"

const sendBtn = select("[data-send-button]");
const sendForm = select("[data-submit-form]");
const timeOutTime = 3000;

const isSent = () => {
  removeClass(sendBtn, "o-50");
  sendBtn.innerHTML = `<i class="material-icons material-icon-small">check</i> Sent`
}

const isDone = () => {
  sendForm.submit();
}

const buttonSends = () => {
  if (sendBtn) {
    sendBtn.addEventListener("click", (event) => {
      event.preventDefault();

      sendBtn.innerHTML = "Sending..."
      addClass(sendBtn, "o-50");
      setTimeout(isSent, timeOutTime);
      setTimeout(isDone, timeOutTime + 1000);
    })
  }
}

export default buttonSends
