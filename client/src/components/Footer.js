import React from 'react';
import '../resources/index.css';

export default function Footer() {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col" style={{ "textAlign": "right", "borderRight": "2px solid #414959" }}>
            <p><em>
              Built by <a href="https://github.com/nchaloult">Nick Chaloult</a> in 2019
            </em></p>
          </div>
          <div className="col" style={{ "textAlign": "left" }}>
            <p><em>
              Loading animation made by <a href="https://loading.io">loading.io</a>
            </em></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
