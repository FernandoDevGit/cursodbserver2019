import {connect} from 'mongoose';
import { AutorRepositorio } from './persistencia/autorRepositorio';
import { LivroRepositorio } from './persistencia/livroRepositorio';
import { link } from 'fs';
import { Autor } from './entidades/autor';
import { ObjectID } from 'bson';


async function main() {
    const url = 'mongodb://localhost:27017/biblioteca';
    try {
        const cliente = await connect(url, { useNewUrlParser: true });
        console.log('Conectado com sucesso');


        //------------------------------------------------------------------------------------

        // console.log('Adicionando autores...');
         let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        // console.log(`Autor inserido: ${a1}`);
        // let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        // console.log(`Autor inserido: ${a2}`);

        //4a) criar e armazenar um novo livro no banco de dados, retornando o livro recém criado;

        // let l1 = await LivroRepositorio.criar({titulo: "Arvore Azul",autores:[a1]});
        // console.log(`Autor inserido: ${l1}`);

        // let l2 = await LivroRepositorio.criar({titulo: "Arvore verde",autores:[a1]});
        // console.log(`Autor inserido: ${l2}`);

        // let l3 = await LivroRepositorio.criar({titulo: "Arvore roxa",autores:[]});

        //4b) consultar o banco de dados e retornar um array com todos os livros;

        // let livros = await LivroRepositorio.buscaLivros();
        // livros.forEach(livro => console.log(livro));

        //4c) consultar o banco de dados e retornar um array com todos os livros de 
        //um determinado autor cujo id foi passado por parâmetro.

        let idAutor : ObjectID = new ObjectID("5d095c0502957644b86243c7");
        let livros = await LivroRepositorio.buscaLivrosAutor(idAutor);
        livros.forEach(livro => console.log(livro));




        //console.log('criando empréstimos');

        //-------------------------------------------------------------------------------------
        
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
        // let autor = await AutorRepositorio.mudaRegistro("John");
        // console.log(autor);

        if (cliente && cliente.connection) {
            cliente.connection.close();
        }
    } catch (erro) {
        console.log(`Erro: ${erro.message}`);
    }
}

main();