const Sequelize = require("sequelize");

const DB_URL = process.env.DB_URL || 'postgres://localhost/sequelize_roshambo';//sequelize_roshambo
const db = new Sequelize(DB_URL);

/*Games
Result: A string that's either "computer", "human", or "tie"
Every game has one human player
Player
username: A string representing a players name / username
Every player has many games
*/

const Game = db.define('game', {
    result: {
        //allow allow 3 results
        type: Sequelize.ENUM([
            'computer',
            'human',
            'tie'
        ])
    }
})

const Player = db.define('player', {
    username: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

Player.hasMany(Game);
Game.belongsTo(Player);

module.exports = {
    db,
    Game,
    Player
}