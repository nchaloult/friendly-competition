import React from 'react';
import '../resources/index.css';

export default function Summary(props) {
  return (
    <div className="myCard">
      <div className="row">
        <div className="col" style={{ "textAlign": "center" }}>
          <h2>Highlighting Stats for <span style={{ "color": "#b3c3d3" }}>{ props.summName }</span></h2>
        </div>
      </div>
      <div className="row">
        <div className="col-4" style={{ "display": "flex", "justifyContent": "center" }}>
          <div className="row">
              <div style={{ "width": "200px", "height": "200px", "background": "#fdce03", "borderRadius": "100%" }}>&nbsp;</div>
              <h3>Wins: <span style={{ "color": "#b3c3d3" }}>{ props.wins }</span> / { props.numMatches }</h3>
          </div>
        </div>
        <div className="col-8" style={{ "display": "flex", "justifyContent": "center", "alignItems": "center" }}>
          <p>Rest of Highlights</p>
        </div>
      </div>
    </div>
  );
}
