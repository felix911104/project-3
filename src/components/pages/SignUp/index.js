import React, { Component } from "react";
import "./style.css";
import axios from "axios";


class SignUp extends Component {
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
      axios({
        method: 'post',
        url: "http://localhost:8080/api/users/",
        data: {
          name: userData.name,
          password: userData.password
        }
      }).then(res => {
        console.log(res.data);
        if (res.data.success) {
          alert("You can now login")
          this.props.history.push('/login')
        }
        else {
          alert("Username is taken, please choose another username")
        }
      })

    }

  };

  render() {
    return (
      <div>
        <div className="container">
          <div className="main">
            <div className="logo">
              <h1>S</h1>
            </div>
            <form action="/" onSubmit={this.handleFormSubmit}>
              <input type="text" title="Username" name="name" value={this.state.newUser.name} placeholder="Enter a user name" onChange={this.handleInput} autoComplete="off" required />	<i className="fa fa-user" />
              <input type={"password"} title={"password"} name={"password"} value={this.state.newUser.password} placeholder={"enter a password"} onChange={this.handleInput} autoComplete="off" required />	<i className="fa fa-lock" />
              <input action={this.handleFormSubmit} type="submit" defaultValue="Log In" />
              <h4>Already have an account?<a href="/login"> Go Login!</a></h4>
            </form>
          </div>
        </div>




      </div>


    )
  }
}
export default SignUp;