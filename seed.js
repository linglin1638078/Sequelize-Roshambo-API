//const { user } = require('pg/lib/defaults');
const {
    db,
    Game,
    Player
} = require('./db');

const seedDb = async () => {

    ///and clears everything out -clear all data
    await db.sync({ force: true, logging: false });


    

    //create players

    const Lily = await Player.create({
        username: 'Lily'
    });

    const Maria = await Player.create({
        username: 'Maria'
    });

    const Ricky = await Player.create({
        username: 'Ricky'
    })

    //create games
    const game1 = await Game.create({
        name: 'Game 1',
        result: 'human',
        playerId: Lily.id
    });

    const game2 = await Game.create({
        name: 'Game 2',
        result: 'computer',
        playerId: Maria.id
    });

    const game3 = await Game.create({
        name: 'Game 3',
        result: 'tie',
        playerId: Ricky.id
    });


    //find all games
    console.log(
        (await Game.findAll()).map(game => game.result)
    );

    console.log(
        (await Game.findAll()).map(game => game.name)
    );
    
    //find all players
    console.log(
        (await Player.findAll()).map(player => player.username)
    );

}

seedDb();
