import React,{Component} from 'react';
export default class Todo extends Component{
    editTodo = () => {
        this.props.editTodoHandler(this.props.todo);
    }
    deleteTodo = () => {
        this.props.deleteTodoHandler(this.props.todo);
    }
    render(){
        return(
            <div >{this.props.todo.id}  {this.props.todo.name}
                    <button onClick={this.editTodo}>Edit</button> 
                    <button onClick={this.deleteTodo}>Delete</button>
            </div>
            );
    }
}