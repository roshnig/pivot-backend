const socket = io();
const form = document.getElementById('form');
const input = document.getElementById('input');
const options = ["A", "B", "C", "D", "E"]
const number = 5
const question = true


function handleSubmit(e) {
    const result = document.querySelector('input[name="answer"]:checked').value;
     console.log(result)
    if (result) {
        socket.emit('chat message', result);
    }
}

function makeForm () {
    if(question) {
        options.forEach((option) => {
            const div = document.createElement('div');
            const input = document.createElement("input");
            const  label = document.createElement("label");
            div.className = "radio-div"
            input.type = "radio";
            input.id = option;
            input.value = option;
            input.name = "answer"
            input.className = "css-class-name"; // set the CSS class
            label.for = option;
            label.innerHTML = option;
            div.appendChild(input);
            div.appendChild(label);
            form.appendChild(div);
        })

    } else {
        document.getElementById('hide-div').style.display = "none";
    }
}

makeForm()


// var socket = io();
// // alert('hello')
// var form = document.getElementById('form');
// var input = document.getElementById('input');
// const options = ["A", "B", "C", "D", "E"]

// // options.forEach((option) => {
// //     var div = document.createElement('div');
// //     div.className = "radio-div"
// //     var input = document.createElement("input");
// //     input.type = "radio";
// //     input.id = option;
// //     input.value = option;
// //     input.name = "answer"
// //     input.className = "css-class-name"; // set the CSS class
// //     var label = document.createElement("label");
// //     label.for = option;
// //     label.innerHTML = option;
// //     div.appendChild(input);
// //     div.appendChild(label);
// //     form.appendChild(div);
// //     //document.body.insertBefore(label, newInput);
// // })

// form.addEventListener('submit', function (e) {
//     e.preventDefault();
//     if (input.value) {
//         socket.emit('chat message', input.value);
//         input.value = '';
//     }
//     // for (i = 0; i < options.length; i++) {
//     //     var input = document.getElementById(options[i]);
//     //     console.log(input)
//     //     if (input.checked) {
//     //         console.log(input)
//     //         socket.emit('chat message', input.value);
//     //         //input.value = '';
//     //         break
//     //     }
//     // }
// });