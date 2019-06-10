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

// class Moeda {

//     readonly valor: number;
//     readonly nome: string;

//     constructor (nome: string, valor: number ){
//         this.valor = valor;
//         this.nome = nome;
//     }

//     private getNome(): string{
//         return this.nome;
//     }

//     private getValor(): number{
//         return this.valor;
//     }
// }

// class Cofrinho {

//     private cofrinho: Moeda[];

//     constructor(){
//         this.cofrinho = [];
//     }


//     adicionar(moeda: Moeda):void{

//         this.cofrinho.push(moeda);        
//     }

//     calcularTotal(): number{
        
//         let total: number = 0;

//         for(let valor of this.cofrinho){
//             total = total + valor.valor;
//         }
//         return total;
//     }
// }

// //b) Escreva um bloco de código para testar a implementação.

// let moedaUm = new Moeda("dez",10);
// let moedaDois = new Moeda("dez",10);
// let moedaTres = new Moeda("cinquenta",50);

// let cofrinho = new Cofrinho();
// cofrinho.adicionar(moedaUm);
// cofrinho.adicionar(moedaDois);
// cofrinho.adicionar(moedaTres);

// console.log(cofrinho.calcularTotal());

// //c) Utilize um código para serializar um objeto Cofrinho em JSON e procure entender
// // o formato de string que foi construído.

// let cofrinhoJson = JSON.stringify(cofrinho);
// console.log(cofrinhoJson);

//3. Altere a implementação da classe Cofrinho do exercício anterior para incluir:
//• Método que retorna o valor da menor moeda armazenada.
//• Método que retorna uma instância da menor moeda armazenada.
//• Método que retorna um mapa/dicionário com a frequência (o número de moedas)
//de cada moeda existente (1 centavo, 5 centavos, 10 centavos, 25 centavos, 50 centavos, 1 real) no cofrinho.

// class Moeda {

//     readonly valor: number;
//     readonly nome: string;

//     constructor (nome: string, valor: number ){
//         this.valor = valor;
//         this.nome = nome;
//     }

//     private getNome(): string{
//         return this.nome;
//     }

//     private getValor(): number{
//         return this.valor;
//     }
// }

// class Cofrinho {

//     private cofrinho: Moeda[];

//     constructor(){
//         this.cofrinho = [];
//     }

//     adicionar(moeda: Moeda):void{

//         this.cofrinho.push(moeda);        
//     }

//     menorMoedaV1(): number {

//         if(this.cofrinho.length == 0) return 0;
//         let menor: number = this.cofrinho[0].valor;

//         for(let moeda of this.cofrinho){
//             if(moeda.valor < menor) menor = moeda.valor;
//         }
//         return menor;
//     }

//     menorMoedaV2(): Moeda{

//         let menorMoeda: Moeda = new Moeda("vazia",0);

//         if(this.cofrinho.length == 0){
//             return menorMoeda;
//         }

//         menorMoeda = this.cofrinho[0];

//         for(let moeda of this.cofrinho){
//             if(moeda.valor < menorMoeda.valor) menorMoeda = moeda;
//         }

//         return menorMoeda;
//     }

//     frequenciaMoedas(): Map<string, number>{

//         let frequencia: Map<string, number> = new Map;

//         for(let moeda of this.cofrinho){

//             if(frequencia.has(moeda.nome)){
//                 frequencia.set(moeda.nome,frequencia.get(moeda.nome)! + 1)
//             }
//             else frequencia.set(moeda.nome, 1);
//         }        
//         return frequencia;        
//     }
// }

// let moedaUm : Moeda = new Moeda("1 centavo",1);
// let moedaUm2 : Moeda = new Moeda("1 centavo",1);
// let moedaUm3 : Moeda = new Moeda("1 centavo",1);
// let moedaCinco : Moeda = new Moeda("5 centavos",5);
// let moedaDez : Moeda = new Moeda("10 centavos",10);
// let moedaVinteCinco : Moeda = new Moeda("25 centavos",25);
// let moedaCinquenta : Moeda = new Moeda("50 centavos",50);
// let moedaCinquenta2 : Moeda = new Moeda("50 centavos",50);
// let moedaCinquenta3 : Moeda = new Moeda("50 centavos",50);
// let moedaReal : Moeda = new Moeda("1 real",100);

