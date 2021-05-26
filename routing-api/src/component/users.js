import React, { useEffect} from "react";
import { Link } from "react-router-dom";
import { getUsers } from "../api";

const Users = (props) => {

  useEffect(() => {
    getUsers().then((data) => {
      props.saveUsers(data);
    });
  }, []);

  return (
    <div>
      <ul>
        {props.users.map((element) => (
          <li key={element.id}>
            <Link to={`/users/${element.id}`}>{element.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Users;
