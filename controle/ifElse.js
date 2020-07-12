const imprimirResultado = function(nota){
    if(nota >= 7){
       console.log('Aprovado') 
    }else{
        console.log('Reprovado')
    }
}

//const imprimirResultado2 = nota => {
//   return nota >=7 ? 'Aprovado' : 'Reprovado'
//}

//console.log(imprimirResultado2(8))


imprimirResultado(4)
imprimirResultado(10)
imprimirResultado('Epa') //cuidado

