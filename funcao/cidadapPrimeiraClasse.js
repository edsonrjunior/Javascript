
//De forma literal
function func1(){

}

//Armazenar em uma variável
const func2 = function (){}

//Armazenar em um array
const array = [function (a,b){return a + b}, func1, func2]

console.log(array[0],(2,5))

//Armazenar em um atributo de objeto
const obj = {}
obj.fala = function (){ return 'Opa'}
console.log(obj.fala())

//Passar função como parametro
function run(fun){
    fun()
}

run(function(){
    console.log('Executando...')
})

//Uma funcao pode conte/retornar uma funcao
function soma(a, b){
    return function (c){
        console.log(a + b + c)
    }
}

soma(2, 4)( 4)
const cincoMais = soma(2, 3)
cincoMais(5)