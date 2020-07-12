function tipoDeTriangulo(lado1, lado2, lado3){
    if(lado1 == lado2 && lado2 == lado3){
        console.log('Triângulo equilátero') //tudo igual
    }else if(lado1 == lado2 || lado2 == lado3 || lado1 == lado3){
        console.log('Triângulo isósceles') // tudo diferente
    }
    else{
        console.log('Triângulo escaleno') //dois lados iguais
    }
  }               


tipoDeTriangulo(2, 3, 2)






 