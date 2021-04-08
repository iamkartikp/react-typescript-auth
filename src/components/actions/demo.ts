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

<<<<<<< HEAD
export const loginUser = (postData: {name: string, pasword: string}) => (dispatch:any) => {
=======
export const loginUser = (postData: any) => (dispatch:any) => {
>>>>>>> 02afcd5a9df0d6be11e43317f582b72ca4ce6785
    axios.post('http://localhost:5000/users/login', postData )
        .then(data => {
            dispatch({
                type: 'LOGIN',
                payload: data
            })
<<<<<<< HEAD
        }).catch(err => {
            console.log(err);
=======
            if(data.data === 'Login successful!') {
                    window.location.href = '/';
                    localStorage.setItem('user',postData.name)
                }
            else
                alert(data.data)
>>>>>>> 02afcd5a9df0d6be11e43317f582b72ca4ce6785
        })
        
}

export const registerUser = (postData:{name: string, email: string,
    pasword: string} ) => (dispatch:any) => {
    axios.post('http://localhost:5000/users/', postData)
        .then(data => {dispatch({
                type: 'CREATE_USER',
                payload: data
            })
            console.log('User added')
        }).catch(err => {
            console.log(err)
        })
}