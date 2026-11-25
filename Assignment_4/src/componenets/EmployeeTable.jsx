
import EmployeeRow from "./EmployeeRow";

function EmployeeTable({ employees, deleteEmployee }) {

  return (
    <div className="employee-box">

      <h2>Employee List</h2>

      <table>

        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Department</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>

          {employees.map((employee) => (

            <EmployeeRow
              key={employee.id}
              employee={employee}
              deleteEmployee={deleteEmployee}
            />

          ))}

          {employees.length === 0 && (
            <tr>
              <td colSpan="5">No employees found</td>
            </tr>
          )}

        </tbody>

      </table>

    </div>
  );
}

export default EmployeeTable;
