public class Teste {
    public static void main(String [] args){
        imprimirResultado(-3);
    }

    public static void imprimirResultado(double nota){
        if(nota >= 9 && nota <= 10){
            System.out.print("Quadro de honra");
        }else if (nota >= 7 &&  nota <= 8.99){
            System.out.print("Aprovado");
        }else if (nota >= 4 && nota <= 6.99){
            System.out.print("Recuperacao");
        }else if (nota >= 0 && nota <= 3.99){
             System.out.print("Reprovado");
        }else{
             System.out.print("Nota inválida");
        }
    }
}