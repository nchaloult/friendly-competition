// File imports
const urls = require('./urls');
const utils = require('./utils');

// Dependencies
const express = require('express');
const axios = require('axios');
const path = require('path');

// Number of previous matches to fetch stats from
const NUM_MATCHES = 10;

// Run on port 3001 in dev; run on whatever port Heroku decides on in prod
const PORT = process.env.PORT || 3001;

const app = express();

app.get('/summoner', (req, res) => {
  const mockedData = {"numMatches":10,"playerStats":{"summName":"Mock Player","wins":4,"kills":[4,6,2,0,5,2,1,2,1,1],"deaths":[5,7,9,7,6,9,5,8,4,8],"assists":[3,6,13,3,14,10,14,13,7,22],"cs":[154,114,11,24,120,204,47,25,8,7],"goldEarned":[9271,8922,6367,4248,10750,12683,8715,8887,6130,9457],"goldSpent":[8350,8450,6000,3825,8435,12825,7525,8075,6085,8725],"gameTimes":[1735,1499,1404,1410,1890,2476,2050,1975,1565,1747],"damageToChamps":[12094,11564,6720,5316,12332,21345,11826,7749,3002,8680],"wardsPlaced":[11,9,12,7,11,12,22,24,13,21]},"friend1Stats":{"summName":"Friend 1","wins":4,"kills":[3,0,3,1,5,6,12,1,3,15],"deaths":[6,0,7,9,2,6,10,6,7,7],"assists":[10,0,6,17,9,0,9,2,1,10],"cs":[154,17,164,13,151,92,157,118,240,170],"goldEarned":[10218,1033,9545,9170,11131,7744,15134,6300,12563,16058],"goldSpent":[9900,500,9150,8410,9135,7035,14525,5900,10725,14425],"gameTimes":[1878,201,1957,1732,1776,1265,1913,1431,1843,2155],"damageToChamps":[21154,124,17603,20309,20748,8326,23842,6325,16186,36293],"wardsPlaced":[5,0,13,19,11,6,9,5,11,12],"count":7},"friend2Stats":{"summName":"Friend 2","wins":4,"kills":[12,11,16,10,19,2,7,6,7,4],"deaths":[9,11,16,9,11,4,9,3,8,11],"assists":[28,21,15,26,45,22,25,3,21,8],"cs":[70,40,65,45,69,34,68,281,51,38],"goldEarned":[13053,11603,16713,12279,18610,9965,14243,14004,12936,7333],"goldSpent":[12400,9400,14670,11750,19200,7300,13650,13650,10635,6875],"gameTimes":[1172,1042,1635,1114,1658,970,1437,1957,1299,741],"damageToChamps":[31398,18808,56171,28787,59642,10402,36750,21862,27912,8772],"wardsPlaced":[2,1,0,5,9,4,3,13,0,8],"count":6},"friend3Stats":{"summName":"Friend 3","wins":5,"kills":[11,4,11,12,12,18,12,5,9,11],"deaths":[13,8,11,15,4,12,4,10,10,10],"assists":[18,8,20,41,26,21,19,38,22,28],"cs":[99,23,57,24,20,105,102,9,22,42],"goldEarned":[15689,8062,11838,14741,12033,17993,12764,10725,14068,12247],"goldSpent":[15450,7125,10850,13600,7035,18810,9500,10550,13100,11550],"gameTimes":[1437,741,1013,1459,1042,1635,970,1172,1299,1114],"damageToChamps":[28249,11423,24382,34628,21557,53395,29369,13820,20127,28014],"wardsPlaced":[2,3,5,4,2,12,6,4,8,2],"count":6}};

  res.json(mockedData);
});

// Prod environment config
if (process.env.NODE_ENV === 'production') {
  // Serve the optimized, built static files from create-react-app
  app.use(express.static(path.join(__dirname, 'client/build')));

  // Route every route not handled above to the optimized static home page
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}....`);
});
