import React from 'react';
import axios from 'axios';

import Friend from './Friend';

class FriendsList extends React.Component {
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
    console.log(this.state.friends);
    return(
      <div>
        <h1>Is this working?</h1>
        {this.state.friends.map(friend => (
          <Friend friend={friend} />
        ))}
      </div>
    )
  }
}

export default FriendsList;