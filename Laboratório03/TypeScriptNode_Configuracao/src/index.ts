import { stringify } from "querystring";

//Laboratório 03

//1. Crie uma classe que represente um Círculo. Esta classe deve possuir as propriedades de um ponto central
//(coordenadas x, y) e um tamanho de raio. Defina métodos para o cálculo da área do círculo
//e do comprimento da circunferência. Escreva um bloco de código para testar a implementação do círculo.

// class Circulo {

//     private x: number;
//     private y: number;
//     private raio: number;

//     constructor(coordenadaX: number, coordenadaY: number, raio: number){
//         this.x = coordenadaX;
//         this.y = coordenadaY;
//         this.raio = raio;
//     }

//     areaDoCirculo(): number{
//         return Math.PI * Math.pow(this.raio,2);
//     }

//     comprimentoDaCircunferencia(): number{
//         return 2 * Math.PI * this.raio;
//     }
// }

// let circulo: Circulo = new Circulo(5,5,50);
// console.log(circulo.areaDoCirculo());
// console.log(circulo.comprimentoDaCircunferencia())

//2. Sejam os seguintes objetos representados em um diagrama de classes UML:

//a) Implemente as classes correspondentes em TypeScript. Você pode implementar 
//os métodos get apresentados na classe Moeda como: campos somente de leitura, métodos
//de acesso ou propriedades de leitura. Utilize uma coleção adequada para implementar a
// coleção de moedas na classe Cofrinho.

class Moeda {

    readonly valor: number;
    readonly nome: string;

    constructor (nome: string, valor: number ){
        this.valor = valor;
        this.nome = nome;
    }

    private getNome(): string{
        return this.nome;
    }

    private getValor(): number{
        return this.valor;
    }
}

class Cofrinho {

    private cofrinho: Moeda[];

    constructor(){
        this.cofrinho = [];
    }


    adicionar(moeda: Moeda):void{

        this.cofrinho.push(moeda);        
    }

    calcularTotal(): number{
        
        let total: number = 0;

        for(let valor of this.cofrinho){
            total = total + valor.valor;
        }
        return total;
    }
}

//b) Escreva um bloco de código para testar a implementação.

let moedaUm = new Moeda("dez",10);
let moedaDois = new Moeda("dez",10);
let moedaTres = new Moeda("cinquenta",50);

let cofrinho = new Cofrinho();
cofrinho.adicionar(moedaUm);
cofrinho.adicionar(moedaDois);
cofrinho.adicionar(moedaTres);

console.log(cofrinho.calcularTotal());

//c) Utilize um código para serializar um objeto Cofrinho em JSON e procure entender
// o formato de string que foi construído.

let cofrinhoJson = JSON.stringify(cofrinho);
console.log(cofrinhoJson);