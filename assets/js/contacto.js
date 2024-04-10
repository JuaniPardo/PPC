// Funcion para usar rapidamente el document.getElementById
const getEL = (id) => document.getElementById(id);

const formulario = getEL('formulario');
    const nombre = getEL('nombre');
const email = getEL('email');
const mensaje = getEL('mensaje');
const submit = getEL('submit');

// Agrego la key de EmailJS, el Service ID y el Template ID
const publicKey = '8q9OSeoje-79Cey5s'
const serviceID = 'service_9d1uu8l'
const templateIDAuto = 'template_7eww60a'
const templateIDMensaje = 'template_47p6xs9'

// Inicializo EmailJS
emailjs.init(publicKey);

// Agrego el evento submit al formulario
formulario.addEventListener('submit', (e) => {
    // Evito el uso del metodo por defecto
    e.preventDefault();
    // Cambio el texto del boton
    submit.innerHTML = 'Enviando...';
    // Obtengo los valores de los inputs
    const fields = {
        name: nombre.value,
        email: email.value,
        message: mensaje.value
    }
    // Envio el email
    emailjs.send(serviceID, templateIDAuto, fields)
        .then(() => {
            emailjs.send(serviceID, templateIDMensaje, fields)
                .then(() => {
                    // Cambio el texto del boton
                    submit.innerHTML = 'Enviado';
                    // Reseteo el formulario
                    formulario.reset();
                })
                .catch(() => {
                    // Cambio el texto del boton
                    submit.innerHTML = 'Error. No se pudo enviar el mensaje. Intente nuevamente.'
                });
        })
        .catch(() => {
            // Cambio el texto del boton
            submit.innerHTML = 'Error. No se pudo enviar el mensaje. Intente nuevamente.'
        });
});