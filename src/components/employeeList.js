import React, { useState } from "react";
import "./employeeList.css";
import pic from "./../asserts/pic.webp";
import editpic from "./../asserts/edit pic.png";
const EmployeeList = (props) => {
  const filterArray = [];
  const [id, setId] = useState(false);
  const handleChange = (event) => {
    if (event.target.checked) {
      filterArray.push(props.emp[event.target.value].id);
    }
    setId(true);
    console.log(filterArray);
  };

  return (
    <>
      <ul>
        {props.emp.map((emp, i) => (
          <div className="empdiv">
            <div className="checkbox">
              <input className="checkBox" type="checkbox" onChange={handleChange} value={i} />
            </div>
            <div className="image">
              <img className="profile" src={pic} alt="pic" />
            </div>
            <div className="name">
              <div>{emp.name}</div>
              <div>({emp.designation})</div>
            </div>

            <div className="edit">
              <img className="editimg" src={editpic} alt="pic" />
            </div>
          </div>
        ))}
      </ul>
    </>
  );
};
export default EmployeeList;
