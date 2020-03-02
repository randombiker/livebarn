import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './Home.js';
import Data from './Data.js';
import Servers from './Servers.js';
import Surfaces from './Surfaces.js';

import './App.css';

class App extends Component {
  render = () => {
    return (
      <>
        <BrowserRouter>
          <div>
            <Route exact={true} path="/" component={Home} />
            <Route exact={true} path="/Data" component={Data} />
            <Route exact={true} path="/Servers" component={Servers} />
            <Route exact={true} path="/Surfaces" component={Surfaces} />
          </div>
        </BrowserRouter>
      </>
    );
  };
}

export default App;
