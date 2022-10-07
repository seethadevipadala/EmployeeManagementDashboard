import React, { useState, useContext } from "react";
import { useHistory } from "react-router-dom";
import { useLocation } from "react-router-dom";
import employeeContext from "../context/employeeContext";
const EditEmployee = () => {
  const location = useLocation();
  const history = useHistory();
  const id = location.state?.id;
  const { employees, updateEmployees } = useContext(employeeContext);
  const [editEmployeeData, setEditEmployeeData] = useState(employees[id]);
  let [formData, setFormData] = useState({
    id: employees[id].id,
    name: employees[id].name,
    gender: employees[id].gender,
    phoneNumber: employees[id].phoneNumber,
    joiningDate: employees[id].joiningDate,
    designation: employees[id].designation,
    email: employees[id].email,
  });

  const handleChangeDepartment = (e) => {
    setEditEmployeeData((prev) => {
      return {
        ...prev,
        designation: e.target.value,
      };
    });
    setFormData((prev) => {
      return {
        ...prev,
        designation: e.target.value,
      };
    });
  };
  const handleChangeGender = (e) => {
    setEditEmployeeData((prev) => {
      return {
        ...prev,
        gender: e.target.value,
      };
    });
    setFormData((prev) => {
      return {
        ...prev,
        gender: e.target.value,
      };
    });
  };
  const handleChangeJoiningDate = (e) => {
    setEditEmployeeData((prev) => {
      return {
        ...prev,
        joiningDate: e.target.value,
      };
    });
    setFormData((prev) => {
      return {
        ...prev,
        joiningDate: e.target.value,
      };
    });
  };
  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    console.log(value);
    setEditEmployeeData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  const submitHandle = (event) => {
    event.preventDefault();
    if (id == editEmployeeData.id) {
      employees[id] = formData;
    }
    history.push("/");
  };
  return (
    <div className="backshadoweditmodal">
      <div className="modal">
        <form onSubmit={submitHandle}>
          <div className="form-fields">
            <h2>Add Employee</h2>
            <div className="firstrow">
              <div className="fullname">
                <label>Name:</label>
                <br />
                <input
                  type="text"
                  onChange={handleChange}
                  name="name"
                  value={`${editEmployeeData.name}`}
                />
              </div>
              <div className="gender">
                <label>Gender:</label>
                <br />
                <input
                  type="radio"
                  onChange={handleChangeGender}
                  name="gender"
                  value="male"
                />
                <label>Male</label>
                <input
                  type="radio"
                  onChange={handleChangeGender}
                  name="gender"
                  value="famale"
                />
                <label>Female</label>
              </div>
            </div>

            <div className="secondrow">
              <div className="phone">
                <label>Pnone number:</label>
                <br />
                <input
                  type="phone"
                  onChange={handleChange}
                  name="phoneNumber"
                  value={`${editEmployeeData.phoneNumber}`}
                />
              </div>
              <div className="email">
                <label>Email :</label>
                <br />
                <input
                  type="text"
                  onChange={handleChange}
                  name="email"
                  value={`${editEmployeeData.email}`}
                />
              </div>

              <div className="joiningdate">
                <label>Designation:</label>
                <br />
                <select name="designation" onChange={handleChangeDepartment}>
                  <option value="Engineering" name="designation">
                    Engnnering
                  </option>
                  <option value="Backoffice" name="designation">
                    Back office
                  </option>
                </select>
              </div>
            </div>
            <div className="thirdrow">
              <div className="joiningdate">
                <label>Joining date:</label>
                <br />
                <input
                  type="date"
                  onChange={handleChangeJoiningDate}
                  name="joiningDate"
                  value={`${editEmployeeData.joiningDate}`}
                />
              </div>
              <div className="id">
                <label>Id:</label>
                <br />
                <input
                  type="test"
                  onChange={handleChange}
                  name="id"
                  value={`${id}`}
                />
              </div>
            </div>
            <button className="button" type="submit">
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
