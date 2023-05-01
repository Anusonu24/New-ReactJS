import React,{ Component } from 'react'
import Axios from 'axios'
class User extends Component {
    constructor(props) {
        super(props)
        this.state = {
            user: []
        }
    }
    getUserHandler = () => {
        //invoke rest apis
        Axios.get('http://jsonplaceholder.typicode.com/user')
        .then((respnse) => {
            console.log(response)
            })
            .catch(() =>{})
        }
        render() {
            return (
                <div>
                    <h1>Uset data</h1>
                    <pre>{JSON.stringify(this.state)}</pre>
                    <button onClick={this.getUserHandler}> Click Buddy</button>
                </div>
            )
        }
        <
            }
            export default User