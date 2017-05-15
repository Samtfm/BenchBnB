import React from 'react';
class SessionForm extends React.Component{

  constructor(props){
    super(props);
    this.state = {username: "", password: ""};
  }

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(this.state);
  }

  updateUsername(e){
    e.preventDefault();
    this.setState({username: e.target.value});
  }

  updatePassword(e){
    e.preventDefault();
    this.setState({password: e.target.value});
  }

  render(){
    return(
      <form className='session_form'>
        <label>
          username:
          <input type="text"
            value={this.state.username}
            onChange={this.updateUsername.bind(this)}></input>
        </label>
        <label>
          password:
          <input type="password"
            value={this.state.password}
            onChange={this.updatePassword.bind(this)}></input>
        </label>
        <input type="submit"
          onClick={this.handleSubmit.bind(this)}
          value={this.props.formType} />
      </form>
    );
  }
}

export default SessionForm;
