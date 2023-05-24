import {Component} from "react";

export default class Child extends Component{

    render() {
        return(
            <div className="border border-dark">
                <h2>child1</h2>
                <p>{this.props.value}</p>
                <p>{this.props.urish}</p>
            </div>
        )
    }
}