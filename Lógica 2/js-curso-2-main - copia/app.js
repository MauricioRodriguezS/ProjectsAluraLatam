function holaMundoEnConsola ( ) {
    console.log('¡Hola, mundo!');
}
holaMundoEnConsola();

function holaMundoEnConsolaConNombre(nombre) {
    console.log(`Hola, ${nombre}!`);
}
holaMundoEnConsolaConNombre('Mau');

function dobleDelNúmero(número) {
    return número * 2;
}
let resultadoDobleDelNúmero = dobleDelNúmero(20);
console.log(resultadoDobleDelNúmero);

function promedioTresNúmeros(número1, número2, número3) {
    return (número1+número2+número3) / 3;
}
let resultadoPromedioDeTresNúmeros = promedioTresNúmeros(3,3,3);
console.log(resultadoPromedioDeTresNúmeros);

function mayorDeDosNúmeros(númeroA, númeroB) {
    return númeroA > númeroB ? númeroA : númeroB;
}
let resultadoMayorDeDosNúmeros = mayorDeDosNúmeros (4, 52);
console.log(resultadoMayorDeDosNúmeros);

function dobleDeSíMismo(a) {
    return a * a;
}
let resultadoDobleDeSíMismo = dobleDeSíMismo(8);
console.log(resultadoDobleDeSíMismo);