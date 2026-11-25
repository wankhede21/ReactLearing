import React, { useEffect } from 'react'
import { useState } from 'react'

function App() {
  const [user, setUser] = useState([]);
  const [loading, setLoading] = useState(true); 
  const [error, setError] = useState("");
  useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/users");
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                const data = await response.json();
                console.log(data);
                setUser(data);
              } catch (error) {
                setError(error.message);
              } finally {
                setLoading(false);
              }
        };
        fetchUser();
  }, []);

  return (
    <>
      <div>
        <h1>Employee Management</h1>
        <h3>Total Employees: {user.length}</h3>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Company</th>
            </tr>
          </thead>
          <tbody>
            {user.map((employee) => (
              <tr key={employee.id}>
                <td>{employee.id}</td>
                <td>{employee.name}</td>
                <td>{employee.email}</td>
                <td>{employee.company.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
