const button = document.querySelector('#btn');
const tiempo = document.querySelector('#tiempoElegido');
const textoAlarma = document.querySelector('#textoAlarma');
const elementoSonidoAlarma = document.querySelector('#audioAlarma');


button.addEventListener('click', comenzarTiempo);
document.addEventListener('DOMContentLoaded', comenzarReloj);

function comenzarTiempo() {

    let contadorHtml = setTimeout(tiempocumplido, 1000 * parseInt(tiempo.value))
    return contadorHtml
}

function tiempocumplido() {




    textoAlarma.classList.add('color2');
    elementoSonidoAlarma.play();
}

function comenzarReloj() {
    setInterval(ticTac, 1000);
}

function ticTac() {
    let tiempoActual = new Date();
    let hora = String(tiempoActual.getHours()).padStart(2, '0');
    let minutos = String(tiempoActual.getMinutes()).padStart(2, '0');
    let segundos = String(tiempoActual.getSeconds()).padStart(2, '0');

    let textoHora = `${hora}:${minutos}:${segundos}`;
    textoAlarma.textContent = textoHora;
}