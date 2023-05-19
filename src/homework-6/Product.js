import React, {Component} from "react";
import Name from "./Name";
import Price from "./Price";

class Product extends Component{

    render() {
        const {name,price,icon} = this.props
        return (
            <p>
                <span>{icon}</span>
                <Name value={name}/>
                <Price value={price}/>
            </p>
        )
    }
}

export default Product;