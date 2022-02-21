const socket = io();
const form = document.getElementById("form");
const input = document.getElementById("input");
const options = ["A", "B", "C", "D", "E", "F"];
const number = 6; // dynamic 
const question = true; // dynamic

function handleSubmit(e) {
  const result = document.querySelector('input[name="answer"]:checked').value;
  if (result) {
    socket.emit("chat message", result);
  }
}

function makeForm() {
  if (question) {
    for (let i = 0; i <= number - 1; i++) {
      const div = document.createElement("div");
      const input = document.createElement("input");
      const label = document.createElement("label");
          div.className = "radio-div"
          input.type = "radio";
          input.id = options[i];
          input.value = options[i];
          input.name = "answer"
          input.className = "css-class-name"; // set the CSS class
          label.for = options[i];
          label.innerHTML = options[i];
          div.appendChild(input);
          div.appendChild(label);
          form.appendChild(div);
    }
  } else {
    document.getElementById("hide-div").style.display = "none";
  }
}

makeForm();
