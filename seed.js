//const { user } = require('pg/lib/defaults');
const {
    db,
    Game,
    Player
} = require('./db');

const seedDb = async () => {

    ///and clears everything out -clear all data
    await db.sync({ force: true, logging: false });


    //create games
    const game1 = await Game.create({
        result: 'human'
    });

    const game2 = await Game.create({
        result: 'computer'
    });

    const game3 = await Game.create({
        result: 'tie'
    });

    //create players

    const Lily = await Player.create({
        username: 'Lily'
    });

    const Maria = await Player.create({
        username: 'Maria'
    })


    //find all games
    console.log(
        (await Game.findAll()).map(game => game.result)
    );
    
    //find all players
    console.log(
        (await Player.findAll()).map(player => player.username)
    );

}

seedDb();
