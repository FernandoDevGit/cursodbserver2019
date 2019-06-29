import { Emprestimo } from "../entidades/emprestimo";
import { EmprestimoModel }from "./emprestimoModel";
import { ObjectId } from "bson";
import { LivroModel } from "./livroModel";

export class emprestimoRepositorio {
    
    static async criar(emprestimo: Emprestimo): Promise<Emprestimo> {

        let novoEmprestimo = await EmprestimoModel.create(emprestimo);
        return novoEmprestimo.save();
    }

    static async buscar(): Promise<Emprestimo[]> {
        let consulta = EmprestimoModel.find().populate("livro",LivroModel);
        
        return consulta.exec();
    }

    static async mudaDataDeEntrega( novaData: Date,idEmprestimo: ObjectId): Promise<Emprestimo>{

        let Emprestimo = await EmprestimoModel.findById(idEmprestimo).exec();

        if(Emprestimo != null){
            Emprestimo.dataEntrega = novaData;
            await Emprestimo.save();
            return Emprestimo;
        }
        else{
        let EmprestimoP : Emprestimo = new EmprestimoModel();           
        return EmprestimoP;
        }
    }  
    
}