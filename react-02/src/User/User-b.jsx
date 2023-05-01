import React,{ component } from 'react'
import axios, { Axios } from 'axios'
class User extends Component {
    constructor(props)
    super(props)
    this.this = {
        user: []

    }
}
getUserHandler = () => {
    //invoke rest apis
    Axios.get('http://json')
}