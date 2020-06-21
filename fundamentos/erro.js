function tratarErroELancar(erro){
  //  throw new Error('...')
   throw 10
// throw false
}


function imprimirNomeGritando(obj){
    try {
        console.log(obj.nome.toUpperCase() + '!!!')    
    } catch (e) {
        tratarErroELancar()
    }finally{
        console.log('Final...')
   }    
}

const obj = {
    name : 'Edson',
    sobrenome : 'Raimundo Junior',
    endereco : {
        logradouro : 'Avenida Kenkiti Simomto',
        numero : 49,
        bairro: 'Jaguaré',
        cidade: 'São Paulo',
        UF: 'SP'
    }

}

imprimirNomeGritando(obj)