import React, { useRef, useState } from 'react';
import {connect} from 'react-redux';

import {addTodo} from '../actions';

const AddTodo = (props) => {


  const inputRef = useRef();

      const addTodoOnClick = () => {
        props.save(inputRef.current.value);
        inputRef.current.value=''
      };

    return (


        <div>
            <input
            ref = {inputRef}
            type ='text'
            />
            <button onClick={addTodoOnClick}>AddTodos</button>
        </div>
    );
};



export default connect(null, {save:addTodo})(AddTodo);































// import React, { useRef} from "react";

// const AddTodo = (props) => {

//     const inputRef = useRef();

//     const addBtnClick = () => {
//         props.add(inputRef.current.value)
//     }

//     return (
//         <>
//             <input
//                 ref={inputRef}
//                 type="text"
//                 placeholder="enter to do" />
//             <button onClick={addBtnClick}>AddTodo</button>
//         </>
//     );
// };

// export default AddTodo;
