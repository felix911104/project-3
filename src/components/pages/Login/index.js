import React, { Component } from "react";
import "./style.css";
import axios from "axios";

class LogIn extends Component {
  constructor(props) {
    super(props);

    this.state = {
      newUser: {
        name: '',
        password: ''
      },

    }

    this.handleFormSubmit = this.handleFormSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }


  handleInput(event) {
    let value = event.target.value;
    let name = event.target.name;
    this.setState(prevState => ({
      newUser:
      {
        ...prevState.newUser, [name]: value
      }
    }), () => console.log(this.state.newUser))
  }


  handleFormSubmit(e) {
    e.preventDefault();
    let userData = this.state.newUser;
    console.log(userData)

    if (userData.name === "" && userData.password === "") {
      alert("Please fill out username and password, thank you")
      // console.log("try again!")
    }
    else {
      //send a GET request to login exisiting user
      axios.get("http://localhost:8080/api/users/" + userData.name + "/" + userData.password).then(results => {
        console.log(results.data);
        if (results.data.success) {
          this.props.history.push('/')
        }
        else {
          alert("Invalid username or password, try again")
        }
      });
    };
  };
  render() {
    return (
      <div>
        <div className="container">
          <div className="main">
            <div className="logo">
              <h1>L</h1>
            </div>
            <form action="/" onSubmit={this.handleFormSubmit}>
              <input type="text" title="Username" name="name" value={this.state.newUser.name} placeholder="Enter a user name" onChange={this.handleInput} autoComplete="off" required />	<i className="fa fa-user" />
              <input type={"password"} title={"password"} name={"password"} value={this.state.newUser.password} placeholder={"enter a password"} onChange={this.handleInput} autoComplete="off" required />	<i className="fa fa-lock" />
              <input action={this.handleFormSubmit} type="submit" defaultValue="Log In" />
              <h4>Don't have an account?<a href="/signup"> Signup here!</a></h4>
            </form>
          </div>
        </div>




      </div>


    )
  }
}
export default LogIn;