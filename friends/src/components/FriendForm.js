import React from 'react';

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <h2>New Friend!  :D</h2>
        <form>
          <input
            type='text'
            name='name'
            // value={props.friend.name}
            placeholder='Name...'
          />
          <input
            type='number'
            name='age'
            placeholder='Age...'
          />
          <input
            type='text'
            name='email'
            placeholder='E-mail address...'
          />
        </form>
      </div>
    )
  }
}

export default FriendForm;