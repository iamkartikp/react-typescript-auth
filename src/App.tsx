
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
      
    ]
  }
  addUser = (user:object) => {
    const users = [...this.state.users, user]
    this.setState({
      users
    })
  }
  render() {
    console.log(this.state)
    return (
      <div className="App">
        <NavBar />
          <Switch>
            <Route path="/not-found" component={NotFound} />
            <Route exact path="/" component={Home}/>
            <Route path="/signup" 
              render={props => <SignUp addUser={this.addUser} {...props}/> }/>
            <Route path="/login" 
              render={props => <LoginForm addedUsers={this.state} {...props} />} />
            <Redirect to="/not-found" />
          </Switch>
      </div>
    );
  }
}

export default App;
