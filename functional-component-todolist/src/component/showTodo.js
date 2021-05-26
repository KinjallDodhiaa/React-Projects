import React from "react";

const ShowTodos = (props) => {
  return (
    <ul>
      {props.list.map((element, index) => (
        <li key={index}> {element}</li>
      ))}
    </ul>
  );
};

export default ShowTodos;
