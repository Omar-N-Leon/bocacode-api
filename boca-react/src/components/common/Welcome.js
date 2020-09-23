import React, { Component } from 'react'

class Welcome extends Component {
    constructor(props) {
        super(props)
        this.state = { counter: 0 }
    }
    handleClick(change){
        let {counter} = this.state
        this.setState({counter: counter + change})
    }
    render() {
        let { name } = this.props
        let { counter } = this.state
        return (
            <>
                <h1>Hello, {name}</h1>
                <p>Counter: {counter}</p>
                <button onClick={() => this.handleClick(5)}>Increase by 5</button>
                <button onClick={() => this.handleClick(10)}>Increase by 10</button>
                <button onClick={() => this.handleClick(-5)}>Decrease by 5</button>   
            </>
        )
    }
}

export default Welcome