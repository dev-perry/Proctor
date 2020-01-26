import React, {useState} from 'react';
import axios from 'axios';

function LogIn(props) {
  const [user, updateUser] = useState("");
  const [pass, updatePass] = useState("");

  function handleChange(event) {
    if (event.target.name === "username") {
      updateUser(event.target.value);
    }
    if (event.target.name === "password") {
      updatePass(event.target.value);
    }
  }

  function handleSubmit(event) {
    console.log("This function has been called");
    event.preventDefault();
    axios.post('http://localhost:4000/authenticate/login', {
      username: user,
      password: pass
    }).then(res => { //this is what should happen when the server sends a response
      console.log('SERVER RESPONSE:');
      console.log(res);
      if (res.status === 200) {
        props.getUser();
      }

    }).catch(err => {
      console.log('Login error: ');
      console.log(err);
    })

  }

  return (
    <main role="main" className="col-md-9 ml-sm-auto col-lg-10 px-4">
    <form>
      <h1>Login</h1>
      <div className="form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input name="username" value={user} onChange={handleChange} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div className="form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input name="password" value={pass} onChange={handleChange} type="password" className="form-control" id="exampleInputPassword1"/>
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleSubmit}>Log in</button>
    </form>
  </main>
)
}

export default LogIn;
