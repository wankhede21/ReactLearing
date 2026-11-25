
function EmployeeRow({ employee, deleteEmployee }) {

  return (
    <tr>

      <td>{employee.id}</td>

      <td>
        {employee.firstName} {employee.lastName}
      </td>

      <td>{employee.email}</td>

      <td>
        {employee.company?.department || "General"}
      </td>

      <td>
        <button
          className="delete-btn"
          onClick={() => deleteEmployee(employee.id)}
        >
          Delete
        </button>
      </td>

    </tr>
  );
}

export default EmployeeRow;
