import React from "react";
import Login from "./components/Login";
function App(){
  const [show,setShow] = React.useState(true);
  return(
    <>
      <Login/>
      <div>
        <h2>Employee Dashboard</h2>
        <button onClick={() => setShow(!show)}>Employee Info</button>
        {show && (
          <div>

            <h3>Employee Name : Vaibhav</h3> 
            <p>Employee Designation : Software Engineer</p>

          </div>
        )}
      </div>
    </>
  )
}
export default App;