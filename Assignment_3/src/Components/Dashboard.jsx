
import React from "react";

function Dashboard({ setIsLogin }) {

  return (
    <div>
      <h1>Dashboard Page</h1>

      <h2>Welcome! You have successfully logged in.</h2>

      <button onClick={() => setIsLogin(false)}>
        Logout
      </button>

    </div>
  );
}

export default Dashboard;
