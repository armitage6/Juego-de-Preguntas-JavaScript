const btnInput = document.querySelector('#btn');
const inputText = document.querySelector('#nombreDeUsuario');
const elementoTexto = document.querySelector('#salida');

btnInput.addEventListener('click', mostrarNombre);

function mostrarNombre() {
    let mensaje = `Tu te llamas ${inputText.value}`;
    elementoTexto.textContent = mensaje
}