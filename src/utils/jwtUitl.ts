import { sign, verify } from "jsonwebtoken"

const SECRET = "JAFSKFDSKFDSKADFSKASDJA12313213DSslfjsdkfsdfjlsdflldf"

export function generateJWT() {
    return sign({}, SECRET, {
        expiresIn: "3m"
    })
}


export function isTokenValid(token:string){
    return verify(token, SECRET)
}

export function refreshToken(){
    return sign({}, SECRET, {
        expiresIn: "3m"
    })
}

