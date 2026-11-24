
import React, { useState } from "react";

import Login from "./Components/Login";
import Dashboard from "./Components/Dashboard";

function App() {

  const [isLogin, setIsLogin] = useState(false);

  return (
    <div>

      {isLogin ? (
        <Dashboard setIsLogin={setIsLogin} />
      ) : (
        <Login setIsLogin={setIsLogin} />
      )}

    </div>
  );
}

export default App;
