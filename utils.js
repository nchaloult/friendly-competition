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
    summName: null,
    wins: 0,
    kills: [],
    deaths: [],
    assists: [],
    cs: [],
    goldEarned: [],
    goldSpent: [],
    gameTimes: [],
    damageToChamps: [],
    wardsPlaced: []
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
                  output.summName = curPlayer.summonerName;

                  /*
                   * If we aren't keeping track of potential friends, then
                   * we've found what we're looking for.
                   */
                  if (!findFriends) {
                    break;
                  }
                } else if (findFriends) {
                  // Otherwise, keep track of each player in every recent match

                  /*
                   * If we have seen the current player before, fetch the
                   * number of recent matches that this player has appeared in.
                   */
                  const curFriend = potentialFriends.get(curPlayer.currentAccountId);
                  let curCount = 0;
                  if (curFriend != undefined) {
                    curCount = curFriend.count;
                  }

                  /*
                   * Set (or increase) the current player's "recent match
                   * appearance count."
                   */
                  potentialFriends.set(curPlayer.currentAccountId, { name: curPlayer.summonerName, count: curCount + 1 });
                }
              }

              // Gather our summoner's stats
              const stats = matchResObj.participants[participantId].stats;

              if (stats.win) {
                output.wins++;
              }
              output.kills.push(stats.kills);
              output.deaths.push(stats.deaths);
              output.assists.push(stats.assists);
              output.cs.push(stats.totalMinionsKilled);
              output.goldEarned.push(stats.goldEarned);
              output.goldSpent.push(stats.goldSpent);
              output.gameTimes.push(matchResObj.gameDuration);
              output.damageToChamps.push(stats.totalDamageDealtToChampions);
              output.wardsPlaced.push(stats.wardsPlaced);
            })
            .catch(err => {
              // TODO: real error handling
              console.log(err);
            })
        );
      }

      // After you've gathered info from all recent matches, return that info
      Promise.all(matchReqPromises)
        .then(() => {
          resolve(output);
        })
        .catch(err => {
          // TODO: real error handling
          console.log(err);
        });
    })
    .catch(err => {
      // TODO: real error handling
      console.log(err);
    });
});

module.exports.getRecentMatchStats = getRecentMatchStats;
