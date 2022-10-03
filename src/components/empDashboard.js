import React, { useState, useContext } from "react";
import { Link, Route } from "react-router-dom";
import "./empDashboard.css";
import EmployeeList from "./../components/employeeList";
import employeeContext from "../context/employeeContext";
import AddEmployeeModal from "./addEmployeeModal";
function EmpDashboard() {
  const [confirmDeleteAllModal, setConfirmDeleteAllModal] = useState(false);
  const openConfirmDeleteAllModal = () => {
    setConfirmDeleteAllModal(true);
  };

  const closeConfirmDeleteAllModal = () => {
    setConfirmDeleteAllModal(false);
  };

  const [confirmDeleteModal, setConfirmDeleteModal] = useState(false);
  const openConfirmDeleteModal = () => {
    setConfirmDeleteModal(true);
  };

  const closeConfirmDeleteModal = () => {
    setConfirmDeleteModal(false);
  };
  const [open, setOpen] = useState(false);

  const openAddEmployeeModal = () => {
    setOpen(true);
  };
  const closeAddEmployeeModal  = () => {
    setOpen(false);
  };

  let maleCount = 0,
    femaleCount = 0,
    engineeringCount = 0,
    backofficeCount = 0;

  const { employees, updateEmployees } = useContext(employeeContext);
  const [selectedEmpIds, setSelectedEmpIds] = useState([]);
  const addEmployee = (data) => {
    updateEmployees([...employees, data]);
  };
  const onSelectEmployee = (event, id) => {
    const isChecked = selectedEmpIds.includes(id);
    if (!isChecked) {
      setSelectedEmpIds([...selectedEmpIds, id]);
    } else {
      const _selectedEmployeeIds = selectedEmpIds.filter(
        (selectedEmployeeId) => {
          return selectedEmployeeId !== id;
        }
      );
      setSelectedEmpIds(_selectedEmployeeIds);
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
    updateEmployees(newEmployees);
    closeConfirmDeleteModal();
  };

  const onDeleteAllEmployee = () => {
    updateEmployees([]);
    closeConfirmDeleteAllModal();
  };

  employees.forEach(employee => {
    if (employee.gender === "male") {
      maleCount++;
    } else femaleCount++;
  });
  employees.forEach((employee) => {
    if (employee.designation === "Engineering") {
      engineeringCount++;
    } else backofficeCount++;
  });

  return (
    
      <div className="app">
        <div className="container">
          <div className="button-div">
            <h3 className="total">Total : {employees.length}</h3>
          </div>

          <div className="button-div">
            <h3 className="male">Male : {maleCount}</h3>
          </div>

          <div className="button-div">
            <h3 className="female">Female : {femaleCount}</h3>
          </div>

          <div className="button-div">
            <h3 className="engineering">Engineering : {engineeringCount}</h3>
          </div>

          <div className="button-div">
            <h3 className="backoffice">BackOffice : {backofficeCount} </h3>
          </div>
        </div>
        <div className="adddiv">
          <div className="add">
            <button className="addbutton" onClick={openAddEmployeeModal}>
              <Link to="/addemp">Add Employee</Link>
              <Route path="/addemp">
                open && (
                  <AddEmployeeModal
                    open={open}
                    close={closeAddEmployeeModal }
                    addEmployee={addEmployee}
                  ></AddEmployeeModal>
                )
              </Route>
            </button>

            <div className="emplist">
              <div className="deldiv">
                <div>
                  <input
                    className="search"
                    type="text"
                    placeholder="Search..."
                  ></input>
                </div>
                <div>
                  <button
                    name="button"
                    disabled={!selectedEmpIds.length}
                    id="button"
                    className="delbutton"
                    onClick={openConfirmDeleteModal}
                  >
                    <h3>Delete</h3>
                  </button>
                  {confirmDeleteModal && (
                    <div className="backshadow">
                      <div className="modal">
                        <h1>Delete</h1>
                        <p>Are you sure you want to delete?</p>
                        <button className="Yes" onClick={onDeleteEmployee}>
                          Yes
                        </button>
                        <button
                          className="No"
                          onClick={closeConfirmDeleteModal}
                        >
                          No
                        </button>
                      </div>
                    </div>
                  )}
                </div>
                <div>
                  <button
                    className="delallbutton"
                    onClick={openConfirmDeleteAllModal}
                  >
                    <h3>Delete all</h3>
                  </button>

                  <>
                    {confirmDeleteAllModal && (
                      <div className="backshadow">
                        <div className="modal">
                          <h1>Delete All the employees</h1>
                          <p>Are you sure you want to delete?</p>
                          <button className="Yes" onClick={onDeleteAllEmployee}>
                            Yes
                          </button>
                          <button
                            className="No"
                            onClick={closeConfirmDeleteAllModal}
                          >
                            No
                          </button>
                        </div>
                      </div>
                    )}
                  </>
                </div>
              </div>

              
                <EmployeeList
                  employeeList={employees}
                  onSelectEmployee={onSelectEmployee}
                  selectedEmpIds={selectedEmpIds}
                />
              
            </div>
          </div>
        </div>
      </div>
  
  );
}

export default EmpDashboard;
