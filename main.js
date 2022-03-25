const fields = document.querySelectorAll("[required]")

function validateField(field) {
    //logica de verificação de erros.
    function verifyErrors() {
        let foundError = false;

        for( const error in field.validity) {
            
            if (field.validity[error] && !field.validity.valid) {
                foundError = error
            }
        } 
        return foundError;
    }

    const spanError = field.parentNode.querySelectorAll("span.error");
    const inputError = field.parentNode.querySelectorAll("input");

    function setCustomError() {
        
            spanError.classList.add("active")
            inputError.classList.add("input-error")
    }
    function removeCustomError() {
        spanError.classList.remove("active")
        inputError.classList.remove("input-error")
    }
        

    return function() {
        if(verifyErrors()) {
            setCustomError();
    
        } else {
            removeCustomError();
        }
    }
}


function customValidation(event) {
    const field = event.target;
    //verify error
    const validation = validateField(field);


    validation();
}

for ( field of fields ) {
    field.addEventListener("invalid", event => {
        //eliminar bubble
        event.preventDefault();

        customValidation(event);
    })
    field.addEventListener("blur", customValidation)

}

document.querySelector("form").addEventListener("submit", event => {
    console.log('enviar formulário')


    event.preventDefault();

})