import { Component } from "react";

interface IProps {
    isLogged: object[]
}

class Home extends Component<IProps> {
    render() {
        return (
            <div>
                {localStorage.getItem('user') ?  <h1>Welcome {localStorage.getItem('user')}</h1> 
                    : <h1>Not Logged in</h1>}
            </div>
        )
    }
}

export default Home;
