import {Component} from "react";
import styles from './style.module.css';
import image from '../assets/passport.jpg';
import {Button, Row, Col} from "react-bootstrap";

console.log(styles, 'styles');

class Conditional extends Component{
    state={
        text1: "Hello",
        text2: "ByE!",
        showFirst: true,
        showName: true
    }



    toggle=()=>{
        this.setState({
            showFirst : !this.state.showFirst,
            showName: !this.state.showName
        })
    }

    render() {

        const headingStyle ={
            color: 'red',
            fontSize: '25px'
        };

        const {text1, text2, showFirst, showName} = this.state;
        return(

            <div className={showName ? styles.name : ''}>
                {/*{this.state.showFirst && <h2> {text1}</h2>}*/}
                <span>text</span>
                <h2 style={headingStyle}> {text2}</h2>
                <h2 className='name '> {text2}</h2>
                <img src={image} alt=""/>
                <button onClick={this.toggle} className={styles.btn}>
                    {showName? 'Show text2': 'Show text1'}
                </button>
                <Button variant='primary'>Button</Button>
                <Row>
                    <Col sm={6} md={12}>
                        asasasas
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Conditional;