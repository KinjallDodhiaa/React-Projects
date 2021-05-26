import React, { useState } from "react";

const AddTodo = (props) => {
  //hook useState
  //1-create initial state object
  //2-state array destructuring using useState

  const initState = {
    todoValue: "",
  };

  const [state, setState] = useState(initState);

  const addBtnClick = ()=> {
      if(state.todoValue.trim()){
      props.add(state.todoValue);
   }
      setState({ todoValue: '' })

  }
  return (
    <>
      <input 
      value={state.todoValue}
      onChange={(e)=>{setState({todoValue: e.target.value})}}
      type="text" 
      placeholder="enter to do" />
      <button onClick={addBtnClick}>AddTodo</button>
    </>
  );
};

export default AddTodo;
