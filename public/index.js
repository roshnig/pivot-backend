const socket = io();
const form = document.getElementById("form");
const input = document.getElementById("input");
const loginInput = document.getElementById("login-input");
const options = ["A", "B", "C", "D", "E", "F"];
const h3Title = document.getElementsByTagName("h3")[0];
const loginTitle = document.getElementById("login-p");
const data = { username: "", answer: "" };
let number = 4; // dynamic
let question = true; // dynamic

loginForm.addEventListener("submit", handleLogin);
function handleLogin(e) {
    e.preventDefault();
    data.username = loginInput.value;
    loginTitle.innerText = `Hello, ${data.username} :)`;
    document.getElementById("login-div").style.display = "none";
    makeForm();
}

function handleSubmit(e) {
    const result = document.querySelector('input[name="answer"]:checked').value;
    e.preventDefault();

    if (result) {
        h3Title.innerHTML = `You chose ${result}.`;
        h3Title.style.color = "blue";
        data.answer = result;
        socket.emit("submit answer", data);
    }
}

function makeForm() {
    if (question) {
        const button = document.createElement("button");
        h3Title.innerText = `Choose your answers`;
        button.type = "submit";
        button.innerText = "Submit";

        for (let i = 0; i <= number - 1; i++) {
            const div = document.createElement("div");
            const input = document.createElement("input");
            const label = document.createElement("label");
            div.className = "radio-div";
            input.type = "radio";
            input.id = options[i];
            input.value = options[i];
            input.name = "answer";
            input.className = "css-class-name"; // set the CSS class
            label.for = options[i];
            label.innerHTML = options[i];
            div.appendChild(input);
            div.appendChild(label);
            form.appendChild(div);
        }
        form.appendChild(button);
        form.addEventListener("submit", handleSubmit);
    }
}

// makeForm();

// const socket = io();
// const form = document.getElementById("form");
// const input = document.getElementById("input");
// const loginInput = document.getElementById("login-input");
// const options = ["A", "B", "C", "D", "E", "F"];
// const h3Title = document.getElementsByTagName("h3")[0];
// const loginTitle = document.getElementById('login-p');
// const data = {username: '', answer: ''}
// let number = 4; // dynamic
// let login = false;
// let question = true; // dynamic

// loginForm.addEventListener("submit", handleLogin);

// function handleLogin(e) {
//   e.preventDefault();
//   data.username = loginInput.value;
//   console.log(data)
//   document.getElementById("login-div").style.display = "none";
//   loginTitle.innerText = `Hello, ${data.username} :)`
// }

// function handleSubmit() {
//   const result = document.querySelector('input[name="answer"]:checked').value;
//   if (result) {
//     h3Title.innerHTML = `You chose ${result}.`;
//     h3Title.style.color = "blue";
//     data.answer = result
//     socket.emit("submit answer", data);
//   }
// }

// function makeForm() {
//   if (login) {
//     for (let i = 0; i <= number - 1; i++) {
//       const div = document.createElement("div");
//       const input = document.createElement("input");
//       const label = document.createElement("label");
//       div.className = "radio-div";
//       input.type = "radio";
//       input.id = options[i];
//       input.value = options[i];
//       input.name = "answer";
//       input.className = "css-class-name"; // set the CSS class
//       label.for = options[i];
//       label.innerHTML = options[i];
//       div.appendChild(input);
//       div.appendChild(label);
//       form.appendChild(div);
//     }
//   } else {
//     document.getElementById("hide-div").style.display = "none";
//   }
// }

// makeForm();