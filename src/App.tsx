
import LoginForm from './components/LoginForm';
// import LoginForm from '@components/LoginForm'
import Home from './components/Home';
import './App.css';
import { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';
import Logout from './components/Logout';
import Profile from './components/Profile';

class App extends Component {
  state = {
    users : [
      
    ],
    isLoggedIn: localStorage.getItem('user')
  }
  addUser = (user:object) => {
    const users = [...this.state.users, user]
    this.setState({
      users
    })
  }
  isLogged = (user:object) => {
    this.setState({
      isLoggedIn: true
    })
  }
  render() {
    return (
      <div className="App">
        <NavBar />
          <Switch>
            <Route path="/not-found" component={NotFound} />
            <Route exact path="/" render={ props => 
              <Home isLogged={this.state.users}/>}/>
            <Route path="/profile" 
              render={props => {
                if(!localStorage.getItem('user')) return <Redirect to='login'/>
                return <Profile />
              }}/>
            <Route path="/signup" 
              render={props => <SignUp addUser={this.addUser} {...props}/> }/>
            <Route path="/login" 
              render={props => <LoginForm isLogged={this.isLogged} {...props} />} />
            <Route path='/logout' component={Logout}/>
            <Redirect to="/not-found" />
          </Switch>
      </div>
    );
  }
}

export default App;
