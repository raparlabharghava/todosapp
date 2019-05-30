let todoCount=1;
export const addTodoAction = todo => ({
  type: 'addTodo',
  todo:{
      id: todoCount++,
      name: todo
  }
});

export const updateTodoAction = todo => ({
    type: 'updateTodo',
    todo
  });

export const deleteTodoAction = todo => ({
    type: 'deleteTodo',
    todo
  });

