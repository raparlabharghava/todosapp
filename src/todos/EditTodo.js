import React, {Component} from 'react';
export default class EditTodo extends Component{
     
    updateTodoChange = () => {
        this.props.updateToDO({...this.props.todo, name:this.input.value});
    }
    render(){
        return(
            <div>
                <input ref={input => this.input = input} defaultValue={this.props.todo.name} ></input>
                <button onClick={this.updateTodoChange}>Update</button>
            </div>
        );
    }
}