const notas = [7.5, 8.8, 7.3, 3.6, 1.6 , 5.8, 6]

for(let i in notas){
    console.log(i, notas[i])
}

const pessoa = {
    nome : 'Edson',
    sobrenome: 'Raimundo Jr',
    idade: 29,
    peso: 75
}

for(let atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}