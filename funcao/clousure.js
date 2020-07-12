//Clousure é um escopo criando quando uma função é declarada
//Esse escopo permite a funcao acessar e manipular variáveis externas à função.

const local = 'Global'

function fora(){
    const local = 'Local'
    function dentro(){
        return local
    }
    return dentro
}


const minhaFuncao = fora()
console.log(minhaFuncao())
