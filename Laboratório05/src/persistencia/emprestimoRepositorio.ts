import { Emprestimo } from "../entidades/emprestimo";
import { EmprestimoModel }from "./emprestimoModel";

export class emprestimoRepositorio {

    
    static async criar(emprestimo: Emprestimo): Promise<Emprestimo> {
        let novoEmprestimo = await EmprestimoModel.create(emprestimo);
        return novoEmprestimo.save();
    }
}