function Pessoa(nome){
    return{
        falar: () => console.log(`Meu nome é ${nome}`)
    }
}

const x = new Pessoa('Edson')
x.falar()

function Pessoa2(nome){
    this.nome = nome
    
    this.falar = function () {
        console.log(`Meu nome é ${nome}`) 
    }  
}

const y = new Pessoa2('Edson')
y.falar()


