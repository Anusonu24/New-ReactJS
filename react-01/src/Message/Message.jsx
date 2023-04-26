import React from 'react'
class Message extends React.Component {

    state = {
        msg: "Hello"

    }
    gmHandler = () => {
        this.setState({
            msg: "Good Morning"
        })
    }
    gnHandler = () => {
        this.setState({
            msg: "Good Night"
        })
    }
    render() {
        return <div>
            <h1>Message Component</h1>
            <pre>{JSON.stringify(this.state)}</pre>
            <h3>Message value:{this.state.msg}</h3>
            <button onClick={this.gmHandler}>gm</button>
            <button onClick={this.gnHandler}>gn</button>
            
            
            
        </div>
    }
}
export default Message