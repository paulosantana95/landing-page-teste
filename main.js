const fields = document.querySelectorAll("[required]")


//Validate Form Fields function
function validateField(field) {
    //Verify Error
    function verifyErrors() {
        let foundError = false;

        for( const error in field.validity) {
            
            if (field.validity[error] && !field.validity.valid) {
                foundError = error;
            }
        } 
        return foundError;
    }

    // node select
    const spanError = field.parentNode.querySelector("span");
    const inputError = field

    //Error atribute
    function setCustomError() {
        field.parentNode.classList.add("error")
        spanError.classList.add("error")
        inputError.classList.add("input-error")
    }
    //Remove error atribute
    function removeCustomError() {
        field.parentNode.classList.remove("error")
        spanError.classList.remove("error")
        inputError.classList.remove("input-error")
    }
        
    //function return for control atributes error.
    return function() {
        if(verifyErrors()) {
            setCustomError();
        } else {
            removeCustomError();
        }
    }
}


//Custom Validate Function
function customValidation(event) {
    const field = event.target;

    const validation = validateField(field);

    validation();
}


//Validate Form Function
function sendValidateForm() {
    const form = document.querySelector("form");
    const message = document.querySelector(".success-submit")

    form.style.display= "none"
    message.style.display = "block"
}

//arrow function for submit control.
document.querySelector("form").addEventListener("submit", event => {
    console.log('success submit');

    event.preventDefault();

    sendValidateForm();
})