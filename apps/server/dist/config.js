"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.port = exports.host = void 0;
const dotenv_1 = require("dotenv");
(0, dotenv_1.configDotenv)();
exports.host = process.env.HOST;
exports.port = process.env.PORT;
