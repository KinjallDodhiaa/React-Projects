import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getTodos } from '../api';

const Todos = () => {

    const [state,setState] = useState({todos:[]});

    const {id} = useParams();

    useEffect(()=>{
        getTodos(id).then(data => {
            setState({todos:data})
        })
    },[])

    return (
      <div>
        {/* <ul>
          {state.todos
            .filter((todo) => todo.completed)
            .map((element) => (
              <li key={element.id}>
                <h3>{element.title}</h3>
                <p>{element.completed ? "Done" : "Not yet"}</p>
              </li>
            ))}
          {state.todos
            .filter((todo) => !todo.completed)
            .map((element) => (
              <li key={element.id}>
                <h3>{element.title}</h3>
                <p>{element.completed ? "Done" : "Not yet"}</p>
              </li>
            ))}
        </ul> */}

        <ul>
          {state.todos.map((todo) =>
            todo.completed ? (
              <li key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.completed ? "Done" : "Not yet"}</p>
              </li>
            ) : null
          )}
          {state.todos.map((todo) =>
            !todo.completed ? (
              <li key={todo.id}>
                <h3>{todo.title}</h3>
                <p>{todo.completed ? "Done" : "Not yet"}</p>
              </li>
            ) : null
          )}
        </ul>
      </div>
    );
};

export default Todos;