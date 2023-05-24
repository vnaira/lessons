import {Component} from "react";
import Child from "./Child";
import Child2 from "./Child2";

export default class Parent extends Component{
    state={
        text: '',
        text2: ''
    }

    handleChange =(event)=>{
        this.setState({
            text: event.target.value
        })
    }

    render() {
        return(
            <div>
                <input type="text" onChange={this.handleChange}/>
                <Child value={this.state.text} urish={this.state.text2}/>
                <Child2 onSendValue={(param)=>{
                    this.setState({
                        text2: param
                    })

                }}/>
                <h2>{this.state.text2}</h2>
            </div>
        )
    }
}