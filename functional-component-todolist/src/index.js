import React, {useState} from "react"
import ReactDOM from "react-dom"
import AddTodo from "./component/AddTodo"
import ShowTodos from "./component/showTodo"

const App = () => {
   
const initState = {
    todoList: ['shopping','cooking']
}

const addTodo =(todo)=>{
    setState({todoList: [...state.todoList, todo]})
}

const [state, setState] = useState(initState);

    return <>
    <h1>Functional Component</h1>
    <AddTodo add={addTodo}/>
    <ShowTodos list={state.todoList}/>
    </>

}

ReactDOM.render(<App/>, document.getElementById("root"))