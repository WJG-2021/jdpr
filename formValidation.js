//To display other field if other is selected in category

let otherOption = document.getElementById("other");
otherOption.style.display = "none";
let catageoryValue = document.getElementsByTagName("select")[0];
catageoryValue.onchange = function otherBox() {

    if (catageoryValue.value == "Other") {
        otherOption.style.display = "inline";
    } else {
        otherOption.style.display = "none";
    }
}


//register an event handler for button
// let button = document.querySelector("button");
function check(){
    locationError();
    phoneNum();
    emailError();
    websiteError();
    companyNameError();
    let form = document.getElementById("theform");

    document.getElementById("sub").addEventListener("click", function () {
        form.submit();


    });


    //error displays when about org is empty
    let errorText = document.getElementById("textError");
    let textareaInput = document.getElementById("aboutOrg");
    if (textareaInput.value.length === 0) {
        errorText.textContent = "This field cannot be empty.";
        errorText.style.color = "red";
    } else {
        errorText.textContent = "";
    }


}

function phoneNum() {
    // error for non american phone numbers
    let error = document.getElementById("error");
    let phoneNum = document.getElementById("phone");
    let phoneValidation = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    if (phoneNum.value.match(phoneValidation)) {
        error.textContent = "";
        return true
    } else {
        // Changing content and color of content
        error.textContent = "Invalid phone number";
        error.style.color = "red";

    }
}

function locationError() {
    //error for leaving location empty
    let city = document.getElementById("city");
    let state = document.getElementById("state");
    let cityError = document.getElementById("cityError");
    let stateError = document.getElementById("stateError");
    if (city.value.length === 0 && state.value.length === 0) {
        stateError.textContent = "Please enter City and State";
    } else if (city.value.length === 0) {
        cityError.textContent = "Please enter City";
    } else if (state.value.length === 0) {
        stateError.textContent = "Please enter State"
    } else {
        cityError.textContent = "";
        stateError.textContent = "";
        city.setAttribute("display", "none");
        state.setAttribute("display", "none");
    }
}

function emailError() {
    //error for not putting in a valid email address, regex checks for the standard something@something.com email convention
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    if (email.value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)) {
        emailError.textContent = "";
        return true
    } else {
        emailError.textContent = "Please enter valid email";
        emailError.style.color = 'red';

    }
}

function websiteError() {
    //error for not putting in url, using regex to parce and identify the string. Requires https://
    let website = document.getElementById("website");
    let websiteError = document.getElementById("websiteError");

    function isValidURL(string) {
        let res = string.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
        return (res !== null)
    }

    if (isValidURL(website.value)) {
        websiteError.textContent = "";
        return true
    } else {
        websiteError.textContent = "Please enter valid website";
        websiteError.style.color = 'red';
    }
}

function companyNameError() {
    let companyName = document.getElementById("bname");
    let nameError = document.getElementById("nameError");
    if (companyName.value === "") {
        nameError.textContent = "Please enter Name";
        nameError.style.color = 'red';
    } else {
        nameError.textContent = "";
    }
}


//prompts for company tag line


// let aboutField=document.getElementById('aboutOrg');
// document.addEventListener('click',function (event){
//     let anyWhere=document.getElementsByTagName('input').target;
//     if(!anyWhere && aboutField.value.length>15){
//         let response=prompt("Enter the tagline you wish to see in the sustainability catalog");
//         if(response!=""){
//             console.log(response);
//             return response;
//         }
//
//     }
//     else
//     return false;
// });
// function promptBox(){
//     let anyWhere=document.getElementsByTagName('input').target;
//     if(aboutField.value.length>15 && onclick(anyWhere)){
//         let response=prompt("Enter the tagline if you wish to see in the sustainability catalog");
//         if(response!=""){
//             console.log(response);
//             return response;
//         }
//     }
//     else return false;
// }
//
