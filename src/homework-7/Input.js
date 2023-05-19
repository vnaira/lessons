import React, {Component} from "react";

export default class Input extends Component {

    state = {
        text: '',
        inputValue: '',
        tasks:[]
    }

    handleChange = (e)=>{
        this.setState({
            inputValue: e.target.value
        })
    }

    handleClick = (e)=>{
        this.setState({
            text: this.state.inputValue,
            inputValue:''
        })
    }

    render() {
        return (
            <div>
                <input type="text" onChange={this.handleChange} value={this.state.inputValue}/>
                <button onClick={this.handleClick}>Click me</button>
                <h2>{this.state.text}</h2>
            </div>
        );
    }
}