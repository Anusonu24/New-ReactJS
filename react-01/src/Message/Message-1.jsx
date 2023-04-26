import React, { Component } from 'react'

class Message extends Component {
    constructor(props) {
        super(props)
        console.log("first constructor")
    }
    msg = "hello,,,,,"
    gmhandler() {
        console.log("without clicking")
    }
    gnhandler() { }
    render() {
        console.log("second render method")
        return (
            <div>
                <h1>Message Component</h1>
                <hr />
                <h3><Message:{this.msg}/></h3>
                <button onClick={this.handler()}>GM</button>
                <button>GN</button>
            </div>
        )
    }

}


export default Message
