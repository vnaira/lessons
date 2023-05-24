import {Component} from "react";
import {Container, Row, Col, Button, InputGroup, FormControl} from "react-bootstrap";
import idGen from '../helpers/idGen';

class ToDo extends Component{
    state={
        inputValue:'',
        tasks: [],
        selectedTasks: new Set()
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

    toggleTask=(taskId)=>{
        const selectedTasks = new Set(this.state.selectedTasks);
        if(selectedTasks.has(taskId)){
            selectedTasks.delete(taskId)
        }else {
            selectedTasks.add(taskId)
        }

        this.setState({
            selectedTasks
        })

    }

    removeSelected = ()=>{
        const {selectedTasks, tasks} = this.state;

        const newTasks = tasks.filter((task) => {
            if(selectedTasks.has(task._id)){
                return false
            }
            return true;
        })
        this.setState({
            tasks: newTasks,
            selectedTasks: new Set()
        })

    }

    render() {
        const {tasks, inputValue, selectedTasks} = this.state;

        const taskComponent = tasks.map((task)=>{
            return <Col key={task._id} md={4} className="border border-dark">
                <p><input type="checkbox" onChange={()=>this.toggleTask(task._id)}/></p>
                <h3>{task.title}</h3>
                <p>Some text</p>
                <Button variant='danger' onClick={()=>this.deleteTask(task._id)}>
                    Delete
                </Button>
            </Col>
        })

        return(
            <Container>
                <h2>Task management system</h2>
                <Row className="justify-content-center">
                    <Col xs={10} md={10}>
                        <InputGroup className="">
                            <FormControl placeholder="" value={inputValue} onChange={this.handleChange}/>
                            <button onClick={this.addTask}>Add task</button>
                        </InputGroup>
                    </Col>
                </Row>
                <Row>
                    <Col md={4} className="mt-5">
                    <Button variant="danger" size="medium" onClick={this.removeSelected} disabled={!selectedTasks.size}>Delete selected</Button>
                    </Col>
                </Row>

                <Row>
                    {taskComponent}
                </Row>
            </Container>
        )
    }
}

export default ToDo;