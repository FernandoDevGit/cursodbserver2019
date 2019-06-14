"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
exports.AutorModel = mongoose_1.model('Autor', new mongoose_1.Schema({
    primeiro_nome: { type: String, required: true, max: 100 },
    ultimo_nome: { type: String, required: true, max: 100 }
}), 'autores');
//# sourceMappingURL=autorModel.js.map