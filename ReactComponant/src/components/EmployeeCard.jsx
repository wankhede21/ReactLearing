function EmployeeCard(props) {
  return (
    <>
        <h2>{props.name}</h2>
        <p>Role: {props.role} </p>
        <p>Experience: {props.experience} years</p>
    </>
  )

};
export default EmployeeCard;
