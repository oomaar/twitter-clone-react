import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import BrowseScreen from './screens/Browse';
import HomeScreen from './screens/Home';
import Login from './screens/Login';
import signup from './screens/signup';

export default function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={HomeScreen} />
        {/* till now browse is hidden, to see the browse screen you 
        have to type in the browser: localhoset:3000/browse */}
        <Route path="/login" component={Login} />
        <Route path="/signup" component={signup} />
        <Route path="/browse" component={BrowseScreen} />
      </Switch>
    </Router>
  )
}