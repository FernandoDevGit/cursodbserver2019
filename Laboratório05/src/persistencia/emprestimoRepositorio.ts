import { Emprestimo } from "../entidades/emprestimo";
import { EmprestimoModel }from "./emprestimoModel";

export class emprestimoRepositorio {

    
    static async criar(autor: Autor): Promise<Autor> {
        let novoAutor = await AutorModel.create(autor);
        return novoAutor.save();
    }
}