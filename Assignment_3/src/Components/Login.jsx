
import React, { useState } from "react";

function Login({ setIsLogin }) {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {

    if (email === "" || password === "") {
      alert("Please enter email and password");
      setIsLogin(false);
    } else if (email==="vaibhav" && password==="123") {
      setIsLogin(true);
    } else {
      alert("Invalid email or password");
      setIsLogin(false);
    }

  };

  return (
    <div>
      <h1>Login Page</h1>

      <input
        type="email"
        placeholder="Enter Email"
        onChange={(e) => setEmail(e.target.value)}
      />

      <br /><br />

      <input
        type="password"
        placeholder="Enter Password"
        onChange={(e) => setPassword(e.target.value)}
      />

      <br /><br />

      <button onClick={handleLogin}>
        Login
      </button>

    </div>
  );
}

export default Login;
