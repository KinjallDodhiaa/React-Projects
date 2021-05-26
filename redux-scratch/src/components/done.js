import React from 'react';
import {connect} from 'react-redux';
import { deleteTodoInDone, backToInProgress } from "../actions";

const Done = (props) => {

    const deleteOnClick = (index) => {
        props.delete(index)
    }

    const backToInProgress = (element,index) => {
        props.backToInProgress(element,index)
    }
    return (
        <div>
            <h2>Done</h2>
            <ul>
                {props.doneList.map((element,index)=>(
                    <li key={index}>{element}
                    <button onClick={()=>{deleteOnClick(index)}}>Delete</button>
                    <button onClick={()=>{backToInProgress(element,index)}}>BackToInProgress</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

const mapStateToProps =(state)=>{
    return {
      doneList: state.doneTodos
    };
}

export default connect(mapStateToProps, {
  delete: deleteTodoInDone,
  backToInProgress,
})(Done);