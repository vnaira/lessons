import {Component} from "react";

export default class Child2 extends Component{

    childChangeHandle= (event)=>{
        this.props.onSendValue(event.target.value)
    }


    render() {
        return(
            <div className="border border-dark">
                Child2
                <input type="text" onChange={this.childChangeHandle}/>
                <p>{this.props.value}</p>
            </div>
        )
    }
}