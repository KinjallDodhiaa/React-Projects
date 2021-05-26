export const addTodo = (todo) => {
    return {
        type: 'ADD_TODO',
        payload: todo
        }
}

export const deleteTodo = (index) => {
    return{
        type: 'DELETE_TODO',
        payload: index
    }
}

export const addInProgress = (todo,index) => {
    return {
      type: "ADD_IN_PROGRESS",
      payload: {todo,index}
    };
}

export const addDoneTodos = (todo,index) => {
    return {
      type: "DONE_TODOS",
      payload: {todo,index}
    };
}

export const deleteTodoInProgress = (index) => {
  return {
    type: "DELETE_TODO_INPROGRESS",
    payload: index,
  };
};


export const deleteTodoInDone = (index) => {
  return {
    type: "DELETE_TODO_INDONE",
    payload: index,
  };
};


export const backToTodo = (todo, index) => {
  return {
    type: "BACK_TO_TODO",
    payload: { todo, index },
  };
};

export const backToInProgress =(todo,index) => {
    return {
        type: "BACK_INPROGRESS",
        payload:{todo,index}
    }
}
