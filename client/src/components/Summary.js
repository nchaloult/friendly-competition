import React from 'react';
import '../resources/index.css';

import NameAndFriends from './NameAndFriends';
import Wins from './Wins';
import CS from './CS';
import KDA from './KDA';

export default function Summary(props) {
  return (
    <div className="myCard">
      <NameAndFriends
        summName={ props.summName }
        friend1SummName={ props.friend1SummName }
        friend1Count={ props.friend1Count }
        friend2SummName={ props.friend2SummName }
        friend2Count={ props.friend2Count }
        friend3SummName={ props.friend3SummName }
        friend3Count={ props.friend3Count }
      />
      <div className="row">
        <div className="col-4">
          <Wins
            numMatches={ props.numMatches }
            wins={ props.wins }
            friend1SummName={ props.friend1SummName }
            friend1Wins={ props.friend1Wins }
            friend2SummName={ props.friend2SummName }
            friend2Wins={ props.friend2Wins }
            friend3SummName={ props.friend3SummName }
            friend3Wins={ props.friend3Wins }
          />
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col">
              <CS
                cs={ props.cs }
                friend1SummName={ props.friend1SummName }
                friend1CS={ props.friend1CS }
                friend2SummName={ props.friend2SummName }
                friend2CS={ props.friend2CS }
                friend3SummName={ props.friend3SummName }
                friend3CS={ props.friend3CS }
              />
            </div>
          </div>
          <div className="row">
            <div className="col">
              <KDA
                kills={ props.kills }
                deaths={ props.deaths }
                assists={ props.assists }

                friend1SummName={ props.friend1SummName }
                friend1Kills={ props.friend1Kills }
                friend1Deaths={ props.friend1Deaths }
                friend1Assists={ props.friend1Assists }

                friend2SummName={ props.friend2SummName }
                friend2Kills={ props.friend2Kills }
                friend2Deaths={ props.friend2Deaths }
                friend2Assists={ props.friend2Assists }

                friend3SummName={ props.friend3SummName }
                friend3Kills={ props.friend3Kills }
                friend3Deaths={ props.friend3Deaths }
                friend3Assists={ props.friend3Assists }
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
