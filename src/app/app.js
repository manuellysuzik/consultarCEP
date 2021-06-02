"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // permite usar as decorations
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("../routes"));
var cors_1 = __importDefault(require("cors"));
require("../database"); // isso vai chamar a conexão com o banco de dados.
var App = /** @class */ (function () {
    function App() {
        this.app = express_1.default();
        this.app.use(cors_1.default());
        this.app.use(express_1.default.json());
        this.routes();
    }
    App.prototype.routes = function () {
        this.app.use(routes_1.default);
    };
    return App;
}());
exports.default = new App().app;
