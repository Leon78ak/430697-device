var contacts = document.querySelector(".btn-contacts");

var feedbackPopup = document.querySelector(".modal-feedback");
var feedbackClose = document.querySelector(".modal-close");

var feedbackForm = feedbackPopup.querySelector("form");
var userName = feedbackPopup.querySelector("[name=user-name]");
var eMail = feedbackPopup.querySelector("[name=email]");




contacts.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.add("modal-show");
  userName.focus();
});

feedbackClose.addEventListener("click", function(event) {
  event.preventDefault();
  feedbackPopup.classList.remove("modal-show");
});

feedbackForm.addEventListener("submit", function(event) {
  if (!userName.value || !eMail.value) {
    event.preventDefault();
    feedbackPopup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(event) {
  if (event.keyCode === 27) {
    if (feedbackPopup.classList.contains("modal-show")) {
      feedbackPopup.classList.remove("modal-show");
    }
  }
});
