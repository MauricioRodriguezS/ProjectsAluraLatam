console.log('Bienvenido de vuelta.');
let nombre = 'Mauricio';
console.log(`Es un gusto volver a verte, ${nombre}`);
alert(`¡Hola, ${nombre}!`);
let lenguaje = prompt('¿Cuál es el lenguaje de programación que más te gusta?');
console.log(`Lenguaje de programación favorito; ${lenguaje}`);
let valor1 = 10;
let valor2 = 5;
let resultado = valor1 - valor2;
alert(`El resultado de la resta es ${resultado}`);
console.log(`La diferencia entre ${valor1} y ${valor2} es igual a ${resultado}.`);
let edad = prompt('Indiqueme su edad, por favor');
if (edad > 18) {
    alert(`Usted tiene ${edad} ${edad == 1 ? 'año' : 'años'}, por lo tanto, es mayor de edad.`);
    console.log(`Usted tiene ${edad} ${edad == 1 ? 'año' : 'años'}, por lo tanto, es mayor de edad.`);
} else {
    console.log(`Usted tiene ${edad} ${edad == 1 ? 'año' : 'años'}, por lo tanto, es menor de edad.`);
    alert(`Usted tiene ${edad} ${edad == 1 ? 'año' : 'años'}, por lo tanto, es menor de edad.`);
}
let number = prompt('¿Podrías darme un número?');
if (number > 0) {
    alert('Su número es positivo.');
} else if (number < 0) {
    alert('Su número es negativo.');
} else {
    alert('Su número es 0.');
}
let contador = 1;
while(contador < 11) {
    console.log(`Número: ${contador}`);
    contador++;
}
let nota = 9;
if(nota > 7) {
    alert(`Su nota es ${nota}, está aprobado`); 
} else {
    alert(`Su nota es ${number}, está reprobado`);
} console.log(`Su nota es un ${number}`);
let númeroAleatorio1 = Math.random();
console.log(`Su número es ${númeroAleatorio1}.`);
let númeroAleatorio2 = Math.floor(Math.random()*10)+1;
console.log(`Su número es ${númeroAleatorio2}.`);
let númeroAleatorio3 = Math.floor(Math.random()*1000)+1;
console.log(`Su número es ${númeroAleatorio3}.`);