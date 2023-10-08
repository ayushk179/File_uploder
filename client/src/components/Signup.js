import React, { Component, useState } from "react";
import { useNavigate } from 'react-router-dom';
import Nav from './Nav';
import { Link } from "react-router-dom";

export default function SignUp() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const handleSubmit = (e) => {
      e.preventDefault();
      fetch("https://uplodify.onrender.com/register", {
        method: "POST",
        crossDomain: true,
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
          "Access-Control-Allow-Origin": "*",
        },
        body: JSON.stringify({
          fname,
          email,
          lname,
          password,
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data, "userRegister");
          if (data.status == "ok") {
            alert("Registration Successful");
             window.localStorage.setItem("token", data.data);
             window.localStorage.setItem("loggedIn", true);
          navigate('/');
            
          } else {
            alert("Registration Unsuccessful");
            navigate('/');
          }
        });
    
  };

  return (
    <>
      <Nav/>
            <div className="container"> 
              <div className="auth-wrapper">
                <div className="auth-inner">
                  <form onSubmit={handleSubmit}>
                    <h3>Sign Up</h3>
                    <div className="mb-3">
                      <label>First name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="First name"
                        onChange={(e) => setFname(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label>Last name</label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="Last name"
                        onChange={(e) => setLname(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label>Email address</label>
                      <input
                        type="email"
                        className="form-control"
                        placeholder="Enter email"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="mb-3">
                      <label>Password</label>
                      <input
                        type="password"
                        className="form-control"
                        placeholder="Enter password"
                        onChange={(e) => setPassword(e.target.value)}
                        required
                      />
                    </div>

                    <div className="d-grid">
                      <button type="submit" className="btn btn-primary">
                        Sign Up
                      </button>
                     
                      <br></br>
                      <label>Already registered </label>
                      <br></br>
                      <Link to="/sign-in" class="btn btn-dark" >Sign In</Link>
                    </div>
                  
                  </form>
                </div>
              </div>
              </div>
              </>
  );
}
