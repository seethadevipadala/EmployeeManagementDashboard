import React, { useState } from "react";
import "./employeeList.css";
import pic from "../assets/pic.webp";
import editpic from "../assets/edit_pic.png";
import { Link } from "react-router-dom";

const EmployeeList = ({
  employeeList,
  onSelectEmployee,
  selectedEmpIds,
}) => {
  const handleChange = (event, employeeId) => {
    onSelectEmployee(event, employeeId);
  };
  return (
    <ul>
      {employeeList.length > 0 ? (
        employeeList.map((_emp, i) => (
          <div className="empdiv">
            <div className="checkbox">
              <input
                className="checkBox"
                type="checkbox"
                onClick={(event) => {
                  handleChange(event, _emp.id);
                }}
                value={i}
                checked={selectedEmpIds.includes(_emp.id)}
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
              <Link
                to={{
                  pathname: `/editemp/${_emp.id}`,
                  state: { id: _emp.id },
                }}
              >
                <img className="editimg" src={editpic} alt="pic" />
              </Link>
            </div>
          </div>
        ))
      ) : (
        <h3 className="nodata"> No Employee data</h3>
      )}
    </ul>
  );
};
export default EmployeeList;
