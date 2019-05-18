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

//  axios.get(summonerUrl)
//    .then(summonerObj => {
//      // Build API request URL to get recent matches
//      const matchListUrl = urls.matchList + summonerObj.accountId + urls.api + '&endIndex=' + NUM_MATCHES;
//
//      return axios.get(matchListUrl);
//    })
//    .then(matchListObj => {
//      console.log('We got a response of a list of matches');
//      res.send('Hooray');
//    })
//    .catch(err => {
//      console.log(err);
//      res.send('Error! Check console.');
//    });

  getSummonerObj(summonerUrl);
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}....`);
});

const getSummonerObj = async url => {
  try {
    const response = await axios.get(url);
    const data = response.data;

    console.log(data);
  } catch (err) {
    console.log(err);
  }
};
