// Step 1:: Get the form elements from the DOM
let firstName  = document.querySelector("#first_name")
let secondName = document.querySelector("#second_name")
let username   = document.querySelector("#username")
let email      = document.querySelector("#email")
let password   = document.querySelector("#password")
let signUpBtn  = document.querySelector("#sign_up")


// Step 2:: Add an event listener to the sign-up button
signUpBtn.addEventListener("click", function(e){

    // Step 5 :: prevent the default form submission behavior
    e.preventDefault();

    // step 3:: check the user entered all data or not
    if( firstName.value===""  || 
        secondName.value==="" || 
        username.value===""   || 
        email.value===""      || 
        password.value===""
    ){
        alert("Please Enter the required data")
    }else {
        // Step 4 :: store the user's data
        localStorage.setItem("firstName", firstName.value);
        localStorage.setItem("secondName", secondName.value);
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password",password.value);

        // Step 5.2 :: relocate the user to the login page after successful registration
        setTimeout(() => {
            window.location.href = "login.html"
        }, 1500) // 1.5 seconds delay before redirecting to login page
    }

})









