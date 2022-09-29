const html = require("html-template-tag");

module.exports = (player) => html`<!DOCTYPE html>
<html>
<head>
  <title>${player.username}</title>
  <link rel="stylesheet" href="/styles.css"/>
</head>
<body>
  <div class="playerIstance">
    <h1>THE PLAYER</h1>
    <div>
        The player you are looking for: ${player.username}
    </div>
  </div>
</body>

</html>`;