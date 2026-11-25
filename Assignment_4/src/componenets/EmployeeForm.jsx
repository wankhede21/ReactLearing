
function EmployeeForm({
  name,
  setName,
  email,
  setEmail,
  department,
  setDepartment,
  addEmployee
}) {

  return (
    <div >

      <h2>Add New Employee</h2>

      <form onSubmit={addEmployee}>

        <input
          type="text"
          placeholder="Employee Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          type="email"
          placeholder="Employee Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="text"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <button type="submit">
          Add Employee
        </button>

      </form>

    </div>
  );
}

export default EmployeeForm;
