import EmployeeCard from "./components/EmployeeCard";
import Header from "./components/Header";

function App(){
  return(
    <>
      <Header />
      <h2>My First React Component</h2>
      <EmployeeCard name="Raman " role="Software Engineer" experience={5} />
      <EmployeeCard name="Vaibhav" role="Senior Software Engineer" experience={8} />
    </>
  )
};
export default App;