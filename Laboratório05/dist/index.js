"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bson_1 = require("bson");
const emprestimoRepositorio_1 = require("./persistencia/emprestimoRepositorio");
const negocio_1 = require("./negocio");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        const url = 'mongodb://localhost:27017/biblioteca';
        try {
            const cliente = yield mongoose_1.connect(url, { useNewUrlParser: true });
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
            // let livroE = await LivroRepositorio.criar({titulo: "Arvore preta",autores:[]});
            // let dataRetirada : Date = new Date();
            // let dataEntrega : Date = new Date();
            // dataEntrega.setHours(7*24);
            // let _idd : ObjectID = new ObjectID(555);
            // let emprestimo = await emprestimoRepositorio.criar({livro: livroE, dataRetirada, dataEntrega});
            // console.log(emprestimo);
            //4b2) consultar o banco de dados e retornar um array com todos os empréstimos;
            // let resultado = await emprestimoRepositorio.buscar();
            // console.log(resultado);
            //4c1) alterar os dados de um determinado empréstimo no banco de dados.
            // let idEmprestimo : ObjectID = new ObjectID("5d0cfd191e66232068954d36");
            // let novaData : Date = new Date();
            // let resultado = await emprestimoRepositorio.mudaDataDeEntrega(novaData,idEmprestimo);
            // console.log(resultado);
            //console.log('criando empréstimos');
            //------------------------------------------------------------------------------------------------------------
            //5)Crie uma biblioteca de funções de negócio (em um novo arquivo “negocio,js”) para manipular as operações
            //sobre uma biblioteca.Defina as seguintes funções:        
            //A• consultarLivros() – para retornar um array com todos os livros da biblioteca, junto com a 
            //informação de que estão disponíveis ou não e, se estiverem indisponíveis, ad data de entrega futura;
            //console.log(await consultarLivros());
            let idLivro = new bson_1.ObjectID("5d095c0502957644b86243c8");
            //console.log(await emprestarLivro(idEmprestimo));
            console.log(yield emprestimoRepositorio_1.emprestimoRepositorio.verificarEmprestimo(idLivro));
            console.log(yield negocio_1.emprestarLivro(idLivro));
            //console.log(emprestimoRepositorio.buscar());
            //• emprestarLivro(id_livro) – para criar um novo empréstimo caso o livro esteja disponível e marcar 
            //como data futura de entrega 7 dias a partir da data de empréstimo;
            //• devolverLivro(id_livro) – para efetuar a devolução de um livro e calcular o valor da multa associada
            //caso a entrega do livro tenha sido realizada em uma data posterior à data prevista de entrega
            //(defina um valor qualquer de multa por dia de atraso).
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
        }
        catch (erro) {
            console.log(`Erro: ${erro.message}`);
        }
    });
}
main();
//# sourceMappingURL=index.js.map