let comparaComThis = function(param){
    console.log(this === param)
}

comparaComThis(global)
comparaComThis(this)
const obj = {}
comparaComThis = comparaComThis.bind(obj)
comparaComThis(obj)

let comparaComThisArrow = param => console.log(param === this)

comparaComThisArrow(global)
comparaComThisArrow(this)
comparaComThisArrow(module.exports)

comparaComThisArrow = comparaComThisArrow.bind(obj)
comparaComThisArrow(obj)
comparaComThisArrow(module.exports)
