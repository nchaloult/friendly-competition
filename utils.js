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

      // Iterate through the list of recent matches, and store info about each match
      for (match of matchListObj.matches) {
        // TODO: remove - this is for testing
        output.gameIds.push(match.gameId);
      }

      resolve(output.gameIds);
    })
    .catch(err => {
      // TODO: real error handling
      console.log(err);
    });
});

module.exports.getRecentMatchStats = getRecentMatchStats;
