"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.EmprestimoModel = mongoose_1.model('Emprestimo', new mongoose_1.Schema({
    livro: { type: mongoose_1.SchemaTypes.ObjectId, ref: 'Livro', required: true },
    dataRetirada: { type: Date, default: Date.now },
    dataEntrega: { type: Date }
}), 'emprestimos');
//# sourceMappingURL=emprestimoModel.js.map