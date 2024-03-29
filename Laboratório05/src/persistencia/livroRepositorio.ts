import { Livro } from "../entidades/livro";
import { LivroModel } from "./livroModel";
import { ObjectId } from "bson";
import { AutorModel } from "./autorModel";


export class LivroRepositorio {

    static async criar(livro: Livro): Promise<Livro> {
        let novoLivro = await LivroModel.create(livro);
        return novoLivro.save();
    }

    static async buscaLivros(): Promise<Livro[]> {

        let livros = LivroModel.find();
        return livros.exec();
    }

    static async buscaLivroId(idLivro: ObjectId): Promise<Livro|null> {

        let livro = await LivroModel.findById(idLivro).exec();
        return livro;
    }

    static async buscaLivrosAutor(id: ObjectId): Promise<Livro[]> {

        let livros = LivroModel.find( {autores: id}).exec();
        return livros;
    }

}