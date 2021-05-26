import React from 'react';
import {connect} from 'react-redux';

import {deleteTodo,addInProgress} from '../actions'

const ShowTodods = (props) => {

   const deleteBtnClick = (index) => {
      props.delete(index);
   } 

   const addInProgressBtnClick = (todo,index) => {
    props.addInProgress(todo,index);
    //props.delete(index);
   }


    return (
      <div>
        <h2>Todos</h2>

        {props.todolist.map((todo, index) => (
          <ul key={index}>
            <li>
              {todo}
              <button
                onClick={() => {
                  deleteBtnClick(index);
                }}
              >
                Delete
              </button>
              <button onClick={()=>{addInProgressBtnClick(todo, index)}}>In Progress</button>
            </li>
          </ul>
        ))}
      </div>
    );
};

const mapStateToProps = (state) => {
  return({
    todolist: state.todos

  })
}

export default connect(mapStateToProps, {delete: deleteTodo,addInProgress})(ShowTodods);


































// import React from "react";

// const ShowTodos = (props) => {
//     return (
//         <ul>
//             {props.list.map((todo, index) => (
//                 <li key={index}> {todo}</li>
//             ))}
//         </ul>
//     );
// };

// export default ShowTodos;
