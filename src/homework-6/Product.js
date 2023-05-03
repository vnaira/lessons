import React, {Component} from "react";
import Name from "./Name";
import Price from "./Price";

class Product extends Component{

    render() {
        const {name,price} = this.props
        return (
            <>
                <Name value={name}/>
                <Price value={price}/>
            </>
        )
    }
}

export default Product;