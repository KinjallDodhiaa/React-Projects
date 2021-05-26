import React from 'react';
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux';
import {createStore} from 'redux';

import reducers from './reducers'


import AddTodo from './components/addtodo'
import ShowTodods from './components/showtodo';
import InProgress from './components/inprogress';
import Done from './components/done';

const App = () => {

    // const [state,setState] = useState({todoStorage: []})

    // const addTodo = (todo) => {
    //     setState({todoStorage: [...state.todoStorage, todo]})
    // }
    return (
            <>
            {/* <AddTodo save={addTodo}/>
            <ShowTodods todoList={state.todoStorage}/> */}

            <AddTodo/>
            <ShowTodods/>
            <InProgress/>
            <Done/>
            </>
    );
};


ReactDOM.render(
  <Provider store={createStore(reducers)}>
    <App />
  </Provider>,
  document.getElementById("root"));




































// import React, { useState } from "react"
// import ReactDOM from "react-dom"
// import AddTodo from "./components/addtodo"
// import ShowTodos from "./components/showtodo"

// const App = () => {

//     const initState = {
//         todoList: []
//     }

//     const addTodo = (todo) => {
//         setState({ todoList: [...state.todoList, todo] })
//     }

//     const [state, setState] = useState(initState);

//     return <>
//         <h1>Functional Component</h1>
//         <AddTodo add={addTodo} />
//         <ShowTodos list={state.todoList} />
//     </>

// }

// ReactDOM.render(<App />, document.getElementById("root"))