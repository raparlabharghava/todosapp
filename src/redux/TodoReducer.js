export default function TodoReducer(state, action){
    switch(action.type){
        case "addTodo":
            if(!Array.isArray(state.todosList) || !state.todosList.length ){
                return {...state,todosList:[action.todo]}
            }else{
                return {
                    ...state, 
                    todosList: [ ...state.todosList , action.todo]};
            }
            
        case "deleteTodo":
            return {
                ...state, 
                todosList: state.todosList
                .filter(todo => todo.id !== action.todo.id)};
        case "updateTodo":
            return {
                ...state, 
                todosList: state.todosList.map(todo => todo.id === action.todo.id ? action.todo : todo)
            };
        default:
            return state;
    }
}
