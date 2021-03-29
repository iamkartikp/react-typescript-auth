// export const doSomething = () => {
//     return {
//         type: 'LOGIN',
//         payload: 10
//     } 
// }

import axios from "axios";

// axios.post('http://localhost:5000/users/login', this.state)
//             .then(() => {
//                 this.props.history.push("/")
//                 this.props.isLogged(this.state);
//             }).catch(data => {
//                 console.log(data.data)
//             })

export const loginUser = () => (dispatch:any) => {
    axios.post('http://localhost:5000/users/login', )
        .then(() => {
            console.log('user logged in')
        }).then(data => {
            dispatch({
                type: 'LOGIN',
                payload: data
            })
        })
}