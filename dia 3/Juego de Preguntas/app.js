let contador = document.querySelector('#contador');
let input1 = document.querySelector('#pregunta1');
let input2 = document.querySelector('#pregunta2');
let input3 = document.querySelector('#pregunta3');
let input4 = document.querySelector('#pregunta4');
let input5 = document.querySelector('#pregunta5');
const audioAlarma = document.querySelector('#audioAlarma');
const btn = document.querySelector('#btn');
const btnReiniciar = document.querySelector('#reiniciar');
let tiempoTranscurrido;


document.addEventListener('DOMContentLoaded', cuantaRegresiva);
btn.addEventListener('click', enviarInput);
btnReiniciar.addEventListener('click', () => {
    location.reload()
})

function cuantaRegresiva() {
    tiempoTranscurrido = setInterval(resta, 1000);
}

function resta() {
    contador.textContent = contador.textContent - 1;
    if (contador.textContent == 0) {
        clearInterval(tiempoTranscurrido);
        audioAlarma.play();
        alert('GAME OVER: Se Acabó el Tiempo. Intenta Nuevamente');
    }

}

function enviarInput() {
    clearInterval(tiempoTranscurrido)

    let date = new Date();
    let fechaActual = date.toLocaleDateString('en-En');
    let textoAlerta = `
    ${fechaActual} 
    
    1-${input1.value} 
    2-${input2.value} 
    3-${input3.value} 
    4-${input4.value} 
    5-${input5.value} 
    `;
    alert(textoAlerta);
}


