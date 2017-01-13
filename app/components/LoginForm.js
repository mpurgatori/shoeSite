import React, { Component } from 'react'

export default function (props) {

  console.log("props:", props);
  const renderForm = () => {
    if (props.returningUser) {
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
                onChange={(event) => { props.handleChange(event, 'email')}}
                value={props.email} />
            </div>
            <div>
              <input
                name="Password"
                placeholder="Password"
                onChange={ (event) => { props.handleChange(event, 'password') }}
                value={props.password}
                />
            </div>

            <div>
              <button onClick={() => {props.createLoginUser('Login', props)}}> Login </button>
            </div>
          </form>
          <button onClick={() => {props.handleLoginToggle()}}> New User? Sign Up! </button>
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
                onChange={(event) => { props.handleChange(event, 'firstName')}}
                value={props.firstName} />
            </div>
            <div>
              <input
                name="Last Name"
                placeholder="Last Name"
                onChange={(event) => { props.handleChange(event, 'lastName')}}
                value={props.lastName} />
            </div>
            <div>
              <input
                name="Email"
                placeholder="Email"
                onChange={(event) => { props.handleChange(event, 'email')}}
                value={props.email} />
            </div>
            <div>
              <input
                name="Password"
                placeholder="Password"
                onChange={ (event) => { props.handleChange(event, 'password') }}
                value={props.password}
                />
            </div>
            <div>
              <input
                name="Address"
                placeholder="Address"
                onChange={(event) => { props.handleChange(event, 'address')}}
                value={props.address}
                />
            </div>
            <div>
              <button onClick={() => {props.createLoginUser('Signup', props)}}> Sign Up </button>
            </div>
          </form>
          <text style={{fontSize: 20, color: 'red'}}>
            {props.error}
          </text>
          <button onClick={() => {props.handleLoginToggle()}}> Returning user? Log in! </button>
        </div>
      )
    }
  }

  return (
    <div>
      {renderForm()}
    </div>
  )

}
