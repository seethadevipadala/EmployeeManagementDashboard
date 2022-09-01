import React, { useState } from "react";
import "./addEmployeeModal.css";
const AddEmployeeModal = (props) => {
  const [formData, setFormData] = useState({
    id:'',
    name: "",
    phone: "",
    address:"",
    joiningdate: "",
    designation: "",
    // fathername: "",
    // email: ""
   
  });

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
  // console.log(formData);

  const submitHandle = (event) => {
    event.preventDefault();
    // console.log(formData);
    props.getEmployeeData(formData);
    props.close();
    return formData;
  };

  return (
    <>
      {props.open && (
        <div className="backshadow">
          <div className="modal">
            <div className="close-button" onClick={props.close}>
              <button onClick={props.close}>×</button>
            </div>
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
                      name="fathername"
                    />
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
                  <div className="phone">
                    <label>Pnone number:</label>
                    <br />
                    <input type="phone" onChange={handleChange} name="phone" />
                  </div>
                </div>

                <div className="secondrow">
                  <div className="email">
                    <label>Email :</label>
                    <br />
                    <input type="text" onChange={handleChange} name="email" />
                  </div>
                  
                  <div className="joiningdate">
                    <label>Designation:</label>
                    <br />
                    <input
                      type="test"
                      onChange={handleChange}
                      name="designation"
                    />
                  </div>
                  <div className="id">
                    <label>Id:</label>
                    <br />
                    <input
                      type="test"
                      onChange={handleChange}
                      name="id"
                    />
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
                  <div className="address">
                    <label>Address:</label>
                    <br />
                    <input
                      type="test"
                      onChange={handleChange}
                      name="address"
                    />
                  </div>
                </div>
                <button className="button" type="submit" >
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
