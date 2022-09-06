import React, { useState, useContext } from "react";

import "./empDashboard.css";
import EmployeeList from "./../components/employeeList";
import employeeContext from "./../context/empContext";
import AddEmployeeModal from "./addEmployeeModal";
function EmpDashboard(props) {
  const [confirmdeleteAllModal, setConfirmDeleteAllModal] = useState(false);
  const openConfirmDeleteAllModal = () => {
    setConfirmDeleteAllModal(true);
  };

  const closeConfirmDeleteAllModal = () => {
    setConfirmDeleteAllModal(false);
  };

  const [confirmdeleteModal, setConfirmDeleteModal] = useState(false);
  const openConfirmDeleteModal = () => {
    setConfirmDeleteModal(true);
  };

  const closeConfirmDeleteModal = () => {
    setConfirmDeleteModal(false);
  };
  const [open, setOpen] = useState(false);

  const openModal = () => {
    setOpen(true);
  };
  const closeModal = () => {
    setOpen(false);
  };

  var male = 0,
    female = 0,
    engineering = 0,
    backoffice = 0;

  const employees = useContext(employeeContext);
  const [employeeList, setEmployeeList] = useState(employees);
  const [selectedEmpIds, setSelectedEmpIds] = useState([]);
  let checkBoxTick = [];
  const getEmployeeData = (data) => {
    setEmployeeList([...employeeList, data]);
  };
  const onSelectEmployee = (event, id) => {
    const isChecked = selectedEmpIds.includes(id);
    if (!isChecked) {
      setSelectedEmpIds([...selectedEmpIds, id]);
    } else {
      console.log("checked")
      const _selectedEmployeeIds = selectedEmpIds.filter(
        (selectedEmployeeId) => {
          return selectedEmployeeId != id;
        }
      );
      setSelectedEmpIds(_selectedEmployeeIds);
    }
  };

  const onDeleteEmployee = () => {
    const newEmployees = employeeList.filter((employee) => {
      return !selectedEmpIds.some((selectedId) => {
        if (selectedId === employee.id) {
          return employee;
        }
      });
    });

    setEmployeeList(newEmployees);
    
    closeConfirmDeleteModal();
  };

  const onDeleteAllEmployee = () => {
    setEmployeeList([]);
    closeConfirmDeleteAllModal();
  };

  employeeList.map((el) => {
    if (el.gender === "male") {
      male++;
    } else female++;
  });
  employeeList.map((el) => {
    if (el.designation === "Engineering") {
      engineering++;
    } else backoffice++;
  });

  return (
    <>
      <div className="app">
        <div className="container">
          <div className="button-div">
            <h3 className="total">Total : {employeeList.length}</h3>
          </div>

          <div className="button-div">
            <h3 className="male">Male : {male}</h3>
          </div>

          <div className="button-div">
            <h3 className="female">Female : {female}</h3>
          </div>

          <div className="button-div">
            <h3 className="engineering">Engineering : {engineering}</h3>
          </div>

          <div className="button-div">
            <h3 className="backoffice">BackOffice : {backoffice} </h3>
          </div>
        </div>
        <div className="adddiv">
          <div className="add">
            <button className="addbutton" onClick={openModal} >
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
                  {confirmdeleteModal && (
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
                    {confirmdeleteAllModal && (
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

              {<EmployeeList
                employeeList={employeeList}
                onSelectEmployee={onSelectEmployee}
                selectedEmpIds={selectedEmpIds}
              />}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default EmpDashboard;
