import {connect} from 'mongoose';
import { AutorRepositorio } from './persistencia/autorRepositorio';
import { LivroRepositorio } from './persistencia/livroRepositorio';
import { link } from 'fs';
import { Autor } from './entidades/autor';
import { ObjectID } from 'bson';
import { emprestimoRepositorio } from './persistencia/emprestimoRepositorio';
import { LivroModel } from './persistencia/livroModel';


async function main() {
    const url = 'mongodb://localhost:27017/biblioteca';

    try {
        const cliente = await connect(url, { useNewUrlParser: true });
        console.log('Conectado com sucesso');

        //------------------------------------------------------------------------------------

        // console.log('Adicionando autores...');
        // let a1 = await AutorRepositorio.criar({primeiro_nome: 'John', ultimo_nome: 'Doe'});
        // console.log(`Autor inserido: ${a1}`);
        // let a2 = await AutorRepositorio.criar({primeiro_nome: 'Mary', ultimo_nome: 'Doe'});
        // console.log(`Autor inserido: ${a2}`);

        //4a1) criar e armazenar um novo livro no banco de dados, retornando o livro recém criado;

        // let l1 = await LivroRepositorio.criar({titulo: "Arvore Azul",autores:[a1]});
        // console.log(`Autor inserido: ${l1}`);

        // let l2 = await LivroRepositorio.criar({titulo: "Arvore verde",autores:[a1]});
        // console.log(`Autor inserido: ${l2}`);

        // let l3 = await LivroRepositorio.criar({titulo: "Arvore roxa",autores:[]});

        //4b1) consultar o banco de dados e retornar um array com todos os livros;

        // let livros = await LivroRepositorio.buscaLivros();
        // livros.forEach(livro => console.log(livro));

        //4c1) consultar o banco de dados e retornar um array com todos os livros de 
        //um determinado autor cujo id foi passado por parâmetro.

        // let idAutor : ObjectID = new ObjectID("5d095c0502957644b86243c7");
        // let livros = await LivroRepositorio.buscaLivrosAutor(idAutor);
        // livros.forEach(livro => console.log(livro));

        //4a2) criar e armazenar um novo empréstimo no banco de dados, retornando o empréstimo criado;

        //let idLivro : ObjectID = new ObjectID("5d095c0502957644b86243c7");
        let livroE = await LivroRepositorio.criar({titulo: "Arvore cinza",autores:[]});

        let dataRetirada : Date = new Date();
        let dataEntrega : Date = new Date();
        dataEntrega.setHours(7*24);

        let emprestimo = await emprestimoRepositorio.criar({livro: livroE, dataRetirada, dataEntrega});

        console.log(emprestimo);

        // let x : Date = new Date();

        // console.log(x);
        // x.setHours(7*24);

        // console.log(x);

        //Date.now() + (100 * 1000);

        //console.log(emprestimo);
        //4b2) consultar o banco de dados e retornar um array com todos os empréstimos;
        //4c1) alterar os dados de um determinado empréstimo no banco de dados.

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