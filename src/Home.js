import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

class Home extends Component {
  render = () => {
    return (
      <div className="container">
        <div className="row">
          <div className="column">
            <div className="btn-group-vertical">
              <Link to="/">
                <button className="myButton btn">Empty Tab </button>
              </Link>
              <Link to="/Data">
                <button className="myButton">Data</button>
              </Link>
            </div>
          </div>
          <div className="line"></div>
          <div className="column mx-auto">This is an empty tab</div>
        </div>
      </div>
    );
  };
}

export default Home;
