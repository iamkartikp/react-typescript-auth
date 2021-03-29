
import LoginForm from './components/LoginForm';
// import LoginForm from '@components/LoginForm'
import Home from './components/Home';
import './App.css';
import { Component } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';
import NotFound from './components/NotFound';

class App extends Component {
  state = {
    users : [
      
    ],
    isLoggedIn: false
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
        <p>Count: </p>
          <Switch>
            <Route path="/not-found" component={NotFound} />
            <Route exact path="/" render={ props => 
              <Home isLogged={this.state.users}/>}/>
            <Route path="/signup" 
              render={props => <SignUp addUser={this.addUser} {...props}/> }/>
            <Route path="/login" 
              render={props => <LoginForm isLogged={this.isLogged} {...props} />} />
            <Redirect to="/not-found" />
          </Switch>
      </div>
    );
  }
}

export default App;
