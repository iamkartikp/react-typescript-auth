import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NavBar extends Component {
    render() {
        return (
            <div className="navbar bg-dark">
                <h1 className="text-light mx-2">
                    <Link to="/">NavBar</Link>
                </h1>
                <div className="d-flex">
                    {!localStorage.getItem('user') && 
                        <React.Fragment>
                            <p className="text-light mx-2"> 
                                <Link to="/login">Login</Link> </p>
                            <p className="text-light mx-2"> 
                            <Link to="/signup">Signup</Link> </p>
                        </React.Fragment>}
                    {localStorage.getItem('user') && 
                        <React.Fragment>
                            <p className="text-light mx-2">
                                <Link to='logout'>Logout</Link>
                            </p>
                        </React.Fragment>    
                    }
                </div>
            </div>
        )
    }
}

export default NavBar;