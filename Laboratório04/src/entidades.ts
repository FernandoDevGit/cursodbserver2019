//a) Crie um módulo em um arquivo chamado “entidades” para conter as 
//definições das classes Cofrinho e Moeda e exporte suas definições.

export class Moeda {

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

export class Cofrinho {

    private cofrinho: Moeda[];

    constructor(){
        this.cofrinho = [];
    }

    adicionar(moeda: Moeda):void{

        this.cofrinho.push(moeda);        
    }

    menorMoedaV1(): number {

        if(this.cofrinho.length == 0) return 0;
        let menor: number = this.cofrinho[0].valor;

        for(let moeda of this.cofrinho){
            if(moeda.valor < menor) menor = moeda.valor;
        }
        return menor;
    }

    menorMoedaV2(): Moeda{

        let menorMoeda: Moeda = new Moeda("vazia",0);

        if(this.cofrinho.length == 0){
            return menorMoeda;
        }

        menorMoeda = this.cofrinho[0];

        for(let moeda of this.cofrinho){
            if(moeda.valor < menorMoeda.valor) menorMoeda = moeda;
        }

        return menorMoeda;
    }

    frequenciaMoedas(): Map<string, number>{

        let frequencia: Map<string, number> = new Map;

        for(let moeda of this.cofrinho){

            if(frequencia.has(moeda.nome)){
                frequencia.set(moeda.nome,frequencia.get(moeda.nome)! + 1)
            }
            else frequencia.set(moeda.nome, 1);
        }        
        return frequencia;        
    }
}

