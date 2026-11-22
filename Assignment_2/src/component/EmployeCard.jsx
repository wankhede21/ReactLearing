function EmployeCard(props) {
  return (
    <>
        <h2>{props.name}</h2>
        <p>Email: {props.email} </p>
        <p>Department: {props.department} </p>
        <p>Designation: {props.designation}</p>
    </>
  )

};
export default EmployeCard;
