import {connect} from 'mongoose';
import { AutorRepositorio } from './persistencia/autorRepositorio';

async function main() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cliente = await connect(url, { useNewUrlParser: true });
        console.log('Conectado com sucesso');

        // console.log('Adicionando autores...');
        // let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        // console.log(`Autor inserido: ${a1}`);
        // let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        // console.log(`Autor inserido: ${a2}`);
        
        // console.log('Buscando autores...');
        // let autores = await AutorRepositorio.buscar();
        // autores.forEach(autor => console.log(autor));

        //console.log("buscando autores pelo ultimo nome");
        // let autores = await AutorRepositorio.buscaAutoresUltimoNome('Doe');
        // autores.forEach(autor => console.log(autor));

        //console.log("buscando autores pelo primeiro nome");
        // let autores = await AutorRepositorio.buscaAutoresPrimeiroNome('Mary');
        // autores.forEach(autor => console.log(autor));

        //console.log("Modificando o ultimo nome");
        let autor = await AutorRepositorio.mudaRegistro("John");
        console.log(autor);

        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

main();