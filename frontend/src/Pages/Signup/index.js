import React from "react";
import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [submit, setSubmit] = useState(null);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const signup = async (e) => {
    e.preventDefault(); // stops the page from refreshing automatically.
    // make request,
    const response = await axios.post(`http://localhost:4000/user/signup`, {
      name: name,
      email: email,
      password: password,
    });
    console.log("response", response);
    setSubmit(response.data);
    // navigate the user to /login
    if (submit !== null) {
      navigate("/login");
    }
  };

  // you need a submit!
  // onSubmit on the form

  // when this happens => make a post request to /signup with all the params

  return (
    <form onSubmit={signup}>
      <h1>Register</h1>
      <h4>Create an account</h4>

      <h5>Name</h5>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      ></input>

      <h5>Email Address</h5>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>

      <h5>Password</h5>
      <input
        type="text"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      ></input>
      <br />

      <button type="submit">Register</button>
      <button>
        <Link to="/login">Click here to log in</Link>
      </button>
    </form>
  );
};

export default Signup;
