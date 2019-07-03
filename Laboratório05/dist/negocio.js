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
const livroModel_1 = require("./persistencia/livroModel");
//• consultarLivros() – para retornar um array com todos os livros da biblioteca, junto com a
//informação de que estão disponíveis ou não e, se estiverem indisponíveis, a data de entrega futura;
function consultarLivros() {
    return __awaiter(this, void 0, void 0, function* () {
        let livros = yield livroRepositorio_1.LivroRepositorio.buscaLivros();
        let emprestimo = yield emprestimoRepositorio_1.emprestimoRepositorio.buscar();
        let statusLivros = [];
        let livro;
        for (let liv of livros) {
            for (let emp of emprestimo) {
                if (emp.livro.titulo == liv.titulo) {
                    let livro = new livroModel_1.LivroModel({ titulo: liv.titulo + "= Indisponivel - devolução: " + emp.dataEntrega, autore: liv.autores });
                    statusLivros.push(livro);
                }
                else {
                    let livro = new livroModel_1.LivroModel({ titulo: liv.titulo + " = Disponivel", autore: liv.autores });
                    statusLivros.push(livro);
                }
            }
        }
        return statusLivros;
    });
}
exports.consultarLivros = consultarLivros;
//• emprestarLivro(id_livro) – para criar um novo empréstimo caso o livro esteja disponível e marcar
//como data futura de entrega 7 dias a partir da data de empréstimo;
function emprestarLivro(idLivro) {
    return __awaiter(this, void 0, void 0, function* () {
        let statusEmprestimo = yield emprestimoRepositorio_1.emprestimoRepositorio.verificarEmprestimo(idLivro);
        if (!statusEmprestimo) {
            let livro = yield livroRepositorio_1.LivroRepositorio.buscaLivroId(idLivro);
            if (livro != null) {
                let dataRetirada = new Date();
                let dataEntrega = new Date();
                dataEntrega.setHours(7 * 24);
                let emprestimo = yield emprestimoRepositorio_1.emprestimoRepositorio.criar({ livro, dataRetirada, dataEntrega });
                return "emprestimo realizado";
            }
        }
        return "não realizado - livro já emprestado ";
    });
}
exports.emprestarLivro = emprestarLivro;
//• devolverLivro(id_livro) – para efetuar a devolução de um livro e calcular o valor da multa associada
//caso a entrega do livro tenha sido realizada em uma data posterior à data prevista de entrega
//(defina um valor qualquer de multa por dia de atraso).
function devolverLivro(idLivro) {
    return __awaiter(this, void 0, void 0, function* () {
        let emprestimo = yield emprestimoRepositorio_1.emprestimoRepositorio.buscarEmprestimoLivroId(idLivro);
        let multa = 5;
        let dataAtual = new Date();
        if (emprestimo == null)
            return "não existe emprestimos com esse titulo";
        let dia = 1000 * 60 * 60 * 24;
        let diasMulta = (Math.abs(emprestimo.dataEntrega.getTime() - dataAtual.getTime())) / dia;
        if (diasMulta > 0) {
            return "entrega atrasa: " + diasMulta.toFixed(0) + " dias - multa: " + (diasMulta * multa).toFixed(2);
        }
        else {
            return "entrega realizada - sem multa";
        }
    });
}
exports.devolverLivro = devolverLivro;
//# sourceMappingURL=negocio.js.map