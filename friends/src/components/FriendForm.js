import React from 'react';

class FriendForm extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.props.isUpdating) {
      this.props.updateFriend();
    } else {
      this.props.addFriend();
    }
  }

  render() {
    return(
      <div>
        <h2>{this.props.isUpdating ? 'Update' : 'Add new'} Friend</h2>
        <form>
          <input
            type='text'
            name='name'
            value={this.props.friend.name}
            placeholder='Name...'
            onChange={this.props.handleChanges}
          />
          <input
            type='number'
            name='age'
            value={this.props.friend.age}
            placeholder='Age...'
            onChange={this.props.handleChanges}
          />
          <input
            type='text'
            name='email'
            value={this.props.friend.email}
            placeholder='E-mail address...'
            onChange={this.props.handleChanges}
          />
        </form>
        <button type='submit'>
          {this.props.isUpdating ? 'Update Friend' : 'Add Friend'}
        </button>
      </div>
    )
  }
}

export default FriendForm;