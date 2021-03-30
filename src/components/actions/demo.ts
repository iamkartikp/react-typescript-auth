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

export const loginUser = (postData: object) => (dispatch:any) => {
    axios.post('http://localhost:5000/users/login', postData )
        .then(data => {
            dispatch({
                type: 'LOGIN',
                payload: data
            })
            console.log(data)
        })
}

export const registerUser = (postData:object) => (dispatch:any) => {
    axios.post('http://localhost:5000/users/', postData)
            .then(() => {
                console.log('User added!')
            }).then(data => dispatch({
                type: 'CREATE_USER',
                payload: data
            }))
}