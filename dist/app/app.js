"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // permite usar as decorations
const express_1 = __importDefault(require("express"));
const routes_1 = __importDefault(require("../routes"));
const cors_1 = __importDefault(require("cors"));
require("../database"); // isso vai chamar a conexão com o banco de dados.
class App {
    constructor() {
        this.app = express_1.default();
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.routes();
    }
    routes() {
        this.app.use(routes_1.default);
    }
}
exports.default = new App().app;
