import React from "react";
import "./employeeList.css";
import pic from "./../asserts/pic.webp";
import editpic from "./../asserts/edit pic.png"
const EmployeeList = (props) => {
    
  console.log(props.emp);
  return (
    <>
      <ul>
        {props.emp.map((emp,i) => (
          <div className="empdiv">
            <div className="checkbox">
              <input type="checkbox"/>
            </div>
            <div className="image"><img src={pic} alt="pic"/> </div>
            <div className="name">
              <div >
              {emp.name}
              </div>
              <div >
              ({emp.designation})
              </div>
            </div>
            {/* <div className="designation">{emp.designation}</div> */}
            <div className="edit"><img src={editpic} alt="pic"/></div>
          </div>
        ))}
      </ul>
    </>
  );
};
export default EmployeeList;
