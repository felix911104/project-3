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
            console.log("try again!")
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
            });
        }

    };


    render() {
        return (

            <form className="container-fluid" onSubmit={this.handleFormSubmit}>

                <Input inputType={'text'}
                    title={'Full Name'}
                    name={'name'}
                    value={this.state.newUser.name}
                    placeholder={'Enter your name'}
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
                    style={buttonStyle}
                />


            </form>

        );
    }
}

const buttonStyle = {
    margin: '10px 10px 10px 10px'
}

export default SignUpContainer;