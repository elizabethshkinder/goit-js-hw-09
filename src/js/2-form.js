const key = "feedback-form-state"

const formData = {
    email: "",
    message: ""
}

const form = document.querySelector (".feedback-form");
const emailEL = form.elements.email;
const messageEl = form.elements.message;

form.addEventListener("input", inputAction);
form.addEventListener("submit", submitAction);

formRestore();

function inputAction(event){
    const {name, value} = event.target;

    if (!(name in formData)) return;

    formData[name] = value.trim();

    localStorage.setItem(key, JSON.stringify(formData));
}

function submitAction(event) {
    event.preventDefault();

    const email = form.elements.email.value.trim();
    const message = form.elements.message.value.trim();

    if(!email || !message){
        alert("Fill please all fields")
        return;
    }

    console.log({email, message});

    localStorage.removeItem(key);
    formData.email = "";
    formData.message = "";
    form.reset();
}

function formRestore(){
    try {
        const data = localStorage.getItem(key);
        if(!data) return;

        const saved = JSON.parse(data) || {};

        emailEL.value = saved.email ?? "";
        messageEl.value = saved.message ?? "";

        formData.email = emailEL.value.trim();
        formData.message = messageEl.value.trim();
    } catch {

    }
} 


