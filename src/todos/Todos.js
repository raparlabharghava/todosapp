import React, {Component} from 'react';
import { connect } from 'react-redux';
import {updateTodoAction, deleteTodoAction} from '../redux/TodoActions';
import EditTodo from './EditTodo';
import Todo from './Todo';
class TodoList extends Component{
    updateTodoHandler = (todo) => {
        todo.editMode = "N";
        this.props.updateTodo(todo);

    }
    editTodoHandler = (todo) => {
        todo.editMode= !todo.hasOwnProperty("editMode") || todo.editMode === "N"  ? "Y" : "N";
        this.props.updateTodo(todo);
    }
    deleteTodoHandler = (todo) => {
        this.props.deleteTodo(todo);
    }
    componentDidUpdate(){
        if(Array.isArray(this.props.todosList) && this.props.todosList.length > 0){
            localStorage.setItem('todos', JSON.stringify(this.props.todosList));
        }else{
            localStorage.clear();
        }
    }
    render(){
        return(
            <div><h2>Todos</h2>
            { this.props.todosList && this.props.todosList.map( (todo, index) => {
                   return (
                    !(todo.hasOwnProperty('editMode')) || todo.editMode === 'N' ? 
                        <Todo key={todo.id} todo={todo} editTodoHandler={this.editTodoHandler} deleteTodoHandler={this.deleteTodoHandler}></Todo>
                   
                    : <EditTodo key={index} todo={todo} updateToDO={this.updateTodoHandler}></EditTodo>            
        )
       })
            }
        </div>
        );

    }
}
const mapStateToProps = state => ({
    todosList: state.todosList
  })
  
  const mapDispatchToProps = dispatch => ({
    updateTodo: todo => dispatch(updateTodoAction(todo)),
    deleteTodo: todo => dispatch(deleteTodoAction(todo))
  })
export default connect(
    mapStateToProps, mapDispatchToProps
  )(TodoList);

  /*  <div key={index}>{todo.name} 
                    <button onClick={() => this.editTodoHandler(todo)}>Edit</button> 
                    <button onClick={() => this.deleteTodoHandler(todo)}>Delete</button></div> */