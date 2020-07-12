//Factory simples

function criarProduto(nome, preco){
    const desconto = 2

    return{
        nome,
        preco,
        desconto: 0.1 
    }
}
console.log(criarProduto('TV 50', 900))