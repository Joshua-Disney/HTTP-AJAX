import React from 'react';
import axios from 'axios';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      friends: []
    }
  }

  componentDidMount() {
    axios.get('http://localhost:3000/friends')
    .then(response => {
      console.log(response.status);
    })
    .catch(error => {
      console.log(error);
    });
  }

  render() {
    return(
      <div>
        <h1>Is this working?</h1>
      </div>
    )
  }
}

export default FriendsList;