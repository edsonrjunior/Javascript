function juroSimples(capitalInicial, juros, tempo){
    return montante = capitalInicial * (1 + (juros /100) * tempo)
}

function juroComposto(capitalInicial, juros, tempo){
    montante = capitalInicial * (1 + (juros / 100)) ** tempo
    return montante.toFixed(2)
}


console.log(juroSimples(1000, 1, 10))
console.log(juroComposto(10000, 10, 3))
