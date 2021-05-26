import React from 'react';
import {connect} from 'react-redux'
import {addDoneTodos} from '../actions'
import { deleteTodoInProgress } from "../actions";
import { backToTodo } from "../actions";

const InProgress = (props) => {

    const deleteONClick = (index) => {
        props.delete(index)
    }

    const addDoneTodosOnClick = (element,index) => {
        props.addDoneTodos(element,index);
    }

    const backToTodosOnClick = (todo,index) => {
        props.backToTodo(todo,index)
    }

    

    return (
      <div>
        <h2>In Progress</h2>
        <ul>
          {props.progressList.map((element, index) => (
            <li key={index}>
              {element}
              <button
                onClick={() => {
                  addDoneTodosOnClick(element, index);
                }}
              >
                Done
              </button>
              <button
                onClick={() => {
                  deleteONClick(element,index);
                }}
              >
                Delete
              </button>
              <button onClick={()=>{backToTodosOnClick(element,index)}}>BackToTodos</button>
            </li>
          ))}
        </ul>
      </div>
    );
};

const mapStateToProps = (state) => {
    return {
      progressList: state.inprogressList
    };
}

export default connect(mapStateToProps, {
  delete: deleteTodoInProgress,
  addDoneTodos,
  backToTodo,
})(InProgress);