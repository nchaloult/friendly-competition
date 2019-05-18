const urls = require('./urls');

const express = require('express');
const axios = require('axios');

const app = express();
const PORT = process.env.port || 3001;

app.get('/summoner', (req, res) => {
  // Building API request URL to get summoner object
  const summonerUrl = urls.summoner + 'tonyl' + urls.api;

//  request(summonerUrl, { json: true }, (err, res, body) => {
//    if (err) {
//      return console.log(err);
//    }
//
//    console.log('====== Response ======');
//    console.log(res);
//    console.log();
//
//    console.log('====== Body ======');
//    console.log(body);
//    console.log();
//  });

  axios.get(summonerUrl)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });

  res.send('Closed');
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}....`);
});
