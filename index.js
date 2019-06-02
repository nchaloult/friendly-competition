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
//  let overallOutput = {
//    numMatches: NUM_MATCHES,
//    playerStats: null,
//    friend1Stats: null,
//    friend2Stats: null,
//    friend3Stats: null
//  }
//
//  // Building API request to get summoner object
//  const summReq = urls.summoner + req.query.name + urls.api;
//
//  axios.get(summReq)
//    .then(summObjRes => {
//      const summObj = summObjRes.data;
//
//      /*
//       * Stores account IDs and player information about players that appear
//       * many times in the match history.
//       *
//       * Populated by getRecentMatchStats()
//       */
//      let potentialFriends = new Map();
//
//      // Fetch this player's recent match data, and keep track of potential friends
//      utils.getRecentMatchStats(summObj.accountId, NUM_MATCHES, potentialFriends, true)
//        .then(playerStats => {
//          overallOutput.playerStats = playerStats;
//
//          const friends = utils.find3Friends(potentialFriends);
//          let friendsPromises = [];
//
//          // Queue up promises to fetch friends' recent match stats
//          friendsPromises.push(
//            utils.getRecentMatchStats(friends[0].accId, NUM_MATCHES, potentialFriends, false)
//              .then(friend3Stats => {
//                overallOutput.friend3Stats = friend3Stats;
//              })
//              .catch(err => {
//                // TODO: real error handling
//                console.log(err);
//                res.send('Error! Check console.');
//              })
//          );
//          friendsPromises.push(
//            utils.getRecentMatchStats(friends[1].accId, NUM_MATCHES, potentialFriends, false)
//              .then(friend2Stats => {
//                overallOutput.friend2Stats = friend2Stats;
//              })
//              .catch(err => {
//                // TODO: real error handling
//                console.log(err);
//                res.send('Error! Check console.');
//              })
//          );
//          friendsPromises.push(
//            utils.getRecentMatchStats(friends[2].accId, NUM_MATCHES, potentialFriends, false)
//              .then(friend1Stats => {
//                overallOutput.friend1Stats = friend1Stats;
//              })
//              .catch(err => {
//                // TODO: real error handling
//                console.log(err);
//                res.send('Error! Check console.');
//              })
//          );
//
//          // Once stats from friends have been gathered, return overallOutput
//          Promise.all(friendsPromises)
//            .then(() => {
//              // Add "recent game appearance count" to each friend
//              overallOutput.friend1Stats.count = friends[2].count;
//              overallOutput.friend2Stats.count = friends[1].count;
//              overallOutput.friend3Stats.count = friends[0].count;
//
//              res.json(overallOutput);
//            })
//            .catch(err => {
//              // TODO: real error handling
//              console.log(err);
//              res.send('Error! Check console.');
//            });
//        })
//        .catch(err => {
//          // TODO: real error handling
//          console.log(err);
//          res.send('Error! Check console.');
//        });
//    })
//    .catch(err => {
//      // TODO: real error handling
//      console.log(err);
//      res.send('Error! Check console.');
//    });

  const hardCodedOutput = {
    "numMatches":10,"playerStats":{"summName":"Vastiez","wins":6,"kills":[6,9,8,1,2,1,10,5,9,1],"deaths":[6,7,6,9,4,1,5,3,5,4],"assists":[1,13,13,14,6,10,11,9,7,5],"cs":[85,26,133,130,142,103,195,107,185,163],"goldEarned":[7184,14576,12075,9468,8123,6995,16509,8596,13332,9039],"goldSpent":[6385,11250,11300,9100,6500,6375,14850,7450,13000,8700],"gameTimes":[1322,2456,1903,1760,1469,1147,2512,1200,1979,1657],"damageToChamps":[6001,19324,21425,15568,9534,8024,22817,8270,18683,15345],"wardsPlaced":[5,1,10,9,6,6,14,6,8,6]},"friend1Stats":{"summName":null,"wins":0,"kills":[],"deaths":[],"assists":[],"cs":[],"goldEarned":[],"goldSpent":[],"gameTimes":[],"damageToChamps":[],"wardsPlaced":[],"count":5},"friend2Stats":{"summName":"7DS Pride","wins":8,"kills":[3,15,6,6,6,2,8,0,12,7],"deaths":[6,9,4,1,5,3,4,0,7,10],"assists":[17,15,13,11,15,2,14,0,12,18],"cs":[18,32,57,30,43,16,41,0,36,19],"goldEarned":[10960,15193,13768,9764,11598,6377,13017,991,14185,11533],"goldSpent":[9825,15175,12350,7450,10850,6125,12275,500,12675,11435],"gameTimes":[2219,2435,2265,1145,1950,1322,1887,198,2199,2317],"damageToChamps":[15106,25501,17583,10317,13580,3006,20813,0,21545,12702],"wardsPlaced":[3,1,2,4,3,2,1,1,2,6],"count":1},"friend3Stats":{"summName":"Reaver King","wins":9,"kills":[13,10,13,6,9,9,13,7,16,12],"deaths":[7,4,7,4,3,2,7,0,12,7],"assists":[8,9,10,15,2,7,12,9,25,10],"cs":[241,188,258,155,124,143,256,188,210,232],"goldEarned":[19064,14164,18939,12542,10494,11329,19654,12430,21609,18144],"goldSpent":[17958,13658,16333,10083,8483,8283,16883,11658,22358,14707],"gameTimes":[2219,1322,2033,1259,957,1145,2097,1376,2435,1950],"damageToChamps":[54317,31109,36355,29846,14734,16556,47047,17629,68015,36731],"wardsPlaced":[12,9,13,9,4,7,13,9,13,13],"count":1}
  };
  res.json(hardCodedOutput);

});

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}....`);
});
