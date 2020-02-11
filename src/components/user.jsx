import React from 'react';

class User extends React.Component {
  render () {
    return <h2>user: {this.props.user}</h2>;
  }
}

export default User