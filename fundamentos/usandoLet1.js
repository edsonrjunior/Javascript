//Js sempre procura pelo escopo menor depois o maior

var numero = 1
{
    let numero = 2
    console.log('dentro', numero)
}
console.log('fora = ', numero)