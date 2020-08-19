import React from 'react';
import Header from './Header';
import TinderCards from './TinderCards';
import SwipeButtons from './SwipeButtons';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import './App.css';


function App() {
  return (
    <div className="App">

      <Router>
      <Header />
        <Switch>


         <Route path="/chats">
           <h1>I am chatpage</h1>
         </Route>


         <Route path="/">
           <TinderCards />
           <SwipeButtons />
         </Route>


        </Switch>
      </Router>
    </div>
  );
}

export default App;
