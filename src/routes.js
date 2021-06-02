"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var express_1 = require("express");
var cepController_1 = __importDefault(require("./app/controllers/cepController"));
var route = express_1.Router();
route.post("/", cepController_1.default.index);
exports.default = route;
