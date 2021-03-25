import React, { Component } from 'react';

class SignUp extends Component {
    state = {
        name: null,
        email: null,
        password: null       
    }
    handleChange = e => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault();
        this.props.addUser(this.state)
    }
    render() {
        return (
            <div className="login-form bg-light p-5 col-12 m-2">
                <form onSubmit={this.handleSubmit} className="container col-6">
                    <input type="text" id="name" placeholder="Name" 
                        className="form-control my-2" onChange={this.handleChange} />
                    <input type="text" id="email" placeholder="E-mail" 
                        className="form-control my-2" onChange={this.handleChange} />
                    <input type="text" id="password" placeholder="Password" 
                        className="form-control my-2" onChange={this.handleChange} />
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default SignUp;
