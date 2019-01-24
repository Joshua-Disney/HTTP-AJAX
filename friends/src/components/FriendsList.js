import React from 'react';

import Friend from './Friend';

class FriendsList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='friendsList'>
        {this.props.friends.map(friend => (
          <Friend friend={friend} />
        ))}
      </div>
    )
  }
}

export default FriendsList;