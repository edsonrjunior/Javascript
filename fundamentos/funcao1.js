//Funcao sem retorno
function imprimirSoma(a, b){
    console.log(a + b)
}

imprimirSoma(3, 2)
imprimirSoma(3)
imprimirSoma(3, 2, 2,2 ,2 )
imprimirSoma()

//Funcao com retorno
function soma(a, b = 3){
    return a + b
}

console.log(soma(2))
console.log(soma(2, 4))
console.log(soma())
