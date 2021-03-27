import { Component } from "react";

interface IProps {
    isLogged: object[]
}

class Home extends Component<IProps> {
    render() {
        return (
            <div>
                {this.props.isLogged.length === 0 ?  <h1>Not Logged in</h1> 
                    :<h1>Home</h1>}
            </div>
        )
    }
}

export default Home;
