import React, {Component} from 'react';
import { connect } from 'react-redux';
import LoginForm from '../components/LoginForm';

const mapStateToProps = (state, ownProps) => {
  return {};
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createUser: (e, props) => {
      e.preventDefault()
      dispatch(creatingUser({
        email: props.email,
        password: props.password,
        address: props.address,
        firstName: props.firstName,
        lastName: props.lastName,
      }))
    },
    loginUser: (e, props) => {
      e.preventDefault()
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
      firstName: "",
      lastName: "",
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
      firstName: "",
      lastName: "",
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
        firstName={this.state.firstName}
        lastName={this.state.lastName}
        error={this.state.error}
        handleLoginToggle={this.handleLoginToggle}
        handleChange={this.handleChange}
        createUser={props.createUser}
        loginUser={props.loginUser}
      />
    )
  }
}
const LoginFormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(LIF);

export default LoginFormContainer;
