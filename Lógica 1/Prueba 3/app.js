let díaDeLaSemana = prompt('¿Qué día de la semana es?');
if(díaDeLaSemana === 'Sábado' || díaDeLaSemana === 'Domingo') {
    alert('¡Buen fin de semana!');
} else {
    alert('¡Buena semana!');
}
console.log(`El día es: ${díaDeLaSemana}`);
let numeroNegativoOPositivo = prompt('Ingresa un número negativo o postivio');
if(numeroNegativoOPositivo >= 1) {
    alert('Tu número es positivo');
} else if(numeroNegativoOPositivo <= -1) {
    alert('Tu número es negativo');
} else {
    alert('Tu numero es 0')
}
console.log(`El número es: ${numeroNegativoOPositivo}`);
let puntuación = prompt('Ingresa tu puntuación');
if(puntuación >= 100) {
    alert('¡Felicidades, has ganado!');
} else {
    alert('Intenta nuevamente para ganar.');
}
console.log(`Tu puntuación fue de: ${puntuación}`);
let saldoDeLaCuenta = 999;
alert(`El saldo de su cuenta es de ${saldoDeLaCuenta}`);
console.log(`El saldo es de ${saldoDeLaCuenta}`);
let nombreUsuario = prompt('Ingrese su nombre');
alert(`Bienvenido de vuelta, ${nombreUsuario}`);
console.log(`Nombre ${nombreUsuario}`);