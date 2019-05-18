const urls = require('./urls');
const express = require('express');

const app = express();
const PORT = process.env.port || 3001;

app.get('/summoner', (req, res) => {
  const summonerUrl = urls.summoner + 'tonyl' + urls.api;

  res.send(String(summonerUrl));
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}....`);
});
