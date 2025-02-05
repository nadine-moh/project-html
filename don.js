// let heading = document.getElementById("HD");
// console.log(heading);
// heading.style.backgroundColor = "pink";
// heading.log(heading.childNodes);
// heading.log(heading.children);
// let spans = document.getElementById("span");
// console.log(spans);
// let heading2 = document.getElementsByClassName("head")[1];
// heading2.style.color = "blue";
// console.log(heading2);


// // let seconedlead = document.querySelector("#HD");
// let seconedlead = document.querySelectorAll("h1");
// console.log(seconedlead);

// let newimage = document.createElement("img");
// console.log(newimage);
// document.body.appendChild(newimage);

// console.log(newimage.getAttribute("class"));




// const sub = document.getElementById("submit");
// console.log(submit);

// const container = document.getElementById("cont");
// console.log(container);

// container.className = "added-js"
// console.log(input.value)
////////////////////////////////////////////////////////////////////////////////////////////////////////
// submit.addEventListener("click", function () {

//     console.log(input.value);
//     // container.textContent = input.value
//     const textContent = document.createElement("h3")
//     textContent.textContent = input.value
//     container.appendChild(textContent)
// })
//////////////////////////////////////////////////////////////////////////////////////////////////
// var userInput = document.getElementById('input');
// console.log(userInput)

// // store the submit button
// var submit = document.getElementById("submit");
// console.log(submit)

// // adding an event listener
// submit.addEventListener('click', submitData);
// // collecting all list items

////////////////////////////////////////////////////////////////////////////////////////////////

// document.getElementById("submit").addEventListener("click", function () {
//     container.style.width = "600px";
//     container.style.height = "300px";
// });
// const container = document.getElementById("cont");
// container.style.width = "400px";  // Set width
// container.style.height = "200px"; // Set height
// container.style.padding = "20px"; // Add some padding
// container.style.border = "2px solid black"; // Optional: Add a border to make it visible

/////////////////////////////////////////////////////////////////////////////////////////////////////////
// const input = document.getElementById("input");
// input.style.width = "300px";  // Increase width
// input.style.height = "40px";  // Increase height
// input.style.fontSize = "16px"; // Make text inside bigger


// input.addEventListener("focus", function () {
//     input.style.width = "400px"; // Expands when clicked
//     input.style.height = "50px";
// });

// const submit = document.getElementById("submit");
// submit.style.width = "300px";  // Increase width
// submit.style.height = "40px";  // Increase height
// submit.style.fontSize = "16px"; // Make text inside bigger


// submit.addEventListener("focus", function () {
//     submit.style.width = "400px"; // Expands when clicked
//     submit.style.height = "50px";
// });

////////////////////////////////////////////
const input = document.getElementById("input");
const container = document.getElementById("cont");
let taskNumber = 1; // Variable to keep track of the task number

// Resize input on focus
input.addEventListener("focus", function () {
    input.style.width = "400px";
    input.style.height = "50px";
});

// Submit button functionality
const submit = document.getElementById("submit");
submit.addEventListener("click", function () {
    const taskValue = input.value;  // Get the value from input box

    if (taskValue.trim() !== "") {  // Check if the input is not empty
        // Create a new element to display the task with the number
        const taskItem = document.createElement("div");
        taskItem.textContent = taskNumber + ". " + taskValue; // Display the task number and text

        // Append the new task item to the container
        container.appendChild(taskItem);

        // Increment the task number for the next task
        taskNumber++;

        // Clear the input box after adding the task
        input.value = "";
    } else {
        alert("Please enter a task!");  // Alert if input is empty
    }
});

