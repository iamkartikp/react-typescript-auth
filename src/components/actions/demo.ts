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

export const loginUser = (postData: any) => (dispatch:any) => {
    axios.post('http://localhost:5000/users/login', postData )
        .then(data => {
            dispatch({
                type: 'LOGIN',
                payload: data
            })
            if(data.data === 'Login successful!') {
                    window.location.href = '/';
                    localStorage.setItem('user',postData.name)
                }
            else
                alert(data.data)
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