import React, {useState, useEffect} from 'react';
import {Route, Switch, Redirect} from 'react-router-dom';
import axios from 'axios';
import './styles/App.css';
import Dashboard from './components/pages/Dashboard.jsx';
import Calendar from './components/pages/Calendar.jsx';
import Grades from './components/pages/Grades.jsx';
import Class from './components/pages/Class.jsx';
import Navbar from './components/frame/Navbar.jsx';
import LogIn from './components/pages/LogIn.jsx';

axios.defaults.withCredentials = true;

function App() {
  const [user, updateUser] = useState({loggedIn: false, username: null});

  useEffect(() => {
    axios.get('http://localhost:4000/authenticate/')
    .then(res => {
      if(res.data.user){
        console.log('User saved in session');
        updateUser({loggedIn: true, username: res.data.user.username});
      }else{
        console.log('Get user: no user');
        updateUser({loggedIn: false, username: null})
      }
    })
  }, [])

    function logState(user) {
      updateUser({loggedIn: user.loggedIn, username: user.username});
      console.log("log state has been called");
    }

      return (
        <React.Fragment>
          {user.loggedIn ? <Redirect to="/"/> : <Redirect to="/login"/>}
        <Navbar updateUser={logState} currentUser={user.username}/>
        <Switch>
          <Route exact path="/" component={Dashboard}/>
          <Route path="/calendar" component={Calendar}/>
          <Route path="/grades" component={Grades}/>
          <Route path="/class" component={Class}/>
          <Route path="/login" render={()=> <LogIn updateUser={logState}/>}/>
        </Switch>
      </React.Fragment>);

  }

  export default App;
