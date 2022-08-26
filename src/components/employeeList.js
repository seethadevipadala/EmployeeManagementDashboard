import React, { useState } from "react";
import "./employeeList.css";
import pic from "./../asserts/pic.webp";
import editpic from "./../asserts/edit pic.png";
const EmployeeList = ({employeeList,onSelectEmployee}) => {
  const handleChange = (event, employeeId) => {
    onSelectEmployee(event, employeeId);
  };

  return (
    <>
      <ul>
        {employeeList.map((_emp, i) => (
          <>
            <div className="empdiv">
              <div className="checkbox">
                <input
                  className="checkBox"
                  type="checkbox"
                  onClick={(event) => {
                    handleChange(event, _emp.id);
                  }}
                  value={i}
                />
              </div>
              <div className="image">
                <img className="profile" src={pic} alt="pic" />
              </div>
              <div className="name">
                <div>{_emp.name}</div>
                <div>({_emp.designation})</div>
              </div>

              <div className="edit">
                <img className="editimg" src={editpic} alt="pic" />
              </div>
            </div>
          </>
        ))}
      </ul>
    </>
  );
};
export default EmployeeList;
