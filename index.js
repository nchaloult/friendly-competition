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
    summName: null,
    original: null,
    numMatches: NUM_MATCHES
  }

  // Building API request to get summoner object
  const summReq = urls.summoner + req.query.name + urls.api;

  axios.get(summReq)
    .then(summObjRes => {
      const summObj = summObjRes.data;
      overallOutput.summName = summObj.name;

      /*
       * Stores account IDs and player information about players that appear
       * many times in the match history.
       *
       * Populated by getRecentMatchStats()
       */
      let potentialFriends = new Map();

      // Fetch this player's recent match data, and keep track of potential friends
      overallOutput.original = getRecentMatchStats(summObj.accountId, potentialFriends, true);

      // Building API request to get match list
      const matchListReq = urls.matchList + summObj.accountId + urls.api + '&endIndex=' + NUM_MATCHES;
      return axios.get(matchListReq);
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

