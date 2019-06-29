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
const emprestimoModel_1 = require("./emprestimoModel");
class emprestimoRepositorio {
    static criar(emprestimo) {
        return __awaiter(this, void 0, void 0, function* () {
            let novoEmprestimo = yield emprestimoModel_1.EmprestimoModel.create(emprestimo);
            return novoEmprestimo.save();
        });
    }
    static buscar() {
        return __awaiter(this, void 0, void 0, function* () {
            let consulta = emprestimoModel_1.EmprestimoModel.find();
            return consulta.exec();
        });
    }
    static mudaDataDeEntrega(novaData, idEmprestimo) {
        return __awaiter(this, void 0, void 0, function* () {
            let Emprestimo = yield emprestimoModel_1.EmprestimoModel.findById(idEmprestimo).exec();
            if (Emprestimo != null) {
                Emprestimo.dataEntrega = novaData;
                yield Emprestimo.save();
                return Emprestimo;
            }
            else {
                let EmprestimoP = new emprestimoModel_1.EmprestimoModel();
                return EmprestimoP;
            }
        });
    }
}
exports.emprestimoRepositorio = emprestimoRepositorio;
//# sourceMappingURL=emprestimoRepositorio.js.map