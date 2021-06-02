"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const cepRepository_1 = require("../../database/repository/cepRepository");
const api_1 = __importDefault(require("../../services/api"));
class cepController {
    index(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            const { CEP } = req.body;
            console.log(CEP);
            const cep = typeorm_1.getCustomRepository(cepRepository_1.CEPRepository);
            const cepExists = yield cep.findOne({ CEP });
            if (!cepExists) {
                try {
                    const { data } = yield api_1.default.get(`/${CEP}/json`);
                    const result = cep.create({
                        CEP,
                        municipio: data.localidade,
                        bairro: data.bairro,
                        logradouro: data.logradouro
                    });
                    yield cep.save(result);
                    return res.json({
                        municipio: data.localidade,
                        bairro: data.bairro,
                        logradouro: data.logradouro
                    });
                }
                catch (err) {
                    return res.json({
                        error: err.message
                    });
                }
            }
            return res.json({
                municipio: cepExists.municipio,
                bairro: cepExists.bairro,
                logradouro: cepExists.logradouro
            });
        });
    }
    teste() {
        return __awaiter(this, void 0, void 0, function* () {
            const ola = {
                "helloWorld": "mensagem hello"
            };
        });
    }
}
exports.default = new cepController;
