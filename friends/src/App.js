import React, { Component } from 'react';

import FriendsList from './components/FriendsList';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className ='tempHeader'><h1>Is this working?</h1></div>
        <FriendsList />
      </div>
    );
  }
}

export default App;
