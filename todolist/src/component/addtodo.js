import React from "react";

class AddToDo extends React.Component {
  state = {
    todoValue: "",
  };

  addToDoClick = () => {
      this.props.addTodo(this.state.todoValue)
      this.setState({todoValue:''});
  }

  render() {
    return (
      <>
        <input 
        onChange = {(e) => {this.setState({todoValue: e.target.value})}}
        value={this.state.todoValue} />
        <button onClick={this.addToDoClick}>Add ToDo</button>
      </>
    );
  }
}

export default AddToDo;
