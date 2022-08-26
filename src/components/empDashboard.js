import React, { useState, useContext } from "react";

import "./empDashboard.css";
import EmployeeList from "./../components/employeeList";
import employeeContext from "./../context/empContext";

import { Modal, Box } from "@mui/material";
function EmpDashboard() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  const [open, setOpen] = useState(false);
  const onOpen = () => {
    setOpen(true);
  };
  const onClose = () => setOpen(false);
  const employees = useContext(employeeContext);
  const [employeeList, setEmployeeList] = useState(employees);

  const [selectedEmpIds, setSelectedEmpIds] = useState([]);
  let checkBoxTick = [];

  const onSelectEmployee = (event, id) => {
    if (event.target.checked) {
      selectedEmpIds.push(id);

      checkBoxTick.push(event);
    }
  };

  const onDeleteEmployee = () => {
    const newEmployees = employees.filter((employee) => {
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
            <button className="addbutton" onClick={onOpen}>
              <h3>Add Employee</h3>
            </button>
            <Modal
              keepMounted
              open={open}
              onClose={onClose}
              aria-labelledby="keep-mounted-modal-title"
              aria-describedby="keep-mounted-modal-description"
            >
              <Box sx={style}></Box>
            </Modal>
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
