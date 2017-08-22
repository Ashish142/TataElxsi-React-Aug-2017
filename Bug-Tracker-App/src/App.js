import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import BugTracker from './BugTracker/components/BugTracker';
import Spinner from './Spinner/components/Spinner';

class App extends Component {
  render() {
    return (
      <div>
        <BugTracker></BugTracker>
        <hr />
        <Spinner></Spinner>
      </div>
    );
  }
}

export default App;
