const urls = require('./urls');

const express = require('express');
const request = require('request');

const app = express();
const PORT = process.env.port || 3001;

app.get('/summoner', (req, res) => {
  // Getting the summoner object from Riot
  const summonerUrl = urls.summoner + 'tonyl' + urls.api;
  request(summonerUrl, { json: true }, (err, res, body) => {
    if (err) {
      return console.log(err);
    }

    console.log('====== Response ======');
    console.log(res);
    console.log();

    console.log('====== Body ======');
    console.log(body);
    console.log();
  });

  res.send('Closed');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}....`);
});
