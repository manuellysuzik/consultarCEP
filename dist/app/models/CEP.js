"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
const uuid_1 = require("uuid");
const typeorm_1 = require("typeorm");
let CEP = class CEP {
    criarUUID() {
        if (!this.id) {
            this.id = uuid_1.v4();
        }
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn("uuid") // Gera automaticamente um uuid para cada usuário criado
    ,
    __metadata("design:type", String)
], CEP.prototype, "id", void 0);
__decorate([
    typeorm_1.Column() //indico qual o campo que é uma coluna
    ,
    typeorm_1.Column(),
    __metadata("design:type", Number)
], CEP.prototype, "CEP", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CEP.prototype, "municipio", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CEP.prototype, "bairro", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], CEP.prototype, "logradouro", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], CEP.prototype, "created_at", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], CEP.prototype, "updated_at", void 0);
__decorate([
    typeorm_1.BeforeInsert(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CEP.prototype, "criarUUID", null);
CEP = __decorate([
    typeorm_1.Entity("databaseCEP") // normalmente é o nome do conjunto ou tables que vamos usar
], CEP);
exports.default = CEP;
