import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import axios from 'axios';

import FriendsList from './components/FriendsList';
import FriendForm from './components/FriendForm';

import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: [],
      error: ''
    }
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
    .then(response => {
      this.setState({friends: response.data});
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return (
      <div className="App">
        <nav className ='tempHeader'>
          <h1>Is this working?</h1>
          <div className='navLinks'>
            <NavLink exact to='/'>
              Friends
            </NavLink>
          </div>
        </nav>
        <Route 
          exact path='/'
          render={props => (
            <FriendsList
              friends={this.state.friends}
            />
          )}
        />
        <Route 
          path='/friend-form'
          render={props => (
            <FriendForm
              {...props}
            />
          )} 
        />
        <NavLink to='/friend-form'>
          <button>Add Friend</button>
        </NavLink>
      </div>
    );
  }
}

export default App;
