import React, { Component } from 'react';
import axios from "axios";

/* Import Components */
import Input from './Input';
import Button from './Button'

class SignUpContainer extends Component {
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
            // axios.get("http://localhost:8080/api/users/"+userData.name+"/"+userData.password).then(results => {
            //     console.log(results.data);
            // });

            // Send a POST request to create new user
            axios({
                method: 'post',
                url: "http://localhost:8080/api/users/",
                data: {
                    name: userData.name,
                    password: userData.password
                }
            }).then(res => {
                console.log(res.data);
            if(res.data.success) {
                alert("Success! Welcome to the app!");
                this.props.history.push('/signin')
            }
            else {
                alert("Username is taken, please choose another username")
            }
            })
           
        }

    };

    cancelCourse = () => {
        this.setState({
            name:"",
            password:""
        })
    }
  

    render() {
        return (

            <form className="container-fluid" onSubmit={this.handleFormSubmit}>

                <Input inputType={'text'}
                    title={'Username'}
                    name={'name'}
                    value={this.state.newUser.name}
                    placeholder={'Enter your username'}
                    handleChange={this.handleInput}

                />

                <Input inputType={'password'}
                    name={'password'}
                    title={'Password'}
                    value={this.state.newUser.password}
                    placeholder={'Choose a password'}
                    handleChange={this.handleInput} />


                <Button
                    action={this.handleFormSubmit}
                    type={'primary'}
                    title={'Submit'}
                />
            </form>
        );
    }
}


export default SignUpContainer;