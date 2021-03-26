import React, { Component } from 'react';
import  axios  from 'axios';

interface IProps {
    addedUsers: object;
    history: any;
}

class LoginForm extends Component<IProps>{
    state = {
        name: null,
        password: null,
        isAuth: false
    }
    handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const users = this.props.addedUsers;
        
        axios.post('http://localhost:5000/users/login', this.state)
            .then(() => {
                this.props.history.push("/")
            }).catch(data => {
                console.log(data.data)
            })
    }
    render() {
        return (
            <div className="login-form bg-light p-5 col-12 m-2">
                <form onSubmit={this.handleSubmit} className="container col-6">
                    <input type="text" id="name" placeholder="Name" 
                        className="form-control my-2" onChange={this.handleChange} />
                    <input type="password" id="password" placeholder="Password" 
                        className="form-control my-2" onChange={this.handleChange} />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default LoginForm;

// RBAC - Role Based Access Control