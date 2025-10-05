const key = "feedback-form-state"

const formData = {
    email: "",
    message: ""
}

const form = document.querySelector (".feedback-form");
const emailEL = form.elements.email;
const messageEl = form.elements.message;


emailEL.addEventListener("focus", () => {
  emailEL.setAttribute("placeholder", "Type area");
});
emailEL.addEventListener("blur", () => {
  emailEL.removeAttribute("placeholder");
});

messageEl.addEventListener("focus", () => {
  messageEl.setAttribute("placeholder", "Type area");
});
messageEl.addEventListener("blur", () => {
  messageEl.removeAttribute("placeholder");
});

