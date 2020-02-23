import React, { useEffect, useState} from 'react';
import {Route} from 'react-router-dom';
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
  useEffect(() => {
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
    getUser();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [user.loggedIn]);

    function logState(user) {
      updateUser({loggedIn: user.loggedIn, username: user.username, uid:user.uid});
      console.log("log state has been called");
    }

    const PrivateRoute = ({ component: Component, userID, ...rest }) => (
      <Route {...rest} render={(props) => (
        user.loggedIn === true ? <Component userID={userID} {...props}/> : <LogIn {...props} updateUser={updateUser} loggedIn={user.loggedIn}/>)} />
    )

      return (
        <>
          <AppFrame user={user} logState={logState}>
            <PrivateRoute exact path="/" component={Dashboard} userID={user.uid}/>
            <Route exact path="/login" render={(props) => <LogIn {...props} updateUser={updateUser} loggedIn={user.loggedIn}/>}/>
            <PrivateRoute exact path="/calendar" component={Calendar} userID={user.uid}/>
            <PrivateRoute exact path="/grades" component={Grades} userID={user.uid}/>
            <PrivateRoute exact path="/class/:id" component={Class} userID={user.uid}/>
            <PrivateRoute exact path="/class/:id/assignment/:aid" component={Assignment} userID={user.uid}/>
            </AppFrame>
       </>
        );

  }

  export default App;
