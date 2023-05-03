import React, {Component} from 'react';

class Counter extends Component{

    constructor(props) {
        super(props);

        this.state={
            value: this.props.defaultValue
        }
        // this.handleClickPlus = this.handleClickPlus.bind(this)
    }
// state ={ }

    // handleClickPlus() { - մեր սխալը այս տողում էր, պետք է arrow function անեինք, որ this կարողանար հասկանար
    handleClickPlus = ()=>{
        this.setState({
            value: this.state.value + 1
        })
    }

    render() {
        return(
            <div>
                <p>This default value {this.state.value} --- </p>

                <button onClick={this.handleClickPlus}>value +</button>
                <button onClick={()=>{
                    this.setState({
                        value: this.state.value - 1
                    })

                }}>value -</button>
            </div>
        );
    }
}

export default Counter;