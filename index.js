const urls = require('./urls');

const express = require('express');
const axios = require('axios');

// Number of previous matches to fetch stats from
const NUM_MATCHES = 10;

const app = express();
const PORT = process.env.port || 3001;

app.get('/summoner', (req, res) => {
  // Building API request URL to get summoner object
  const summonerUrl = urls.summoner + 'tonyl' + urls.api;

  axios.get(summonerUrl)
    .then(summonerObjRes => {
      const summonerObj = summonerObjRes.data;
      res.send(summonerObj.accountId);
    })
    .catch(err => {
      console.log(err);
      res.send('Error! Check console.');
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}....`);
});

