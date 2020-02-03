import React, { useEffect, useState} from 'react';
import {Route, Redirect, Switch} from 'react-router-dom';
import axios from 'axios';
import './styles/App.css';
import AppFrame from './components/frame/AppFrame.jsx';
import Dashboard from './components/pages/Dashboard.jsx';
import Calendar from './components/pages/Calendar.jsx';
import Grades from './components/pages/Grades.jsx';
import Class from './components/pages/Class.jsx';
import LogIn from './components/pages/LogIn.jsx';
import Assignment from './components/pages/Assignment.jsx';


axios.defaults.withCredentials = true;


function App() {
  const [user, updateUser] = useState({loggedIn: false, username: null, uid: null});
  useEffect(() => { getUser()}, []);

function getUser(){
  axios.get('http://localhost:4000/authenticate/')
      .then(res => {
        if(res.data.user){
          updateUser({loggedIn: true, username: res.data.user.username, uid: res.data.user._id});
        }else{
          console.log('Get user: no user');
          updateUser({loggedIn: false, username: null, uid: null});
        }
      })
}

    function logState(user) {
      updateUser({loggedIn: user.loggedIn, username: user.username, uid:user.uid});
      console.log("log state has been called");
    }


      return (
        <Switch>
          <AppFrame user={user} logState={logState}>
            {user.loggedIn ? <Redirect to="/"/> : <Redirect to="/login"/>}
            <Route exact path="/calendar"><Calendar userID={user.uid}/></Route>
            <Route exact path="/grades"><Grades/></Route>
            <Route exact path="/class/:id" render={(props) => <Class {...props} userID={user.uid} />}/>
            <Route exact path="/class/:id/assignment/:aid" render={(props) => <Assignment {...props}/>}/>
            <Route exact path="/login"><LogIn getUser={getUser}/></Route>
            <Route exact path="/"><Dashboard userID={user.uid}/></Route>
            </AppFrame>
        </Switch>
        );

  }

  export default App;
