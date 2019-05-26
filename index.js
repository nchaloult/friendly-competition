// File imports
const urls = require('./urls');
const utils = require('./utils');

// Dependencies
const express = require('express');
const axios = require('axios');

// Number of previous matches to fetch stats from
const NUM_MATCHES = 10;

const app = express();
const PORT = process.env.port || 3001;

app.get('/summoner', (req, res) => {
  let overallOutput = {
    numMatches: NUM_MATCHES,
    playerStats: null,
    friend1Stats: null,
    friend2Stats: null,
    friend3Stats: null
  }

  // Building API request to get summoner object
  const summReq = urls.summoner + req.query.name + urls.api;

  axios.get(summReq)
    .then(summObjRes => {
      const summObj = summObjRes.data;

      /*
       * Stores account IDs and player information about players that appear
       * many times in the match history.
       *
       * Populated by getRecentMatchStats()
       */
      let potentialFriends = new Map();

      // Fetch this player's recent match data, and keep track of potential friends
      utils.getRecentMatchStats(summObj.accountId, NUM_MATCHES, potentialFriends, true)
        .then(playerStats => {
          overallOutput.playerStats = playerStats;

          const friends = utils.find3Friends(potentialFriends);
          let friendsPromises = [];

          // Queue up promises to fetch friends' recent match stats
          friendsPromises.push(
            utils.getRecentMatchStats(friends[0].accId, NUM_MATCHES, potentialFriends, false)
              .then(friend1Stats => {
                overallOutput.friend1Stats = friend1Stats;
              })
              .catch(err => {
                // TODO: real error handling
                console.log(err);
                res.send('Error! Check console.');
              })
          );
          friendsPromises.push(
            utils.getRecentMatchStats(friends[1].accId, NUM_MATCHES, potentialFriends, false)
              .then(friend2Stats => {
                overallOutput.friend2Stats = friend2Stats;
              })
              .catch(err => {
                // TODO: real error handling
                console.log(err);
                res.send('Error! Check console.');
              })
          );
          friendsPromises.push(
            utils.getRecentMatchStats(friends[2].accId, NUM_MATCHES, potentialFriends, false)
              .then(friend3Stats => {
                overallOutput.friend3Stats = friend3Stats;
              })
              .catch(err => {
                // TODO: real error handling
                console.log(err);
                res.send('Error! Check console.');
              })
          );

          // Once stats from friends have been gathered, return overallOutput
          Promise.all(friendsPromises)
            .then(() => {
              res.json(overallOutput);
            })
            .catch(err => {
              // TODO: real error handling
              console.log(err);
              res.send('Error! Check console.');
            });
        })
        .catch(err => {
          // TODO: real error handling
          console.log(err);
          res.send('Error! Check console.');
        });
    })
    .catch(err => {
      // TODO: real error handling
      console.log(err);
      res.send('Error! Check console.');
    });
});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}....`);
});