// let cofre: Cofrinho = new Cofrinho();

// cofre.adicionar(moedaUm);
// cofre.adicionar(moedaUm2);
// cofre.adicionar(moedaUm3);
// cofre.adicionar(moedaCinco);
// cofre.adicionar(moedaDez);
// cofre.adicionar(moedaDez);
// cofre.adicionar(moedaVinteCinco);
// cofre.adicionar(moedaCinquenta);
// cofre.adicionar(moedaCinquenta2);
// cofre.adicionar(moedaCinquenta3);
// cofre.adicionar(moedaReal);

// console.log(cofre.menorMoedaV1())

// console.log(cofre.menorMoedaV2())

// console.log(cofre.frequenciaMoedas())


//4. Seja a seguinte hierarquia de herança representada em um diagrama e classes UML:

//a) Implemente as classes em TypeScript. Para o cálculo do valor da mensalidade utilize
//as seguintes informações: Esta empresa de seguros cobra uma mensalidade correspondente 
//a 10% do salário se o cliente tem menos de 60 anos e 15% se o cliente tem 60 anos ou mais,
// no caso de clientes que são pessoa física. Para pessoas jurídicas é cobrada uma mensalidade variável,
//calculada através de negociações com o cliente.

//b) Implemente uma classe CadastroClientes para armazenar o cadastro de clientes da empresa de seguros.
//Apresente métodos para adicionar um cliente ao cadastro e retornar uma string contendo a listagem
//de todos os clientes, mostrando seu nome e o valor da mensalidade a ser paga.

abstract class Cliente{
    
    private nome: string;

    constructor(umNome: string){

        this.nome = umNome;
    }

    getNome(): string{

        return this.nome;
    }

    abstract getMensalidade():number;
}

class ClienteFisico extends Cliente{

    private idade: number;
    private salario: number;

    constructor(umNome: string, umaIdade: number, umSalario: number){

        super(umNome); 
        this.idade = umaIdade;
        this.salario = umSalario;
    }

    getIdade(): number{
        return this.idade;
    }
    setIdade(idade: number): void{
        this.idade = idade;
    }

    getSalario(): number{
        return this.salario;
    }
    setSalario(salario: number): void{
        this.salario = salario;
    }

    getMensalidade(): number{

        if(this.idade < 60) return this.salario * 0.10;
            else return this.salario * 0.15;
    } 
}

class ClienteJuridico extends Cliente{
    
    private mensalidade: number;

    constructor(umNome: string, umaMensalidade: number){        
        super(umNome);
        this.mensalidade = umaMensalidade;
    }

    setMensalidade(mensalidade: number): void{
        this.mensalidade = mensalidade;
    }

    getMensalidade(): number{
        return this.mensalidade;
    } 

}

class CadastroClientes{

    private clientes: Cliente[];

    constructor(){
        this.clientes = [];
    }

    adicionarCliente(cliente: Cliente): void{
        this.clientes.push(cliente)
    }

    listaClientes(): String{

        let lista: string = "";

        for(let cliente of this.clientes){

            lista = lista + "nome: "+cliente.getNome()+" - mensalidade: "+cliente.getMensalidade()+"\n";
        }
        return lista;
    }
}

let cliente1 : Cliente = new ClienteFisico("Maria",20,100);
let cliente2 : Cliente = new ClienteFisico("Joao",65,100);
let cliente3 : Cliente = new ClienteJuridico("Pedro",1000);
let cliente4 : Cliente = new ClienteFisico("Sandra",70,300);
let cliente5 : Cliente = new ClienteJuridico("Carla",2000);

let cadastroClientes: CadastroClientes = new CadastroClientes();

cadastroClientes.adicionarCliente(cliente1);
cadastroClientes.adicionarCliente(cliente2);
cadastroClientes.adicionarCliente(cliente3);
cadastroClientes.adicionarCliente(cliente4);
cadastroClientes.adicionarCliente(cliente5);

console.log(cadastroClientes.listaClientes());






