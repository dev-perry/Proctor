import React, { useEffect, useState} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import './styles/App.css';
import Dashboard from './components/pages/Dashboard.jsx';
import Calendar from './components/pages/Calendar.jsx';
import Grades from './components/pages/Grades.jsx';
import Class from './components/pages/Class.jsx';
import Navbar from './components/frame/Navbar.jsx';
import LogIn from './components/pages/LogIn.jsx';
import Sidebar from './components/frame/Sidebar.jsx';


axios.defaults.withCredentials = true;


function App() {
  const [user, updateUser] = useState({loggedIn: false, username: null, uid: null});
  useEffect(() => { getUser()}, []);

function getUser(){
  axios.get('http://localhost:4000/authenticate/')
      .then(res => {
        if(res.data.user){
          // console.log(res.data.user);
          updateUser({loggedIn: true, username: res.data.user.username, uid: res.data.user._id});
        }else{
          console.log('Get user: no user');
          updateUser({loggedIn: false, username: null, uid: null})
        }
      })
}

    function logState(user) {
      updateUser({loggedIn: user.loggedIn, username: user.username, uid:user.uid});
      console.log("log state has been called");
    }

      return (
        <React.Fragment>
          {user.loggedIn ? <Redirect to="/"/> : <Redirect to="/login"/>}
        <Navbar updateUser={logState} loggedIn={user.loggedIn}/>
        <div className="container-fluid">
          <div className="row">
        {user.loggedIn && <Sidebar userID = {user.uid}/>}
        <Switch>
          <Route exact path="/"><Dashboard/></Route>
          <Route path="/calendar"><Calendar/></Route>
          <Route path="/grades"><Grades/></Route>
          <Route path="/class/:id" render={(props) => <Class {...props} userID={user.uid} />}/>
          <Route path="/login"><LogIn getUser={getUser}/></Route>
        </Switch>
      </div>
    </div>
      </React.Fragment>);

  }

  export default App;
