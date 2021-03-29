import React, { Component } from 'react';
import  axios  from 'axios';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { loginUser } from './actions/demo'

interface IProps {
    history: {
        push: any
    };
    isLogged: any
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

const mapStateToProps = (state: any) => ({
    data: state.data.items
})

export default connect(mapStateToProps, {loginUser})(LoginForm);

// RBAC - Role Based Access Control