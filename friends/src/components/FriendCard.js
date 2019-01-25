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
        <div className='friend-info'>
          <h2>{this.friend.name}</h2>
          <p>{this.friend.age} years old.</p>
          <p>{this.friend.email}</p>
        </div>
        <div className='buttons'>
          <button>Delete Friend</button>
          <button>Update Friend</button>
        </div>
      </div>
    )
  }
}

export default FriendCard;