import React, { useEffect } from "react";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginPage = (props) => {
  const [token, setToken] = useState(null);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault(); // stops the page from refreshing automatically.
    // make request,
    const response = await axios.post(`http://localhost:4000/user/login`, {
      email: email,
      password: password,
    });
    console.log("response", response);
    props.setUser(response.data);
    setToken(response.data.token);
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={login}>
      <h1>Login</h1>

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

      <button type="submit">Login</button>
    </form>
  );
};

export default LoginPage;
