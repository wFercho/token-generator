import express from 'express';
import cors from 'cors';
import { generateJWT, isTokenValid } from './utils/jwtUitl';
const app = express();
const port = 3000;


app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//app.use(cors({ origin: "http://localhost:3000", credentials: true }))

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.post('/generateToken', (req, res) => {
    console.log(req.body)
    const token = generateJWT()
    //res.setHeader("Authorization", token);
    res.send(token);
});


app.post('/refreshToken', (req, res) => {
    console.log(req.body)
    const token = generateJWT()
    //res.setHeader("Authorization", token);
    res.send(token);
});


app.post('/validateToken', (req, res) => {
    const token = req.body.token

    try {
        if(isTokenValid(token)){
            console.log("ES VALIDO");
            res.status(201).send("Token valido")
        }
    } catch (error) {
        console.log("NO ES VALIDO")
        res.status(401).send("Token invalido")
    }

});


app.listen(port, () => {
    return console.log(`Express is listening at http://localhost:${port}`);
});