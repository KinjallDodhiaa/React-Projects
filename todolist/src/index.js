import React from "react";
import ReactDOM from "react-dom";

import "./css/style.css";
import AddToDo from "./component/addtodo";
import ShowTodos from "./component/showTodos";
import getToDos from "./api" //no need to write th

class App extends React.Component {
  // trick to pass value from child component to parent
  // 1- create a function/method on the parent component "mainAddTodo"
  // 2- pass this method as prop to child "addtodo"
  // 3- call the method from a child with a PARAMETER "todo"
  // 4- the parameter is going to be the value that we want to pass
  //    from child to parent

  state = {
    todoStorage: [],
  };

  componentDidMount(){
      getToDos().then(data => {
          const titles = data.map(element => element.title);
          console.log(titles);
          this.setState({todoStorage: titles})
      })
  }

  mainAddTodo = (todo) => {
    this.setState({ todoStorage: [...this.state.todoStorage, todo] });

    // const tempArr = this.state.todoStorage;
    //  tempArr.push(todo);
    //  this.setState({todoStorage: tempArr})
  };

  removeTodo = (index) => {
    // const newList = this.state.todoStorage;
    // newList.splice(index,1);
    // this.setState({todoStorage: newList});
    const tempArr = this.state.todoStorage.filter((element,idx) => index !== idx);
    this.setState({todoStorage: tempArr})
  };

  render() {
    console.log(this.state.todoStorage);

    return (
      <>
        <h1>ToDo List</h1>
        <AddToDo addTodo={this.mainAddTodo} />
        <ShowTodos
          todos={this.state.todoStorage}
          removetodos={this.removeTodo}
        />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("root"));
