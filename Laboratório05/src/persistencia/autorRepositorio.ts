import { Autor } from "../entidades/autor";
import { AutorModel } from "./autorModel";

export class AutorRepositorio {
    static async criar(autor: Autor): Promise<Autor> {
        let novoAutor = await AutorModel.create(autor);
        return novoAutor.save();
    }

    static async buscar(): Promise<Autor[]> {
        let consulta = AutorModel.find();
        return consulta.exec();
    }

    static async buscaAutoresUltimoNome(nome: string): Promise<Autor[]>{
        let consulta = await AutorModel.find().where('ultimo_nome').equals(nome).exec();
        return consulta;
    }

    static async buscaAutoresPrimeiroNome(nome: string): Promise<Autor[]>{
        let consulta = await AutorModel.find().where('primeiro_nome').equals(nome).exec();
        return consulta;
    }

    static async mudaRegistro(nome: string): Promise<Autor>{

        let autor = await AutorModel.updateOne({primeiro_nome: nome},{$set: {ultimo_nome: "John"}}).exec();
        return autor;
    }        
}
