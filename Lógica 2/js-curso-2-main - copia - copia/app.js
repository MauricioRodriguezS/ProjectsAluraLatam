function operación1(peso, altura) {
    return peso/(altura * altura);
}
let peso = prompt('Digame su peso.');
let altura = prompt('Digame su altura.');
let imc = operación1(peso, altura);
console.log(`Su Imc es de ${imc}.`);

function operación2(número1) {
    if (número1===0||número1===1) {
        return 1;
    } else {
        return número1*operación2(número1-1);
    }
}
let número1 = parseInt(prompt('Deme un número para sacar su factorial.'));
let factorial = operación2(número1);
console.log(`El factorial de ${número1} es ${factorial}.`);

function connversión(dolares) {
    cotizaciónDolar = 4.80;
    devolución = dolares * cotizaciónDolar;
    return devolución;
}
let dolares = parseInt(prompt('¿Cuántos dolares quiere convertir a reales?'));
let dolarAReales = connversión(dolares);
console.log(`Sus ${dolares} usd, son ${dolarAReales} reales.`);

function áreaYPerímetro(anchura, alturaSala) {
    perímetro = (alturaSala * 2) + (anchura * 2);
    área = alturaSala * anchura;
    console.log(`Su área es: ${área}m2`);
    console.log(`Su perímetro es: ${perímetro}m`)
    return;
}
alert('Calcule el área y perímetro de una sala rectangular');
let anchura = parseInt(prompt('Digame la anchura'));
let alturaSala = parseInt(prompt('Digame la altura'));
áreaYPerímetro(anchura, alturaSala);

function circuloÁreaYPeímetro(radio) {
    Pi = 3.14;
    áreaCirculo = Pi * (radio * radio);
    perímetroCirculo = (Pi * 2) * radio;
    console.log(`Su área es: ${áreaCirculo}m2`);
    console.log(`Su peímetro es: ${perímetroCirculo}m`)
    return;
}
alert('Calcule el área y perímetro de circulo');
let radio = parseInt(prompt('Radio del circulo'));
circuloÁreaYPeímetro(radio);

function tablaDeMultiplicar(número2) {
    for(d = 1; d <= 10; d++){
        var resultado = número2 * d;
        console.log(número2 + 'x' + d + '=' + resultado);
    }
}
let número2 = parseInt(prompt('Escriba el número para saber su tabla de multiplicar'));
tablaDeMultiplicar(número2);