import React, { Component } from 'react';
import axios from 'axios';

class SignUp extends Component<any>{
    state = {
        name: null,
        email: null,
        password: null       
    }
    handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.currentTarget.id]: e.currentTarget.value
        })
    }
    handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        this.props.addUser(this.state)
        axios.post('http://localhost:5000/users/', this.state)
            .then(() => {
                console.log('User added!')
            }).catch(err => {
                alert('Error!' +err)
            })
    }
    render() {
        return (
            <div className="login-form bg-light p-5 col-12 m-2">
                <form onSubmit={this.handleSubmit} className="container col-6">
                    <input type="text" id="name" placeholder="Name" 
                        className="form-control my-2" onChange={this.handleChange} />
                    <input type="text" id="email" placeholder="E-mail" 
                        className="form-control my-2" onChange={this.handleChange} />
                    <input type="password" id="password" placeholder="Password" 
                        className="form-control my-2" onChange={this.handleChange} />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;
