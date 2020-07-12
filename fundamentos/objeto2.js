console.log(typeof Object) //funcao
console.log(typeof new Object()) //objeto

const Cliente = function(){} //funcao
console.log(typeof Cliente) //objeto
console.log(typeof new Cliente()) //funcao

class Produto{} //objeto
console.log(typeof Produto) //funcao
console.log(typeof new Produto()) //objeto