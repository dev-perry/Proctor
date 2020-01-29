import React from "react";
import Sidebar from './Sidebar.jsx';
import Navbar from './Navbar.jsx'

function AppFrame(props){
  const user = props.user;
  const logState = props.logState
  return(
    <>
    <Navbar updateUser={logState} loggedIn = {user.loggedIn}/>
    <div className="container-fluid">
      <div className="row">
        {user.loggedIn && <Sidebar userID = {user.uid}/>}
        {props.children}
      </div>
    </div>
  </>
  )
}

export default AppFrame;
