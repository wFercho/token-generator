"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.refreshToken = exports.isTokenValid = exports.generateJWT = void 0;
const jsonwebtoken_1 = require("jsonwebtoken");
const SECRET = "JAFSKFDSKFDSKADFSKASDJA12313213DSslfjsdkfsdfjlsdflldf";
function generateJWT() {
    return (0, jsonwebtoken_1.sign)({}, SECRET, {
        expiresIn: "3m"
    });
}
exports.generateJWT = generateJWT;
function isTokenValid(token) {
    return (0, jsonwebtoken_1.verify)(token, SECRET);
}
exports.isTokenValid = isTokenValid;
function refreshToken() {
    return (0, jsonwebtoken_1.sign)({}, SECRET, {
        expiresIn: "3m"
    });
}
exports.refreshToken = refreshToken;
