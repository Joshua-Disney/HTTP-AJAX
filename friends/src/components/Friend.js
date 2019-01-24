import React from 'react';

import './Friends.css';

class Friend extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className='friend'>
        <h2>{this.props.friend.name}</h2>
      </div>
    )
  }
}

export default Friend;