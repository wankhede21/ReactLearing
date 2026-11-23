import { useState } from "react";
import Header from "./components/Header";

function App(){
  const hanleClick = () => {
    alert("Button Clicked");
  }
  const [name, setName] = useState("");
  return(
    <>
      <Header />
      <h2>My Events</h2>
      <button onClick={hanleClick}>Click Me</button>
      <h2>Enter your Name </h2>
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Your Name" />
      <h3>Your Name is : {name}</h3>
      
    </>
  )
};
export default App;