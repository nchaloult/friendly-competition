import React, { useState } from 'react';
import './resources/index.css';

import Query from './components/Query';
import About from './components/landingPage/About';
import Footer from './components/Footer';
import Loading from './components/Loading';
import Error from './components/Error';

import Summary from './components/summaryCard/Summary';

import GameTimes from './components/details/GameTimes';
import DamageDealt from './components/details/DamageDealt';
import WardsPlaced from './components/details/WardsPlaced';
import GoldInfo from './components/details/GoldInfo';

export default function App() {
  const [hasSearched, setHasSearched] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [statusCode, setStatusCode] = useState(200);
  const [data, setData] = useState(null);

  const makeAPICall = (summName) => {
    setHasSearched(true);
    setIsLoading(true);

    fetch(`/summoner?name=${summName}`)
      .then(res => {
        if (!res.ok) {
          throw res;
          // Continue handling the error in the catch() statement below
        }

        setStatusCode(res.status);
        return res.json();
      })
      .then(resJson => {
        setData(resJson);
        setIsLoading(false);
      })
      .catch(err => {
        setStatusCode(err.status);
        setIsLoading(false);
      });
  };

  /*
   * Initializing what content to display based on the state of the app
   * (has the user submitted the form, are we waiting for Promises to be
   * resolved, did our response have a non-200 status code, etc.)
   */
  let content = null;

  if (!hasSearched) {
    content = <About />;
  } else if (isLoading) {
    content = <Loading />;
  } else if (statusCode !== 200) {
    content = <Error statusCode={ statusCode } />;
  } else {
    content = (
      <div>
        <div className="row">
          <div className="col">
            <Summary
              numMatches={ data.numMatches }

              summName={ data.playerStats.summName }
              wins={ data.playerStats.wins }
              cs={ data.playerStats.cs }
              kills={ data.playerStats.kills }
              deaths={ data.playerStats.deaths }
              assists={ data.playerStats.assists }

              friend1SummName={ data.friend1Stats.summName }
              friend1Count={ data.friend1Stats.count }
              friend1Wins={ data.friend1Stats.wins }
              friend1CS={ data.friend1Stats.cs }
              friend1Kills={ data.friend1Stats.kills }
              friend1Deaths={ data.friend1Stats.deaths }
              friend1Assists={ data.friend1Stats.assists }

              friend2SummName={ data.friend2Stats.summName }
              friend2Count={ data.friend2Stats.count }
              friend2Wins={ data.friend2Stats.wins }
              friend2CS={ data.friend2Stats.cs }
              friend2Kills={ data.friend2Stats.kills }
              friend2Deaths={ data.friend2Stats.deaths }
              friend2Assists={ data.friend2Stats.assists }

              friend3SummName={ data.friend3Stats.summName }
              friend3Count={ data.friend3Stats.count }
              friend3Wins={ data.friend3Stats.wins }
              friend3CS={ data.friend3Stats.cs }
              friend3Kills={ data.friend3Stats.kills }
              friend3Deaths={ data.friend3Stats.deaths }
              friend3Assists={ data.friend3Stats.assists }
            />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <GameTimes
              times={ data.playerStats.gameTimes }

              friend1SummName={ data.friend1Stats.summName }
              friend1Times={ data.friend1Stats.gameTimes }

              friend2SummName={ data.friend2Stats.summName }
              friend2Times={ data.friend2Stats.gameTimes }

              friend3SummName={ data.friend3Stats.summName }
              friend3Times={ data.friend3Stats.gameTimes }
            />
            <WardsPlaced
              wardsPlaced={ data.playerStats.wardsPlaced }

              friend1SummName={ data.friend1Stats.summName }
              friend1WardsPlaced={ data.friend1Stats.wardsPlaced }

              friend2SummName={ data.friend2Stats.summName }
              friend2WardsPlaced={ data.friend2Stats.wardsPlaced }

              friend3SummName={ data.friend3Stats.summName }
              friend3WardsPlaced={ data.friend3Stats.wardsPlaced }
            />
          </div>
          <div className="col">
            <DamageDealt
              damage={ data.playerStats.damageToChamps }

              friend1SummName={ data.friend1Stats.summName }
              friend1Damage={ data.friend1Stats.damageToChamps }

              friend2SummName={ data.friend2Stats.summName }
              friend2Damage={ data.friend2Stats.damageToChamps }

              friend3SummName={ data.friend3Stats.summName }
              friend3Damage={ data.friend3Stats.damageToChamps }
            />
            <GoldInfo
              spent={ data.playerStats.goldSpent }
              earned={ data.playerStats.goldEarned }

              friend1SummName={ data.friend1Stats.summName }
              friend1Spent={ data.friend1Stats.goldSpent }
              friend1Earned={ data.friend1Stats.goldEarned }

              friend2SummName={ data.friend2Stats.summName }
              friend2Spent={ data.friend2Stats.goldSpent }
              friend2Earned={ data.friend2Stats.goldEarned }

              friend3SummName={ data.friend3Stats.summName }
              friend3Spent={ data.friend3Stats.goldSpent }
              friend3Earned={ data.friend3Stats.goldEarned }
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>

      <div className="container">
        <Query onSubmit={ makeAPICall } />
        { content }
      </div>
      <Footer />

    </div>
  );
}
