// File imports
const urls = require('./urls');

// Dependencies
const axios = require('axios');

/*
 * Given a summoner's unique account ID, gets stats from that player's ten most
 * recent matches.
 *
 * If findFriends is true, then keep track of how many times each player in all
 * recent games analyzed appears.
 */
const getRecentMatchStats = (accId, numMatches, potentialFriends, findFriends) => new Promise(resolve => {
  let output = {
    gameIds: []
  };

  // Building API request to get recent match list
  const matchListReq = urls.matchList + accId + urls.api + '&endIndex=' + numMatches;

  axios.get(matchListReq)
    .then(matchListRes => {
      const matchListObj = matchListRes.data;
      let matchReqPromises = [];

      // Iterate through the list of recent matches, and store info about each match
      for (match of matchListObj.matches) {
        // TODO: remove - this is for testing
        output.gameIds.push(match.gameId);

        // Building API request to get stats from a particular recent match
        const matchReq = urls.match + match.gameId + urls.api;

        matchRequestPromises.push(
          axios.get(matchReq)
            .then(matchRes => {
              // Do what you want with this match's info
            })
        );
      }

      Promise.all(matchReqPromises)
        .then(() => {
          // After you've gathered info from all recent matches

          // TODO: probably uncomment and keep this
          // resolve(output);
        });
    })
    .catch(err => {
      // TODO: real error handling
      console.log(err);
    });
});

module.exports.getRecentMatchStats = getRecentMatchStats;
