import React, { Component } from 'react';
import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
import { loginUser } from './actions/demo'

interface IProps {
    history: {
        push: any
    };
    isLogged: any,
    loginUser: any
}

class LoginForm extends Component<IProps>{
    componentDidMount() {
        
    }
    handleChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e:React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault();
        // const users = this.props.addedUsers;
        this.props.loginUser(this.state);
    }
    render() {
        return (
            <div className="login-form bg-light p-5 col-12 m-2">
                <form onSubmit={this.handleSubmit} className="container col-6">
                    <input type="text" id="name" placeholder="Name" 
                        className="form-control my-2" onChange={this.handleChange} 
                        required/>
                    <input type="password" id="password" placeholder="Password" 
                        className="form-control my-2" onChange={this.handleChange} 
                        required/>
                    <button className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

// const mapStateToProps = (state: any) => ({
//     // from root reducer 
//     data: state.demo
// })

export default connect(null, {loginUser})(LoginForm);

// RBAC - Role Based Access Control