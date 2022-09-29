const html = require("html-template-tag");

module.exports = (players) => html`<!DOCTYPE html>
<html>
    <head>
    <title>Player List</title>
    <link rel="stylesheet" href="styles.css">
    </head>
    <body>
    <div class="players">
        <h1>List of Players</h1>
        <h2>
            ${players
                .map((player) => 
                      player.username
                ).join("\n")}
        </h2>
    </div>
    </body>
</html>`;