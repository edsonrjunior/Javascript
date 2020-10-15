function fatorial(numero){
    fatorial = 1
    
    for (let i = numero; i >= 1; i--){
        fatorial = fatorial * i    
    }

    return fatorial 
}

console.log(fatorial(150))