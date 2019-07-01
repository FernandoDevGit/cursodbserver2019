import { emprestimoRepositorio } from './persistencia/emprestimoRepositorio';
import { LivroRepositorio } from './persistencia/livroRepositorio';
import { LivroModel } from './persistencia/livroModel';
import { Livro } from './entidades/livro';
import { ObjectId } from 'bson';



//• consultarLivros() – para retornar um array com todos os livros da biblioteca, junto com a
//informação de que estão disponíveis ou não e, se estiverem indisponíveis, a data de entrega futura;

export async function consultarLivros(){

    let livros =  await LivroRepositorio.buscaLivros();
    let emprestimo =  await emprestimoRepositorio.buscar();
    let statusLivros : Livro[] = [];
    let livro : Livro;

    for(let liv of livros){

         for(let emp of emprestimo){

            if(emp.livro.titulo == liv.titulo){

                let livro : Livro = new LivroModel({titulo: liv.titulo + "= Indisponivel - devolução: "+emp.dataEntrega, autore: liv.autores})
                statusLivros.push(livro);
            }
            else{
                let livro : Livro = new LivroModel({titulo: liv.titulo + " = Disponivel", autore: liv.autores});
                statusLivros.push(livro);
            }
        }
    }
    return statusLivros;
}


//• emprestarLivro(id_livro) – para criar um novo empréstimo caso o livro esteja disponível e marcar
//como data futura de entrega 7 dias a partir da data de empréstimo;

export async function emprestarLivro(idLivro: ObjectId){

    let statusEmprestimo = await emprestimoRepositorio.verificarEmprestimo(idLivro);

    if(!statusEmprestimo){

        let livro = await LivroRepositorio.buscaLivroId(idLivro);

            if(livro != null){
                let dataRetirada : Date = new Date();
                let dataEntrega : Date = new Date();
                dataEntrega.setHours(7*24);

                let emprestimo = await emprestimoRepositorio.criar({livro, dataRetirada, dataEntrega});
                return "emprestimo realizado";
            }
    }
    return "não realizado - livro já emprestado ";
}


//• devolverLivro(id_livro) – para efetuar a devolução de um livro e calcular o valor da multa associada
//caso a entrega do livro tenha sido realizada em uma data posterior à data prevista de entrega
//(defina um valor qualquer de multa por dia de atraso).


