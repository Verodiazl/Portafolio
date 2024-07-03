document.querySelector('.formcontato__form').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const nombre = document.forms['form']['nombre'].value.trim();
    const email = document.forms['form']['email'].value.trim();
    const asunto = document.forms['form']['asunto'].value.trim();
    const mensaje = document.forms['form']['mensaje'].value.trim();

    if (nombre === '' || nombre.length > 50) {
        alert('Por favor, ingrese un nombre válido (máximo 50 caracteres).');
        return false;
    }


    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (email === '' || !emailRegex.test(email)) {
        alert('Por favor, ingrese un correo electrónico válido.');
        return false;
    }

    if (asunto === '' || asunto.length > 50) {
        alert('Por favor, ingrese un asunto válido (máximo 50 caracteres).');
        return false;
    }


    if (mensaje === '' || mensaje.length > 300) {
        alert('Por favor, ingrese un mensaje válido (máximo 300 caracteres).');
        return false;
    }


    alert('Formulario enviado correctamente!');
    document.forms['form'].reset(); 
});
