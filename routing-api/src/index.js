import React, { useState } from 'react';
import ReactDOM from 'react-dom'
import {BrowserRouter as Router, Route, Link, Switch} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'; 
import Users from './component/users';
import UserDetails from './component/userDetails';

const App = () => {

    const initState = {
        users:[]
    }

    const [state, setState] = useState(initState);

    const saveUsers = (data)=>{
        setState({users:data})
    }



    return (

        <Router>


            <Link to='/users'>Users</Link>
           
            <Switch>
                <Route exact path='/users'>
                  <Users saveUsers={saveUsers} users={state.users}/>  
                </Route>
                <Route path="/users/:id">      
                <UserDetails user={state.users}/>
                </Route>
            </Switch>

        </Router>
    );
};

export default App;

ReactDOM.render(<App/>,document.getElementById('root'))