const notas = [7.4, 6.4, 8.0, 8, 5.5, 6.3, 8.9, 10]

//Sem callback
const notasBaixas1 = []

for(i in notas){
    if( notas[i] < 7){
        notasBaixas1.push(notas[i])
    }
}

console.log(notasBaixas1)

//Com callback
const notasBaixas2 = notas.filter(function(nota){
       return nota < 7
})
console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)


const notasMenoresQue7 = nota => nota < 7
const notasBaixas4 = notas.filter(notasMenoresQue7)
console.log(notasBaixas4)

