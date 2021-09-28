//selección de los elrmentos del documento html mediante su id utilizando querySelector, asignación de estos en const para poder utilizarlos.

const nombre = document.querySelector('#nombre');
const apellido = document.querySelector('#apellido');
const email = document.querySelector('#email');
const password = document.querySelector('#password');

//declaración e inicialización de const con las expresiones regulares para los campos del formulario

const emailRegex=/^[a-zA-Z0-9\._-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/
const apellidoRegex=/^[a-zA-Z]{3,16}$/
const passwordRegex=/^[a-z0-9_-]{6,18}$/
const nombreRegex=/^[a-zA-Z]{3,16}$/

//agregado de addEventListener para capturar los valores ingresados en cada campo del formulario
//se utilizan condicionales ternarios

document.addEventListener('change', (e)=>{
    e.target.matches('#nombre') ? valorNombre(e.target.value) : null
    e.target.matches('#apellido') ? valorApellido(e.target.value) : null
    e.target.matches('#email') ? valorEmail(e.target.value) : null
    e.target.matches('#password') ? valorPassword(e.target.value) : null
})



//declaración e inicialización de dos arrays para validar los datos y otra para almacenar la información de los formularios

const arrayValidation = [];
const BD = [];

//creación de funciones para validar el contenido de los campos del formulario

const valorNombre = (nombreValue)=>{
    if(nombreValue.trim()){
        if(nombreRegex.test(nombreValue)){
            arrayValidation.push('nombre');
            BD.push(nombreValue);
        }
    }
}

const valorApellido = (apellidoValue)=>{
    if(apellidoValue.trim()){
        if(apellidoRegex.test(apellidoValue)){
            arrayValidation.push('apellido');
            BD.push(apellidoValue);
        }
    }
}

const valorEmail = (emailValue)=>{
    if(emailValue.trim()){
        if(emailRegex.test(emailValue)){
            arrayValidation.push('email');
            BD.push(emailValue);
        }
    }
}

const valorPassword = (passwordValue)=>{
    if(passwordValue.trim()){
        if(passwordRegex.test(passwordValue)){
            arrayValidation.push('password');
            BD.push(passwordValue);
        }
    }
}


formulario.addEventListener('submit', (e)=>{
    e.preventDefault()

    if(arrayValidation.length==4){
        localStorage.setItem(`${BD[2]}`, JSON.stringify(BD))
        window.location.reload()
        alert('Datos guardados correctamente')
    }
})

console.log(arrayValidation)