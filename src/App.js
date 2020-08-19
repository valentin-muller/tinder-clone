import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import Chats from './Chats';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>

          <Route path="/chats/:person">
            <Header backButton="/chats" />
            <Chats />
            <h3>IT WORKS</h3>
          </Route>

          <Route path="/chats">
            <Header backButton="/" />
            <Chats />
          </Route>

          <Route path="/">
            <Header />
            <TinderCards />
            <SwipeButtons />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
