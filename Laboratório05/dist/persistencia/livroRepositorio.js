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
const livroModel_1 = require("./livroModel");
class LivroRepositorio {
    static criar(livro) {
        return __awaiter(this, void 0, void 0, function* () {
            let novoLivro = yield livroModel_1.LivroModel.create(livro);
            return novoLivro.save();
        });
    }
    static buscaLivros() {
        return __awaiter(this, void 0, void 0, function* () {
            let livros = livroModel_1.LivroModel.find();
            return livros.exec();
        });
    }
    static buscaLivroId(idLivro) {
        return __awaiter(this, void 0, void 0, function* () {
            let livro = yield livroModel_1.LivroModel.findById(idLivro).exec();
            return livro;
        });
    }
    static buscaLivrosAutor(id) {
        return __awaiter(this, void 0, void 0, function* () {
            let livros = livroModel_1.LivroModel.find({ autores: id }).exec();
            return livros;
        });
    }
}
exports.LivroRepositorio = LivroRepositorio;
//# sourceMappingURL=livroRepositorio.js.map