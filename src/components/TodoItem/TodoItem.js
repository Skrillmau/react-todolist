import React, { Component } from 'react';

class TodoItem extends Component {
    render() {
        const {todo,id} = this.props;

        return (
            <>
            <div onClick={this.toggleCompleted}>
                {todo.text}
                {id}
            </div>
            <button onClick={this.deleteTodo}>Eliminar</button>
            </>
        );
    }
    toggleCompleted = () =>{
        
        this.props.updateFn(this.props.todo);
    }
    deleteTodo = () =>{
        this.props.deleteFn(this.props.id);
    }
}

export default TodoItem;