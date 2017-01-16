import React, { Component } from 'react'

export default function (props) {

  console.log("props:", props);
  const renderForm = () => {
    if (props.returningUser) {
      return (
        <div className="row" style={{marginTop: 50, marginBottom: 70}}>
          <div className="col-md-4 col-md-offset-4">
            <h1>Login</h1>
            <form onSubmit={evt => {
                evt.preventDefault()
                props.loginUser(props)
              } }>
              <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => { props.handleChange(event, 'email')}}
                  value={props.email} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={ (event) => { props.handleChange(event, 'password') }}
                  value={props.password}
                  />
              </div>

              <div>
                <button type="submit" className="btn btn-primary"> Login </button>
                <button className="btn btn-success" style={{float: 'right'}} onClick={() => {props.handleLoginToggle()}}> New User? Sign Up! </button>
              </div>
            </form>
          </div>
        </div>
        )
    }
    else {
      return (
        <div className="row" style={{marginTop: 50, marginBottom: 70}}>
          <div className="col-md-6 col-md-offset-3">
            <h1>Signup</h1>
            <form onSubmit={evt => {
                  evt.preventDefault()
                  props.createUser(props)
              } }>
              <div className="form-group">
                <label htmlFor="firstname">First Name</label>
                <input
                  name="First Name"
                  placeholder="First Name"
                  type="text"
                  className="form-control"
                  id="firstname"
                  onChange={(event) => { props.handleChange(event, 'firstname')}}
                  value={props.firstname} />
              </div>
              <div className="form-group">
                <label htmlFor="lastname">Last Name</label>
                <input
                  name="Last Name"
                  placeholder="Last Name"
                  type="text"
                  className="form-control"
                  id="lastname"
                  onChange={(event) => { props.handleChange(event, 'lastname')}}
                  value={props.lastname} />
              </div>
              <div className="form-group">
                <label htmlFor="inputEmail">Email address</label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail"
                  aria-describedby="emailHelp"
                  placeholder="Enter email"
                  onChange={(event) => { props.handleChange(event, 'email')}}
                  value={props.email} />
              </div>
              <div className="form-group">
                <label htmlFor="exampleInputPassword1">Password</label>
                <input
                  placeholder="Password"
                  type="password"
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={ (event) => { props.handleChange(event, 'password') }}
                  value={props.password}
                  />
              </div>
              <div className="form-group">
                <label htmlFor="address">Address</label>
                <input
                  name="Address"
                  placeholder="Address"
                  type="text"
                  className="form-control"
                  id="address"
                  onChange={(event) => { props.handleChange(event, 'address')}}
                  value={props.address}
                  />
              </div>
              <div>
                <button
                  type="submit" className="btn btn-primary"> Sign Up </button>
                <button className="btn btn-success" style={{float: 'right'}} onClick={() => {props.handleLoginToggle()}}> Returning user? Log in! </button>
              </div>
            </form>
            <text style={{fontSize: 20, color: 'red'}}>
              {props.error}
            </text>
          </div>
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
