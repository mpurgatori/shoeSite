import React, { Component } from 'react'

export default class LoginForm extends Component { 

  constructor(props) {
    super(props);
    this.state = {
      returningUser: false,
      email: "",
      password: "",
      address: "",
      firstName: "",
      lastName: "",
      error: ""

    }
    this.renderForm = this.renderForm.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  // login method

  // signup method

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

  renderForm() {
    console.log("state:", this.state);
    if (this.state.returningUser) {
      return (
        <div>
          <form onSubmit={evt => {
              evt.preventDefault()
              login(evt.target.username.value, evt.target.password.value)
            } }>
            <div>
              <input 
                name="Email"
                placeholder="Email"
                onChange={(event) => { this.handleChange(event, 'email')}}
                value={this.state.email} />
            </div>
            <div>
              <input 
                name="Password"
                placeholder="Password"
                onChange={ (event) => { this.handleChange(event, 'password') }}
                value={this.state.password}
                />
            </div>

            <div>
              <button> Login </button>
            </div>
          </form>
          <button onClick={this.handleLoginToggle.bind(this)}> New User? Sign Up! </button>
        </div>
        )
    }
    else {
      return (
        <div>
          <form onSubmit={evt => {
                evt.preventDefault()
                login(evt.target.username.value, evt.target.password.value)
            } }>
            <div>
              <input 
                name="First Name"
                placeholder="First Name"
                onChange={(event) => { this.handleChange(event, 'firstName')}}
                value={this.state.firstName} />
            </div>
            <div>
              <input 
                name="Last Name"
                placeholder="Last Name"
                onChange={(event) => { this.handleChange(event, 'lastName')}}
                value={this.state.lastName} />
            </div>
            <div>
              <input 
                name="Email"
                placeholder="Email"
                onChange={(event) => { this.handleChange(event, 'email')}}
                value={this.state.email} />
            </div>
            <div>
              <input 
                name="Password"
                placeholder="Password"
                onChange={ (event) => { this.handleChange(event, 'password') }}
                value={this.state.password}
                />
            </div>
            <div>
              <input 
                name="Address"
                placeholder="Address"
                onChange={(event) => { this.handleChange(event, 'address')}}
                value={this.state.address}
                />
            </div>
            <div>
              <button> Sign Up </button>
            </div>
          </form>
          <text style={{fontSize: 20, color: 'red'}}>
            {this.state.error}
          </text>
          <button onClick={this.handleLoginToggle.bind(this)}> Returning user? Log in! </button>
        </div>
      )
    }
  }

  render() {
    return (
      <div>
      {this.renderForm()}
      </div>
  )
}
}

