import React from 'react';
import { Link, useParams, useRouteMatch, Switch, Route } from 'react-router-dom';
import Albums from './albums';
import Posts from './posts';
import Todos from './todos';

const UserDetails = (props) => {

    const { id } = useParams();
    console.log(id);

    const foundUser = props.user.find((element) => element.id == id);

    const {path,url} = useRouteMatch();
    console.log(url);



    return (
      <>
        {foundUser ? (
          <>
            <h3>Userdetails:</h3>
            <ul>
              <li>
                <strong>Id: </strong> {foundUser.id}
              </li>
              <li>
                <strong>Name: </strong> {foundUser.name}
              </li>
              <li>
                <strong>Username: </strong>
                {foundUser.username}
              </li>
              <li>
                <strong>Email: </strong>
                {foundUser.email}
              </li>
              <li>
                <strong>Phone: </strong>
                {foundUser.phone}
              </li>
              <li>
                <strong>Website: </strong>
                {foundUser.website}
              </li>
            </ul>

            <ul>
              <li>
                <Link to={`${url}/posts`}>Posts</Link>
              </li>
              <li>
                <Link to={`${url}/todos`}>Todos</Link>
              </li>
              <li>
                <Link to={`${url}/albums`}>Album</Link>
              </li>
            </ul>

            <Switch>
              <Route path={`${path}/posts`}><Posts/></Route>
              <Route path={`${path}/todos`}><Todos/></Route>
              <Route path={`${path}/albums`}><Albums/></Route>
            </Switch>
          </>
        ) : null}
      </>
    );
};

export default UserDetails;