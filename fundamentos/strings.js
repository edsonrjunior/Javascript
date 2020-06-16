const escola = "Cod3r"

console.log(escola.charAt(4))

//Não retorna erro
console.log(escola.charAt(5))

//Retorna o valor da tabela ASC (Unicode)
console.log(escola.charCodeAt(3))

//Retorna o valor que está no indice
console.log(escola.indexOf(3))

//Vai até o indice 3 mas não imprime o indice 3
console.log(escola.substring(0, 3))

//Pode-se usar aspas simples ou duplas. Não há diferença
console.log('Escola '.concat(escola).concat("!"))

//Substitui o valor do indice 3 por 3
console.log(escola.replace(3, 'e'))

console.log('Ana,Maria,Pedro'.split(','))

