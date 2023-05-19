import React, {Component} from "react";

class Price extends Component{
    constructor(props) {
        super(props);
        this.state = {
            price: props.value
        }
    }

    changeCurrency = ()=>{
        let {price} = this.state;
        let realPrice = parseFloat(price);
        // if(price.includes('$')){
        //     price = realPrice*400 + '֏';
        // }else {
        //     price = realPrice/400 + '$';
        // }
        price = price.includes('$')? realPrice*400 + '֏' : realPrice/400 + '$';

        this.setState({
            price: price
        })

    }

    render() {
        const {price} = this.state;

        return (
            <span>
                <span>Price :{price}</span> &nbsp;
                <button onClick={this.changeCurrency}>Change currency</button>
            </span>
        )
    }
}

export default Price;