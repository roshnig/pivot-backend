var socket = io();
// alert('hello')
var form = document.getElementById('form');
var input = document.getElementById('input');
const options = ["A", "B", "C", "D", "E"]

// options.forEach((option) => {
//     var div = document.createElement('div');
//     div.className = "radio-div"
//     var input = document.createElement("input");
//     input.type = "radio";
//     input.id = option;
//     input.value = option;
//     input.name = "answer"
//     input.className = "css-class-name"; // set the CSS class
//     var label = document.createElement("label");
//     label.for = option;
//     label.innerHTML = option;
//     div.appendChild(input);
//     div.appendChild(label);
//     form.appendChild(div);
//     //document.body.insertBefore(label, newInput);
// })


form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
    // for (i = 0; i < options.length; i++) {
    //     var input = document.getElementById(options[i]);
    //     console.log(input)
    //     if (input.checked) {
    //         console.log(input)
    //         socket.emit('chat message', input.value);
    //         //input.value = '';
    //         break
    //     }
    // }
});