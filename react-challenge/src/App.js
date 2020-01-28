import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Instructions from './components/Instructions';
import FlightSearch from './components/FlightSearch';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="container-fluid">
          <Switch>
            <Route path="/search">
              <FlightSearch />
            </Route>
            <Route path="/">
              <Instructions />
            </Route>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
