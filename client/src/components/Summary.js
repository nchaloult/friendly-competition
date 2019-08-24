import React from 'react';
import '../resources/index.css';

import NameAndFriends from './NameAndFriends';
import Wins from './Wins';

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
            wins={ props.wins }
            friend1SummName={ props.friend1SummName }
            friend1Wins={ props.friend1Wins }
            friend2SummName={ props.friend2SummName }
            friend2Wins={ props.friend2Wins }
            friend3SummName={ props.friend3SummName }
            friend3Wins={ props.friend3Wins }
            numMatches={ props.numMatches }
          />
        </div>
      </div>
    </div>
  );
}
