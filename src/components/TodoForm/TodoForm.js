import React, { Component } from 'react';

class TodoForm extends Component {
    constructor(){
        super();
        this.state = {
          todo: ''
        };
      }


    render() {
        return (
            <div className="">
                <form id="todoform" onSubmit={this.handleSubmit}> 
                    <input type="text" onChange={this.handleChange} placeholder="Tarea"></input>
                    <button type="submit"> Añadir </button>
                </form>
            </div>
        );
    }
    handleChange = (e) =>{
        this.setState({todo:e.target.value})
    }
    handleSubmit = (e) =>{
        e.preventDefault();
        this.props.addFn(this.state.todo);
        document.getElementById("todoform").reset();
    }
}

export default TodoForm;