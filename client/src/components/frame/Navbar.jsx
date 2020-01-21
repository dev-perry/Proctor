import React from "react";
import {Link} from 'react-router-dom';
import axios from 'axios';

axios.defaults.withCredentials = true;

function Navbar(props){
  function lockOut(){
    axios.post('http://localhost:4000/authenticate/logout')
    .then(res => {
      console.log(res.data);
      if(res.data.message === "Logging out"){
        props.updateUser({
          loggedIn: false,
          username: null
        });
      }
    }).catch(err =>{
      console.log("Logout error");
      console.log(err);
    })
  }

  return(
    <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
  <a className="navbar-brand col-sm-3 col-md-2 mr-0" href=" ">Proctor</a>
  <ul className="navbar-nav px-3">
    <Link to="/" className="nav-item text-nowrap" onClick={lockOut}>
      <span className="nav-link">{props.loggedIn ? "Sign out" : "Sign up"}</span>
    </Link>
  </ul>
</nav>
);
}
export default Navbar;
