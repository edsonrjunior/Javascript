const prod1 = {}
prod1.nome = 'Celular ultra mega'
prod1.preco = 4998.90
prod1['desconto legal'] = 0.40 //evitar atributos com espaços

console.log(prod1)

const prod2 = {
    nome: 'Camisa Polo',
    preco: 79.90,
    obj: {
        blabla: 1,
        bla: 2,
        obj:{
            nome: 'Edson',
            sobrenome: 'Raimundo Jr' 
        }
    }
}

console.log(prod2)