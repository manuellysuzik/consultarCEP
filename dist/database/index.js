"use strict";
//ESSE ARQUIVO VAI CRIAR A CONEXÃO COM O BANCO DE DADOS
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
typeorm_1.createConnection(); // Para executar isso, temos que levar esse arquivo para nosso APP.TS
