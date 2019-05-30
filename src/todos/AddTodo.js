import React, {Component} from 'react';
import {addTodoAction} from '../redux/TodoActions';
import { connect } from 'react-redux';
class AddTodo extends Component{
   
    addTodoHandler = () => {
        if(this.todoInput.value ==="" || this.todoInput.value.length <=0){
            return;
        }
        this.props.addTodo(this.todoInput.value);
        this.todoInput.value="";
    }
    render(){
        return(
            <div><h4>Add New Todo</h4>
                <input ref={input => this.todoInput = input}></input>
                <button onClick={this.addTodoHandler}>Add Todo</button>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    todosList: state.todosList
  })
  
  const mapDispatchToProps = dispatch => ({
    addTodo: todo => dispatch(addTodoAction(todo))
  })
export default connect(
    mapStateToProps, mapDispatchToProps
  )(AddTodo);