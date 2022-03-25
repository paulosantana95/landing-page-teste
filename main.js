const fields = document.querySelectorAll("[required]")

// console.log(field)


function customValidation(event) {
    const field = event.target


    //verify error

    function verifyErrors() {
        let foundError = false;


        for( const error in field.validity) {
            
            if (error != "customError" && field.validity[error]) {
                foundError = error
            }
        } 

        return foundError;
    }
    

    const error = verifyErrors();
    console.log(error)


    if (error) {
        // switch message required
        field.setCustomValidity("Esse campo é obrigatório")
    } else {
        field.setCustomValidity("")
    }

    
}


for ( field of fields ) {
    field.addEventListener("invalid", customValidation)

}



document.querySelector("form").addEventListener("submit", event => {
    console.log('enviar formulário')


    event.preventDefault();

})