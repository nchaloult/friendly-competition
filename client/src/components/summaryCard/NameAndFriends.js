import React from 'react';
import '../../resources/index.css';

export default function NameAndFriends(props) {
  return (
    <div>
      <div className="row">
        <div className="col-4">
          <h2>
            <span className="hilite">{ props.summName }</span>'s
            <br />
            Highlighting Stats
          </h2>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-4" style={{"textAlign": "center"}}>
              <h4>{ props.friend1SummName }</h4>
              <p>played in<br />{ props.friend1Count } / 10 games</p>
            </div>
            <div className="col-4" style={{"textAlign": "center"}}>
              <h4>{ props.friend2SummName }</h4>
              <p>played in<br />{ props.friend2Count } / 10 games</p>
            </div>
            <div className="col-4" style={{"textAlign": "center"}}>
              <h4>{ props.friend3SummName }</h4>
              <p>played in<br />{ props.friend3Count } / 10 games</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
}
