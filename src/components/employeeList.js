import React from "react";
import "./employeeList.css";
import pic from "./../asserts/pic.webp"
const EmployeeList = (props) => {
  console.log(props.emp);
  return (
    <>
      <ul>
        {props.emp.map((emp) => (
          <div className="empdiv">
            <div className="checkbox">
              <input type="checkbox" />
            </div>
            <div className="image"><img src={pic} alt="pic"/> </div>
            <div className="name">{emp.name}</div>
            <div className="designation">{emp.designation}</div>
            <div className="edit">edit</div>
          </div>
        ))}
      </ul>
    </>
  );
};
export default EmployeeList;
