function conversor(valorDecimal){
    const valorEmReal = `R$ ${valorDecimal.toFixed(2).toString().replace('.', ',')} ` 
    console.log(valorEmReal)
}

conversor(0.30000000000000004)