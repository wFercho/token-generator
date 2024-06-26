"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const jwtUitl_1 = require("./utils/jwtUitl");
const app = (0, express_1.default)();
const port = 3000;
app.use(express_1.default.static('public'));
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)({
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}));
app.get('/', (req, res) => {
    console.log("ROOT ROUTE");
    res.send(__dirname + '/public/');
});
app.post('/generateToken', (req, res) => {
    console.log(req.body);
    const token = (0, jwtUitl_1.generateJWT)();
    //res.setHeader("Authorization", token);
    res.setHeader('content-type', 'text/plain');
    res.send(token);
});
app.post('/generate-token', (req, res) => {
    console.log(req.body);
    const token = (0, jwtUitl_1.generateJWT)();
    //res.setHeader("Authorization", token);
    res.setHeader('content-type', 'text/plain');
    res.send(token);
});
app.post('/refreshToken', (req, res) => {
    console.log(req.body);
    const token = (0, jwtUitl_1.refreshToken)();
    res.setHeader('content-type', 'text/plain');
    //res.setHeader("Authorization", token);
    res.send(token);
});
app.post('/validateToken', (req, res) => {
    const token = req.body.token;
    res.setHeader('content-type', 'text/plain');
    try {
        if ((0, jwtUitl_1.isTokenValid)(token)) {
            console.log("ES VALIDO");
            res.status(201).send("Token valido");
        }
    }
    catch (error) {
        console.log("NO ES VALIDO");
        res.status(401).send("Token invalido");
    }
});
app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});
