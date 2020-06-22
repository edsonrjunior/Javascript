function soBoaNoticia(nota){
    if(nota >= 7){
        console.log('Aprovado')
    }
}

soBoaNoticia(8)
soBoaNoticia(6)

function seForVerdade(valor){
    if(valor){
        console.log('É verdade...')
    }
}

seForVerdade()
seForVerdade(null)
seForVerdade(undefined)
seForVerdade(NaN)
seForVerdade(0)
seForVerdade([])
seForVerdade[0, 3, 3]
seForVerdade('hey')
seForVerdade({})