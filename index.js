const urls = require('./urls');

const express = require('express');
const axios = require('axios');

// Number of previous matches to fetch stats from
const NUM_MATCHES = 1;

const app = express();
const PORT = process.env.port || 3001;

app.get('/summoner', (req, res) => {
  let overallOutput = {
    summonerName: null,
    numMatches: NUM_MATCHES
  }

  // Building API request URL to get summoner object
  const summonerUrl = urls.summoner + 'tonyl' + urls.api;

  axios.get(summonerUrl)
    .then(summonerObjRes => {
      const summonerObj = summonerObjRes.data;
      overallOutput.summonerName = summonerObj.name;

      return axios.get(urls.matchList + summonerObj.accountId + urls.api + '&endIndex=' + NUM_MATCHES);
    })
    .then(matchListRes => {
      const matchListObj = matchListRes.data;

      res.json(matchListObj);
    })
    .catch(err => {
      console.log(err);
      res.send('Error! Check console.');
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}....`);
});

