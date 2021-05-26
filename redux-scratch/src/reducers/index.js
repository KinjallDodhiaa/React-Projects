import {combineReducers} from 'redux';

const todosList = ["shopping", "sports"];

const todosReducer = (todos = todosList, action) => {

    if(action.type==='ADD_TODO'){
        todosList.push(action.payload);
        return [...todosList]
    }

    if(action.type === 'DELETE_TODO'){
        todosList.splice(action.payload,1);
        return [...todosList]
    }
    if (action.type === "ADD_IN_PROGRESS") {
      todosList.splice(action.payload.index, 1);
      return [...todosList];
    }

    if (action.type === "BACK_TO_TODO") {
        todosList.push(action.payload.todo);
        return [...todosList]
    }
    return todos;
}

const inProgressList = [];

const inProgressReducer = (inprogress = inProgressList, action) => {

    if (action.type === "ADD_IN_PROGRESS") {
        inProgressList.push(action.payload.todo);
        return [...inProgressList];
    }

    if (action.type === "DELETE_TODO_INPROGRESS") {
      inProgressList.splice(action.payload, 1);
      return [...inProgressList];
    }

    
     if (action.type === "DONE_TODOS") {
       inProgressList.splice(action.payload.index, 1);
       return [...inProgressList];
     }

    if (action.type === "BACK_TO_TODO") {
      inProgressList.splice(action.payload.index, 1);
      return [...inProgressList];
    }

    if (action.type === "BACK_INPROGRESS") {
        inProgressList.push(action.payload.todo)
        return [...inProgressList]
    }
    
    return inprogress;
}

const doneTodos = [];

const doneReducer = (done = doneTodos, action ) => {

    if(action.type === "DONE_TODOS"){
        doneTodos.push(action.payload.todo);
        return [...doneTodos]
    }

     if (action.type === "DELETE_TODO_INDONE") {
       doneTodos.splice(action.payload, 1);
       return [...doneTodos];
     }

     if (action.type === "BACK_INPROGRESS") {
         doneTodos.splice(action.payload.index,1);
         return [...doneTodos]
     }
     return done;
}

export default combineReducers(  {
    todos: todosReducer,
    inprogressList: inProgressReducer,
    doneTodos: doneReducer

})