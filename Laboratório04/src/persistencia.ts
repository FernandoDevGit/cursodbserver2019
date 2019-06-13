//b) Crie um módulo em um arquivo chamado “persistência” para conter o código de funções
// para ler e escrever o conteúdo do Cofrinho em arquivos texto serializados no formato JSON.
//Nomeie as funções como salvarCofrinho(Cofrinho,nomeArquivo) e lerCofrinho(nomeArquivo).
//Utilize o mecanismo de tratamento de exceções e caso encontre uma falha na leitura ou escrita do arquivo,
//lance um novo tipo de exceção chamada PersistenciaErro.

import {Cofrinho,Moeda} from './entidades';
import { promises } from 'fs';

export async function salvarCofrinho(cofre: Cofrinho, nomeArquivo: string){

        let json : string =  JSON.stringify(cofre);
        promises.writeFile(nomeArquivo,json);
}

  export async function lerCofrinho(nomeArquivo: string): Promise<Cofrinho>{

    let arquivo = await promises.readFile(nomeArquivo,'utf-8');

    try {
        const obj = JSON.parse(arquivo);
        const cofre = new Cofrinho();

        for(let i=0; i<obj.cofrinho.length; i++){
            cofre.adicionar(new Moeda(obj.cofrinho[i].valor, obj.cofrinho[i].nome));
        }
        return cofre;
    } catch (erro) {
        throw erro;
    }
}