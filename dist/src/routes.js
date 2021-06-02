"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const cepController_1 = __importDefault(require("./app/controllers/cepController"));
const route = express_1.Router();
route.post("/", cepController_1.default.index);
exports.default = route;
