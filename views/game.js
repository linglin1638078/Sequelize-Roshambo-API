const html = require("html-template-tag");

module.exports = (game,player) => html`<!DOCTYPE html>
<html>
<head>
  <title>${game.name}</title>
  <link rel="stylesheet" href="/styles.css"/>
</head>

<body>
  <div class="gameInstance">
    <h1>GAME #: ${game.name}</h1>
    <div>
       <h2>Player Name: ${player.username}</h2>
       <h2>The Winner is: ${game.result}</h2>
  </div>
</body>

</html>`;