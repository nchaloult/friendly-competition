import React from 'react';
import '../resources/index.css';

export default function Summary(props) {
  return (
    <div className="myCard">
      <div className="row">
        <div className="col-4">
          <h2>Highlighting Stats<br />For <span className="hilite">{ props.summName }</span></h2>
        </div>
        <div className="col-8">
          <div className="row">
            <div className="col-4" style={{"textAlign": "center"}}>
              <h4>{ props.friend1SummName }</h4>
              <p>played in<br />3 / 10 games</p>
            </div>
            <div className="col-4" style={{"textAlign": "center"}}>
              <h4>Friend 1</h4>
              <p>played in<br />3 / 10 games</p>
            </div>
            <div className="col-4" style={{"textAlign": "center"}}>
              <h4>Friend 1</h4>
              <p>played in<br />3 / 10 games</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
