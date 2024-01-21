let titulo = document.querySelector('h1');
titulo.innerHTML = 'Hora del desafío';

function consola( ) {
    console.log('El bóton fué clicado.');
}

function pregunta() {
    let city = prompt('Escriba el nombre de una ciudad de Brasil.');
    alert(`Estuve en ${city} y me acorde de ti.`);
}

function alerta() {
    alert('Yo amo JS.');
}

function suma() {
    let number1 = parseInt(prompt('¿Puedes darme un número?'));
    console.log(number1);
    let number2 = parseInt(prompt('¿Puedes darme otro número?'));
    console.log(number2);
    let resultado = number1 + number2;
    console.log(resultado);
    alert(`El resultado de ${number1} + ${number2} es = ${resultado}`);
}