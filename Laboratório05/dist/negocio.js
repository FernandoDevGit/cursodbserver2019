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
const emprestimoRepositorio_1 = require("./persistencia/emprestimoRepositorio");
const livroRepositorio_1 = require("./persistencia/livroRepositorio");
//• consultarLivros() – para retornar um array com todos os livros da biblioteca, junto com a 
//informação de que estão disponíveis ou não e, se estiverem indisponíveis, a data de entrega futura;
function consultarLivros() {
    return __awaiter(this, void 0, void 0, function* () {
        let livros = yield livroRepositorio_1.LivroRepositorio.buscaLivros();
        let emprestimo = yield emprestimoRepositorio_1.emprestimoRepositorio.buscar();
        console.log(livros);
        console.log(emprestimo);
        for (let liv of livros) {
            for (let emp of emprestimo) {
                if (emp.livro.titulo == liv.titulo) {
                    console.log("sim");
                }
            }
        }
        return livros;
    });
}
exports.consultarLivros = consultarLivros;
//• emprestarLivro(id_livro) – para criar um novo empréstimo caso o livro esteja disponível e marcar 
//como data futura de entrega 7 dias a partir da data de empréstimo;
//• devolverLivro(id_livro) – para efetuar a devolução de um livro e calcular o valor da multa associada
//caso a entrega do livro tenha sido realizada em uma data posterior à data prevista de entrega
//(defina um valor qualquer de multa por dia de atraso).
//# sourceMappingURL=negocio.js.map