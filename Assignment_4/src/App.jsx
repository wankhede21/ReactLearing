
import { useState, useEffect } from "react";

import Header from "./componenets/Header";
import EmployeeForm from "./componenets/EmployeeForm";
import SearchBar from "./componenets/SearchBar";
import EmployeeTable from "./componenets/EmployeeTable";

import "./App.css";

function App() {

  // Employee state
  const [employees, setEmployees] = useState([]);

  // Loading state
  const [loading, setLoading] = useState(true);

  // Error state
  const [error, setError] = useState("");

  // Form states
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");

  // Search state
  const [search, setSearch] = useState("");


  // API CALL USING USEEFFECT
  useEffect(() => {

    fetch("https://dummyjson.com/users")

      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch employees");
        }

        return response.json();
      })

      .then((data) => {
        setEmployees(data.users);
        setLoading(false);
      })

      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

  }, []);


  // ADD EMPLOYEE
  const addEmployee = (e) => {

    e.preventDefault();

    if (!name.trim() || !email.trim() || !department.trim()) {
      alert("Please fill all fields");
      return;
    }

    const newEmployee = {
      id: Date.now(),
      firstName: name,
      lastName: "",
      email: email,
      company: {
        department: department
      }
    };

    setEmployees((prev) => [...prev, newEmployee]);

    setName("");
    setEmail("");
    setDepartment("");
  };


  // DELETE EMPLOYEE
  const deleteEmployee = (id) => {

    const updatedEmployees = employees.filter(
      (employee) => employee.id !== id
    );

    setEmployees(updatedEmployees);
  };


  // SEARCH EMPLOYEE
  const filteredEmployees = employees.filter((employee) => {

    const fullName =
      `${employee.firstName} ${employee.lastName}`.toLowerCase();

    return fullName.includes(search.toLowerCase());

  });


  return (

    <div className="container">

      <Header />

      <EmployeeForm
        name={name}
        setName={setName}
        email={email}
        setEmail={setEmail}
        department={department}
        setDepartment={setDepartment}
        addEmployee={addEmployee}
      />

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      {loading && <p>Loading employees...</p>}

      {error && <p className="error">{error}</p>}

      {!loading && !error && (

        <EmployeeTable
          employees={filteredEmployees}
          deleteEmployee={deleteEmployee}
        />

      )}

    </div>
  );
}

export default App;
