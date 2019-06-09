import React from 'react';
import '../resources/index.css';

import NameAndFriends from './NameAndFriends';

export default function Summary(props) {
  return (
    <div className="myCard">
      <NameAndFriends
        summName={ props.summName }
        friend1SummName={ props.friend1SummName }
      />
    </div>
  );
}
