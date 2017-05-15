import React from 'react';
import { Link } from 'react-router-dom';

class Greeting extends React.Component {
  constructor(props){
    super(props);
  }

  render() {
    console.log(this.props.currentUser);
    if (this.props.currentUser){
      return (<div id='Greeting'>
          <h2>Hello, {this.props.currentUser.username}!</h2>
          <button type="button" onClick={this.props.logOut.bind(this)}>Log Out</button>
      </div>);
    } else {
      return (
        <div id="Greeting">
          <h1> Please log in or sign up</h1>
          <Link to="/signup" >Sign Up</Link>
          <Link to="/login">Log In</Link>
        </div>
      );
    }

  }
}

export default Greeting;
