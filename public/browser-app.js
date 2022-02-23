const tasksDOM = document.querySelector(".tasks");
const loadingDOM = document.querySelector(".loading-text");
const formDOM = document.querySelector(".task-form");
const taskInputDOM = document.querySelector(".task-input");
// Load tasks from /api/tasks
const showResults = async () => {
  loadingDOM.style.visibility = "visible";
  try {
    const {
      data: { results }
    } = await axios.get("/api/results");
    console.log(results[results.length - 1]);
    let lastResult = results[results.length - 1];
    const { poolDuration, correctAnswer, presentationid } = lastResult;
    let formatedResults = `
    <h5><span><i class="far fa-check-circle"></i></span> Pool duration: ${poolDuration} Min </h5>
<h5><span><i class="far fa-check-circle"></i></span> correct Answer: ${correctAnswer}</h5>
<h5><span><i class="far fa-check-circle"></i></span> PresentationId: ${presentationid} </h5>
    `;

    tasksDOM.innerHTML = formatedResults;
  } catch (error) {
    tasksDOM.innerHTML = '<h5 class="empty-list">There was an error, please try later....</h5>';
  }
  loadingDOM.style.visibility = "hidden";
};

showResults();

// form

formDOM.addEventListener("submit", async e => {
  e.preventDefault();
  const name = taskInputDOM.value;

  try {
    await axios.post("/api/results", { presentationid: "ae4wt6y789", slideid: "Slide_id1", correctAnswer: "D", poolDuration: 5 });
    showResults();
    taskInputDOM.value = "";
    formAlertDOM.style.display = "block";
    formAlertDOM.textContent = `success, Result added`;
    formAlertDOM.classList.add("text-success");
  } catch (error) {
    formAlertDOM.style.display = "block";
    formAlertDOM.innerHTML = `error, please try again`;
  }
});

/*
var socket = io();
// alert('hello')
var form = document.getElementById('form');
var input = document.getElementById('input');
const options = ["A", "B", "C", "D", "E"]

form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
   
});
*/
