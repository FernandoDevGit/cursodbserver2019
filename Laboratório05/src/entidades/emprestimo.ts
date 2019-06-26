import { Livro } from "./livro";
import { ObjectId } from "bson";

export interface Emprestimo {
    livro: Livro,
    dataRetirada: Date,
    dataEntrega: Date
}
