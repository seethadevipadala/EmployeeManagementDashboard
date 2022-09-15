import React, { useState } from "react";
import "./addEmployeeModal.css";
const AddEmployeeModal = (props) => {
  const [formData, setFormData] = useState({
    id: "",
    name: "",
    gender: "",
    phone: "",
    joiningdate: "",
    designation: "",
  });
  const handleChangeselect = (e) => {
    // console.log(e.target.value);
    formData.designation = e.target.value;
  };
  const handleChangeradio = (e) => {
    formData.gender = e.target.defaultValue;
  };
  const handleChange = (event) => {
    // console.log(event.target.name, ":", event.target.value);
    const name = event.target.name;
    const value = event.target.value;

    setFormData((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  const submitHandle = (event) => {
    event.preventDefault();
    console.log(props.open);
    props.getEmployeeData(formData);
    props.close();
    return formData;
  };
 
  return (
    <>
      {props.open && (
        <div className="backshadow">
          <div className="modal">
            <div className="close-button">
              <button onClick={props.close}>×</button>
            </div>
            <form onSubmit={submitHandle}>
              <div className="form-fields">
                <h2>Add Employee</h2>
                <div className="firstrow">
                  <div className="fullname">
                    <label>Name:</label>
                    <br />
                    <input type="text" onChange={handleChange} name="name" />
                  </div>
                  <div className="gender">
                    <label>Gender:</label>
                    <br />
                    <input
                      type="radio"
                      onChange={handleChangeradio}
                      name="gender"
                      value="male"
                    />
                    <label>Male</label>
                    <input
                      type="radio"
                      onChange={handleChangeradio}
                      name="gender"
                      value="famale"
                    />
                    <label>Female</label>
                  </div>
                  <div className="fathername">
                    <label>Father/Gaurdian:</label>
                    <br />
                    <input
                      type="text"
                      onChange={handleChange}
                      name="fathername"
                    />
                  </div>
                </div>

                <div className="secondrow">
                  <div className="phone">
                    <label>Pnone number:</label>
                    <br />
                    <input type="phone" onChange={handleChange} name="phone" />
                  </div>
                  <div className="email">
                    <label>Email :</label>
                    <br />
                    <input type="text" onChange={handleChange} name="email" />
                  </div>

                  <div className="joiningdate">
                    <label>Designation:</label>
                    <br />
                    <select name="designation" onChange={handleChangeselect}>
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
                      onChange={handleChange}
                      name="joiningdate"
                    />
                  </div>
                  <div className="id">
                    <label>Id:</label>
                    <br />
                    <input type="test" onChange={handleChange} name="id" />
                  </div>
                </div>
                <button className="button" type="submit">
                  Add
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
export default AddEmployeeModal;
