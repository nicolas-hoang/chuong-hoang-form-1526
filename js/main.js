// DECLARING VARIABLES 
// <input type="button" id="button-submit">,
let submitButton = document.getElementById('button-submit');

// <input type="text" id="fullname">,
let fullNameInput = document.getElementById('fullname');

// <input type="text" id="email">,
let emailInput = document.getElementById('email');

// <textarea id="message"></textarea>
let messageInput = document.getElementById('message');

// Declare variable that will store regular expression for email
let emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// -----FUNCTION STARTS HERE-----

function validateForm(event) {
    // This code is to prevent the page to reload
    event.preventDefault();

    // Declare object that will store the form-data
    let data = {};
    // Declare array that will store the errors
    let errors = [];

    
// FULL NAME
    // Check if fullname is not empty.
    if (fullNameInput.value.trim() !== "") {
        // If so: Pass the collected value to your object "data".
        data.fullname = fullNameInput.value.trim();
    } else {
        // Otherwise: Create a corresponding error-message and add it to your array "errors".
        errors.push("Full name is missing.");
    }

// EMAIL
    // Check if email is not empty.
    if (emailInput.value.trim() !== "") {
        // Check if email is valid.
        if (emailPattern.test(emailInput.value.trim())) {
            // If so: Pass the collected value to your object "data".
            data.email = emailInput.value.trim();
        } else {
            // Otherwise: Create a corresponding error-message and add it to your array "errors".
            errors.push("Email is invalid.");
        }

    } else {
        // Otherwise: Create a corresponding error-message and add it to your array "errors".
        errors.push("Email is missing.");
    }

// MESSAGE 
    // Check if message is not empty.
    if (messageInput.value.trim() !== "") {
        // If so: Pass the collected value to your object "data".
        data.message = messageInput.value.trim();
    } else {
        // Otherwise: Create a corresponding error-message and add it to your array "errors".
        errors.push("Message is missing.");
    }

// FEEDBACK/ERRORS
    // Check if there is anything in array errors
    if (errors.length > 0) {
        // If so: Print it in JavaScript console.
        console.error("Form submission errors:", errors);
    } else {
        // Otherwise: Print the data in JavaScript console.
        console.log("Form data:", data);
        // Clear text-fields
        fullNameInput.value = "";
        emailInput.value = "";
        messageInput.value = "";
    }

}

// -----FUNCTION ENDS HERE-----

// Register your form to "click" event.
submitButton.addEventListener('click', validateForm);
