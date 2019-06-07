//Laboratório 03

//1. Crie uma classe que represente um Círculo. Esta classe deve possuir as propriedades de um ponto central
//(coordenadas x, y) e um tamanho de raio. Defina métodos para o cálculo da área do círculo
//e do comprimento da circunferência. Escreva um bloco de código para testar a implementação do círculo.

class Circulo {

    private x: number;
    private y: number;
    private raio: number;

    constructor(coordenadaX: number, coordenadaY: number, raio: number){
        this.x = coordenadaX;
        this.y = coordenadaY;
        this.raio = raio;
    }

    areaDoCirculo(): number{
        return Math.PI * Math.pow(this.raio,2);
    }

    comprimentoDaCircunferencia(): number{
        return 2 * Math.PI * this.raio;
    }
}

let circulo: Circulo = new Circulo(5,5,50);
console.log(circulo.areaDoCirculo());
console.log(circulo.comprimentoDaCircunferencia())