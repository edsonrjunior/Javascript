function records(listaString){
       
    lista = listaString.split(', ')
   
    let recordsBatidos = 0
    let piorJogor = 0
    
    let maiorPonto = lista[0]
    let menorPonto = lista[0]
    
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] > maiorPonto){
            maiorPonto = lista[i]
            recordsBatidos++
        }else if(lista[i] < menorPonto){
            menorPonto = lista[i]
            piorJogor = i          
        }         
    }
    return [recordsBatidos, piorJogor + 1]    
}


console.log(records('10, 20, 20, 8, 25, 3, 0, 30, 1'))