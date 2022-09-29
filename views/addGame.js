
const html = require("html-template-tag");

module.exports = (game) => html`<!DOCTYPE html>
  <html>
  <head>
    <title>NEW GAME</title>
    <link rel="stylesheet" href="styles.css">
  </head>
  <body>
    <div class="game">
      <header>NEW GAME</header>
      <form method="post" action="/game">
        <label for="name">Name</label>
        <input type="text" name="name" />
        <label for="gesture">Player Gesture</label>
        <input type="text" name="gesture" />
        <button type="submit">Play!</button>
      </form>
    </div>
  </body>
  </html>`;

