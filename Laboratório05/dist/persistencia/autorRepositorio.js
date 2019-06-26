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
const autorModel_1 = require("./autorModel");
class AutorRepositorio {
    static criar(autor) {
        return __awaiter(this, void 0, void 0, function* () {
            let novoAutor = yield autorModel_1.AutorModel.create(autor);
            return novoAutor.save();
        });
    }
    static buscar() {
        return __awaiter(this, void 0, void 0, function* () {
            let consulta = autorModel_1.AutorModel.find();
            return consulta.exec();
        });
    }
    static buscaAutoresUltimoNome(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            let consulta = yield autorModel_1.AutorModel.find().where('ultimo_nome').equals(nome).exec();
            return consulta;
        });
    }
    static buscaAutoresPrimeiroNome(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            let consulta = yield autorModel_1.AutorModel.find().where('primeiro_nome').equals(nome).exec();
            return consulta;
        });
    }
    static mudaRegistro(nome) {
        return __awaiter(this, void 0, void 0, function* () {
            let autor = yield autorModel_1.AutorModel.updateOne({ primeiro_nome: nome }, { $set: { ultimo_nome: "John" } }).exec();
            return autor;
        });
    }
}
exports.AutorRepositorio = AutorRepositorio;
//# sourceMappingURL=autorRepositorio.js.map