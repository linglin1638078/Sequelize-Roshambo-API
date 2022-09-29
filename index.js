//connect to server

const express = require('express');
const app = express();
const gameView = require('./views/game');
const playerList = require('./views/playerList');
const playerInstance = require('./views/player');
const gamePlay = require('./gamePlay');
const addGame = require('./views/addGame');

app.use(express.static(__dirname + "/views"));
app.use(express.urlencoded({ extended: false }));

const {
    Game,
    Player
} = require('./db');


//GET /game/:gameId
//Returns the winner for the game matching the given ID as well as the player for the game
app.get('/game/:gameID', async (req, res, next) => {
    try {
        
        const gameID = +req.params.gameID;
        const game = await Game.findByPk(gameID);

        const playerId = game.playerId;
        const player = await Player.findByPk(playerId);
    
        res.send(gameView(game, player));
    }
    catch (err) {
        next(err);
    }
    
});

//GET /player/:playerId
//Returns a specific player, along with their games played
app.get('/player/:playerId', async (req, res, next) => {
    try {
        const playerId = +req.params.playerId;
        const player = await Player.findByPk(playerId);
        res.send(playerInstance(player));
    }
    catch (err) {
        next(err);
    }
    
});

/*PUT /player/:playerId
Body:
username: string representing a username
Updates a players name to be the given name*/
app.put('/player/:playerId', async (req, res, next) => {
    try {
        const newValue = {};
        if (req.body.username) {
            newValue.username = req.body.username;
        }
        const playerId = +req.params.playerId;
        const playerToUpdate = await Player.findByPk(playerId);
        const newPlayer = await playerToUpdate.update(newValue);

        res.send(newPlayer);
    }
    catch (err) {
        next(err);
    }
});

//open up the form for game
app.get('/playGame', (req, res, next) => {
    try {
        res.send(addGame());
    }
    catch (err) {
        next(err);
    }
});


//POST /game
//Create a game with the resulting winner
//Send the result to the client
app.post('/game', async (req, res, next) => {
    try {
        //get user's data from form
        const playerName = req.body.name;
        const playerGesture = req.body.gesture;

        const gameResult = gamePlay(playerGesture);
        const humanPlayer = await Player.findOne({ where: { username: playerName } });
        console.log(humanPlayer.id);
        const newGame = await Game.create({
            name: `Game`,
            result: gameResult,
            playerId: humanPlayer.id
        });
        await newGame.update({
            name: `Game ${newGame.id}`
        })

        console.log(newGame.id);
        res.redirect(`/game/${newGame.id}`);

    }
    catch (err) {
        next(err);
    }
});


//GET /player
//Returns a list of all players
app.get('/player', async (req, res, next) => {
    try {
        const players = await Player.findAll();
        res.send(playerList(players));
    }
    catch(err){
        next(err);
    }
})




//test
app.get('/',(req, res, next) => {
    try {
        res.send('Hello world');
    }
    catch (err) {
        next(err);
    }
});



const PORT = 1338;

app.listen(PORT, () => {
    console.log(`Connected to: https://localhost:${PORT}`);
})





