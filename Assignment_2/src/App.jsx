import EmployeCard from "./component/EmployeCard";
function App() {
  

  return (
    <>
      <h1>Hello, React!</h1>
      <p>This is a simple React component. with Props </p>
      <EmployeCard name="Raman" email="raman.@gmail.com" 
      department="IT" designation="Software Engineer" />
      <EmployeCard name="Vaibhav" email="vaibhav.@gmail.com" 
      department="IT" designation="Senior Software Engineer" />
    
    </>
  );
}

export default App;
