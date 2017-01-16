import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';
import {login, create} from '../redux/auth.jsx'

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createUser: (props) => {
      dispatch(create({
        email: props.email,
        password: props.password,
        address: props.address,
        firstname: props.firstname,
        lastname: props.lastname,
      }))
    },
    loginUser: (props) => {
      dispatch(login({
        email: props.email,
        password: props.password,
      }))
    }
  };
}

class LIF extends Component {
  constructor(props) {
    super(props);
    this.state = {
      returningUser: false,
      email: "",
      password: "",
      address: "",
      firstname: "",
      lastname: "",
      error: "",
      createUser: props.createUser,
      loginUser: props.loginUser,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleLoginToggle = this.handleLoginToggle.bind(this)
  }

  onLoginSuccess() {
    this.setState({
      returningUser: false,
      email: "",
      password: "",
      address: "",
      firstname: "",
      lastname: "",
      error: ""
      })
  }

  onLoginFail() {
    this.setState({
      error: "Authentication Failed."
    })
  }

  handleChange(event, field) {
    this.setState({[field]: event.target.value});
  }

  handleLoginToggle() {
    let newReturningUser = !this.state.returningUser;
    this.setState({ returningUser: newReturningUser })
  }
  render() {
    return (
      <LoginForm
        returningUser={this.state.returningUser}
        email={this.state.email}
        password={this.state.password}
        address={this.state.address}
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        error={this.state.error}
        handleLoginToggle={this.handleLoginToggle}
        handleChange={this.handleChange}
        createUser={this.state.createUser}
        loginUser={this.state.loginUser}
      />
    )
  }
}
const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LIF);

export default LoginFormContainer;
