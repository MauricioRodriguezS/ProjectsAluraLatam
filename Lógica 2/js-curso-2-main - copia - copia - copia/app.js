let listaGenérica = [];
let lenguagesDeProgramacion = ['JavaScript', 'C', 'C++', 'Kotlin', 'Python'];
lenguagesDeProgramacion.push('Java', 'Ruby', 'GoLang');
let listaDeNúmeros = [1, 2, 3, 4, 5];
let listaNúmeroMásYMenosGrande = [1, 10, 100, 1000, 10000];

function mostrarLista1() {
    for (let l = 0; l < lenguagesDeProgramacion.length; l++) {
        console.log(lenguagesDeProgramacion[l]);
    }

}
console.log('Lista:');

mostrarLista1();

function mostrarLista2() {
    for (let l = lenguagesDeProgramacion.length - 1; l >= 0; l--) {
        console.log(lenguagesDeProgramacion[l]);
    }

}
console.log('Lista inversa:');
mostrarLista2();

function promedioListaDeNúmeros(números) {
    let suma = 0;
    for (let p = 0; p < listaDeNúmeros.length; p++) {
    suma += listaDeNúmeros[p];
    }
    return suma / listaDeNúmeros.length;
}

let números = [1, 2, 3, 4, 5];
let resultado = promedioListaDeNúmeros(números);
console.log('Promedio:', resultado);

function númeroGrandeYChico(listaNúmeroMásYMenosGrande) {
    let mayor = listaNúmeroMásYMenosGrande[0];
    let menor = listaNúmeroMásYMenosGrande[0];
    for (let c = 1; c < listaNúmeroMásYMenosGrande.length; c++) {
        if(listaNúmeroMásYMenosGrande[c] > mayor) {
            mayor = listaNúmeroMásYMenosGrande [c];
        }
        if(listaNúmeroMásYMenosGrande[c] < menor) {
            menor = listaNúmeroMásYMenosGrande [c];
        }
    }
    console.log('Mayor:', mayor);
    console.log('Menor: ', menor);
}
let númerosGrandeYChico = [1, 10, 100, 1000]
númeroGrandeYChico(númerosGrandeYChico);

function sumaDeListas(listaNúmeroMásYMenosGrande) {
    let sumaDeLista = 0
    for (let s = 0; s < listaNúmeroMásYMenosGrande.length; s++){
        sumaDeLista += listaNúmeroMásYMenosGrande[s];
    }
    return sumaDeLista;
}
let números2 = [1, 10, 100, 1000];
let sumaDeLista = sumaDeListas(números2);
console.log('La suma de todos sus elementos es:', sumaDeLista);

function encontrarIndice(listaNúmeroMásYMenosGrande, indice) {
    for (let o = 0; o < listaNúmeroMásYMenosGrande.length; o++) {
        if (listaNúmeroMásYMenosGrande[o] === indice) {
            return o;
        }
    }
    return -1;
}
let indice = 1;
let resultado2 = encontrarIndice (listaNúmeroMásYMenosGrande, indice);
console.log('El indice de tu elemento es:', resultado2);

function sumaDosListas(listaDeNúmeros, listaNúmeroMásYMenosGrande) {
    if (listaDeNúmeros.length !== listaNúmeroMásYMenosGrande.lenght) {
        return
    }
    let listaResultado = [];
    for (let w = 0; w < listaDeNúmeros.length; w++);{
        let suma4 = listaDeNúmeros[w] + listaNúmeroMásYMenosGrande[w];
        listaResultado.push(suma4);
    }
    return listaResultado;
}
console.log('Lista: ', listaDeNúmeros);
console.log('Lista: ', listaNúmeroMásYMenosGrande);
let resultado3 = sumaDosListas(listaDeNúmeros, listaNúmeroMásYMenosGrande);
console.log('El resultado de la suma de tus listas es= ', resultado3);

function cuadradoDeLista(listaDeNúmeros) {
    for(let c = 0; c < listaDeNúmeros.lenght; c++) {
        return listaDeNúmeros[c] * listaDeNúmeros[c];
    }
}
cuadradoDeLista(listaDeNúmeros);
console.log('Lista: ', resultadoCuadrado);