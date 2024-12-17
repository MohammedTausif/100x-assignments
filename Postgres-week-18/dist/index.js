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
const express_1 = __importDefault(require("express"));
const pg_1 = require("pg");
const config_1 = require("./config");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const pgClient = new pg_1.Client(config_1.DATA_BASE_URL);
pgClient.connect();
app.post("/signup", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password, firstname } = req.body;
    try {
        const insertQuery = `INSERT INTO users (username, password, firstname) VALUES ($1, $2, $3)`;
        const response = yield pgClient.query(insertQuery, [username, password, firstname]);
        console.log(response);
        res.json({
            message: "You have signed up"
        });
    }
    catch (e) {
        console.log(e);
        res.json({
            message: "Error While Signing up"
        });
    }
}));
app.post("/signin", (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { username, password } = req.body;
    const findQuery = `SELECT * users WHERE username = "${username}" AND password = "${password}"`;
    try {
        const response = yield pgClient.query(findQuery);
        console.log(response);
        if (response) {
            res.json({
                message: "you have signed in"
            });
        }
    }
    catch (e) {
        console.log(e);
        res.json({
            message: "user doen't exist in our database "
        });
    }
}));
app.listen(3000, () => {
    console.log("server listening at 3000");
});
