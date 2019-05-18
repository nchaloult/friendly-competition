// File imports
const urls = require('./urls');

// Dependencies
const express = require('express');
const axios = require('axios');

// Number of previous matches to fetch stats from
const NUM_MATCHES = 2;

const app = express();
const PORT = process.env.port || 3001;

app.get('/summoner', (req, res) => {
  let overallOutput = {
    summonerName: null,
    numMatches: NUM_MATCHES
  }

  // Building API request URL to get summoner object
  const summonerUrl = urls.summoner + req.query.name + urls.api;

  axios.get(summonerUrl)
    .then(summonerObjRes => {
      const sumObj = summonerObjRes.data;
      overallOutput.summonerName = sumObj.name;

      // Building API request URL to get match list
      const matchListUrl = urls.matchList + sumObj.accountId + urls.api + '&endIndex=' + NUM_MATCHES;
      return axios.get(matchListUrl);
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

