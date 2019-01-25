import React from 'react';

class FriendCard extends React.Component {
  constructor(props) {
    super(props);
    this.friend = this.props.friends.find(
      friend => `${friend.id}` === this.props.match.params.friendId
    );
  }



  render() {
    return(
      <div>
        <h1>Testing</h1>
        <h2>{this.friend.name}</h2>
        <p>{this.friend.age} years old.</p>
        <p>{this.friend.email}</p>
      </div>
    )
  }
}

export default FriendCard;