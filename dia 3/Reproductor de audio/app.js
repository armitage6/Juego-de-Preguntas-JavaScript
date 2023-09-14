const button = document.querySelector('#btn');
const tiempo = document.querySelector('#tiempoElegido');
const textoAlarma = document.querySelector('#textoAlarma');
const contador = document.querySelector('#contador');
const elementoSonidoAlarma = document.querySelector('#audioAlarma');

button.addEventListener('click', comenzarTiempo);

function comenzarTiempo() {

    let contadorHtml = setTimeout(tiempocumplido, 1000 * tiempo.value)
    return contadorHtml
}

function tiempocumplido() {



    textoAlarma.textContent = 'ENCENDIDO';
    textoAlarma.classList.add('color2');
    elementoSonidoAlarma.play()
}

