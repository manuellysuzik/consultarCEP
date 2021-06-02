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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users1620178856550 = void 0;
const typeorm_1 = require("typeorm");
class Users1620178856550 {
    //Cria a tabela
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.createTable(new typeorm_1.Table({
                name: "databaseCEP",
                columns: [
                    {
                        name: "id",
                        type: "uuid"
                    },
                    {
                        name: "CEP",
                        type: "integer" // deve verificar os tipos de dados do banco de dados que você escolheu
                    },
                    {
                        name: "municipio",
                        type: "varchar" // No caso do SQLite é varchar
                    }, {
                        name: "bairro",
                        type: "varchar"
                    },
                    {
                        name: "logradouro",
                        type: "varchar"
                    },
                    {
                        name: "created_at",
                        type: "date",
                        default: "now()" //Seleciona o valor padrão da coluna, nesse caso é a data que é criado
                    },
                    {
                        name: "updated_at",
                        type: "date",
                        default: "now()" //Seleciona o valor padrão da coluna, nesse caso é a data que é criado
                    }
                ]
            }));
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.dropTable('databaseCEP'); // Quando rodar a migration para APAGAR a tabela no banco de dados
        });
    }
}
exports.Users1620178856550 = Users1620178856550;
