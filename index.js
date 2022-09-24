//connect to server

const express = require('express');
const app = express();

const {
    Game,
    Player
} = require('./db');


app.get('/', (req, res, next) => {
    try {
        res.send('Hello world');
    }
    catch (err) {
        next(err);
    }
})

const PORT = 1338;

app.listen(PORT, () => {
    console.log(`Connected to: https://localhost:${PORT}`);
})





