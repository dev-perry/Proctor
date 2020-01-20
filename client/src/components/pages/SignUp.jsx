import React, {useState} from "react";
import axios from 'axios';

function SignUp() {
  const [user, updateUser] = useState("");
  const [pass, updatePass] = useState("");
  const [cpass, updateCPass] = useState("");
  // const [redirect, openRoute] = useState(false);

  function handleChange(event) {
    if (event.target.name === "username") {
      updateUser(event.target.value);
    }
    if (event.target.name === "password") {
      updatePass(event.target.value);
    }
    if (event.target.name === "confirmpassword"){
      updateCPass(event.target.value);
    }
  }

  function handleClick(event){
    event.preventDefault();

    axios
    .post('http://localhost:9000/authentication', {
      username: user,
      password: pass
    })
    .then(res => {
      console.log('Server response:');
      console.log(res);
      if(!res.data.errmsg){
        console.log('Successful signup');
      }else{
        console.log('Username already taken');
      }
    }).catch(error => {
      console.log('Signup error: ');
      console.log(error);
    })
  }

  return (
  <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
    <form>
      <h1>Create account</h1>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input name="username" value={user} onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input name="password" value={pass} onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword2">Confirm Password</label>
        <input name="confirmpassword" value={cpass} onChange={handleChange} type="password" className="form-control" id="exampleInputPassword2"/>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleClick}>Submit</button>
    </form>
  </main>)
}

export default SignUp;
