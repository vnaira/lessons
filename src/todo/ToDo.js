import {Component} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";
import idGen from '../helpers/idGen'

class ToDo extends Component{
    state={
        inputValue:'',
        tasks: []
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

    addTask=()=>{
        const inputValue = this.state.inputValue.trim();
        if(!inputValue){
            return
        }

        const newTask = {
            title: inputValue,
            _id: idGen()
        }

        const tasks = [...this.state.tasks, newTask]

        this.setState({
            tasks,
            inputValue: ''
        })
    }


    deleteTask=(taskId)=>{
        const newTasks = this.state.tasks.filter((el)=>el._id !== taskId)
        this.setState({
            tasks: newTasks
        })
    }

    render() {
        const {tasks, inputValue} = this.state;

        const taskComponent = tasks.map((task)=>{
            return <Col key={task._id}>
                {task.title}

                <Button variant='danger' onClick={()=>this.deleteTask(task._id)}>
                    Delete
                </Button>
            </Col>
        })

        return(
            <Container>
                <input type="text" value={this.state.inputValue} onChange={this.handleChange}/>
                <button onClick={this.addTask}>Add task</button>

                <Row>
                    {taskComponent}
                </Row>
            </Container>
        )
    }
}

export default ToDo;