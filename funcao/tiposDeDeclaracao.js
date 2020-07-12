console.log('soma: ', soma(1, 2)) 

//console.log(sub(1, 2)) - erro. precisa ser chamada depois de declarada
//console.log(mult(1, 2)) - erro. precisa ser chamada depois de declarada


//function declaration
function soma(x, y){
    return x + y
}

//function expression
const sub = function(x, y){
       return x - y 
}

//named function
const mult = function mult(x, y){
    return x * y
}
 
console.log('sub: ', sub(1, 2))
console.log('mult: ', mult(1, 2))