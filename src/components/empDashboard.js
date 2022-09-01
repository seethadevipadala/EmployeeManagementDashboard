import React, { useState, useContext } from "react";

import "./empDashboard.css";
import EmployeeList from "./../components/employeeList";
import employeeContext from "./../context/empContext";
import AddEmployeeModal from "./addEmployeeModal";
import AddEmployeeForm from "./addEmployeeForm";
function EmpDashboard(props) {
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen("opened");
    setOpen(true);
  };
  const closeModal = () => {
    // console.log("closed");
    setOpen(false);
  };

 
  const employees = useContext(employeeContext);
  const [employeeList, setEmployeeList] = useState(employees);
  const [selectedEmpIds, setSelectedEmpIds] = useState([]);
  const [updateEmployee,setUpdateEmployee]=useState()

  let checkBoxTick = [];
  const getEmployeeData = (data) => {
    // console.log(data);
    // console.log([...employees, data]);
    setEmployeeList([...employeeList, data]);


  };
  const onSelectEmployee = (event, id) => {
    if (event.target.checked) {
      selectedEmpIds.push(id);
      checkBoxTick.push(event);
    }
  };

  const onDeleteEmployee = () => {
    console.log("onDeleteEmployee", employeeList)
    const newEmployees = employeeList.filter((employee) => {
      return !selectedEmpIds.some((selectedId) => {
        if (selectedId === employee.id) {
          return employee;
        }
      });
    });
    setEmployeeList(newEmployees);
    
    for (let tick of checkBoxTick) {
      tick.target.checked = false;
    }
    props.updateEmployee(newEmployees);
  };

  return (
    <>
      <div className="app">
        <div className="container">
          <div className="button-div">
            <h3 className="total">Total:100</h3>
          </div>

          <div className="button-div">
            <h3 className="male">Male:30</h3>
          </div>

          <div className="button-div">
            <h3 className="female">Female:70</h3>
          </div>

          <div className="button-div">
            <h3 className="engineering">Engineering:35</h3>
          </div>

          <div className="button-div">
            <h3 className="backoffice">BackOffice:65</h3>
          </div>
        </div>
        <div className="adddiv">
          <div className="add">
            <button className="addbutton" onClick={openModal}>
              <h3>Add Employee</h3>
            </button>

            {
              <AddEmployeeModal
                open={open}
                close={closeModal}
                getEmployeeData={getEmployeeData}
              ></AddEmployeeModal>
            }
            <div className="emplist">
              <div className="deldiv">
                <div>
                  <input
                    className="search"
                    type="text"
                    placeholder="Search.."
                  ></input>
                </div>
                <div>
                  <button className="delbutton" onClick={onDeleteEmployee}>
                    <h3>Delete</h3>
                  </button>
                </div>
                <div>
                  <button className="delallbutton">
                    <h3>Delete all</h3>
                  </button>
                </div>
              </div>

              <EmployeeList
                employeeList={employeeList}
                onSelectEmployee={onSelectEmployee}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmpDashboard;
