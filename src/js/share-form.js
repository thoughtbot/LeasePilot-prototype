const timeoutTime = 3000;

Vue.component("share-form", {
  data: () => {
    return {
      buttonText: "Send",
      isSending: false,
      isDone: false
    };
  },
  methods: {
    submit: function() {
      this.buttonText = "Sending...";
      this.isSending = true;
      setTimeout(this.isSent, timeoutTime);
      setTimeout(this.redirectToLease, timeoutTime + 1000);
    },
    isSent: function() {
      this.isSending = false;
      this.isDone = true;
    },
    redirectToLease: function() {
      window.location = "/view-lease";
    }
  }
});
