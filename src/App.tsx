
import LoginForm from './components/LoginForm';
// import LoginForm from '@components/LoginForm'
import Home from './components/Home';
import './App.css';
import { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import SignUp from './components/SignUp';

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
        <BrowserRouter>
        <NavBar />
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/signup" 
              component={() => <SignUp addUser={this.addUser}/> }/>
            <Route path="/login" 
              component={() => <LoginForm addedUsers={this.state} />} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
