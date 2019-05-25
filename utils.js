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
    wins: 0
  };

  // Building API request to get recent match list
  const matchListReq = urls.matchList + accId + urls.api + '&endIndex=' + numMatches;

  axios.get(matchListReq)
    .then(matchListRes => {
      const matchListObj = matchListRes.data;
      let matchReqPromises = [];

      // Iterate through the list of recent matches, and store info about each match
      for (match of matchListObj.matches) {
        // Building API request to get stats from a particular recent match
        const matchReq = urls.match + match.gameId + urls.api;

        matchReqPromises.push(
          axios.get(matchReq)
            .then(matchRes => {
              const matchResObj = matchRes.data;

              const participants = matchResObj.participantIdentities;
              let participantId = -1;

              // Find our summoner's participant ID
              for (let i = 0; i < participants.length; i++) {
                const curPlayer = participants[i].player;

                if (participantId == -1 && curPlayer.currentAccountId == accId) {
                  participantId = i;
                  break;
                }
              }

              // Gather our summoner's stats
              const stats = matchResObj.participants[participantId].stats;

              if (stats.win) {
                output.wins++;
              }

              // TODO: gather more stats about our summoner's performance
            })
        );
      }

      Promise.all(matchReqPromises)
        .then(() => {
          // After you've gathered info from all recent matches, return that info
          resolve(output);
        });
    })
    .catch(err => {
      // TODO: real error handling
      console.log(err);
    });
});

module.exports.getRecentMatchStats = getRecentMatchStats;
