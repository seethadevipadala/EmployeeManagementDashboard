import logo from "./logo.svg";
import "./App.css";
import React from "react";
import EmployeeList from "./components/employeeList";
import { useState } from "react";
import employeeContext from "./context/empContext";
import { useContext } from "react";

function App() {
  const employee=useContext(employeeContext)
  // const employees = [{
  //   "id":0,
  //   "name": "sita",
  //   "fatherName": "Father",
  //   "phoneNumber": 4343421,
  //   "address": "xyz",
  //   "joiningDate": 21 / 32 / 45,
  //   "designation": "Engineering"
  // },
  // {
  //   "id":0,
  //   "name": "sita",
  //   "fatherName": "Father",
  //   "phoneNumber": 4343421,
  //   "address": "xyz",
  //   "joiningDate": 21 / 32 / 45,
  //   "designation": "Engineering"
  //   },
  //   {
  //     "id":0,
  //     "name": "sita",
  //     "fatherName": "Father",
  //     "phoneNumber": 4343421,
  //     "address": "xyz",
  //     "joiningDate": 21 / 32 / 45,
  //     "designation": "Engineering"
  //   },
  //   {
  //     "id":0,
  //     "name": "sita",
  //     "fatherName": "Father",
  //     "phoneNumber": 4343421,
  //     "address": "xyz",
  //     "joiningDate": 21 / 32 / 45,
  //     "designation": "Engineering"
  //   },
  // {
  //   "id":0,
  //   "name": "sita",
  //   "fatherName": "Father",
  //   "phoneNumber": 4343421,
  //   "address": "xyz",
  //   "joiningDate": 21 / 32 / 45,
  //   "designation": "Engineering"
  // },
  //   {
  //   "id":1,
  //   "name": "sita2",
  //   "fatherName": "Father2",
  //   "phoneNumber": 43431,
  //   "address": "xyz",
  //   "joiningDate": 21 / 32 / 45,
  //   "designation": "Back-Office"
  // },
  //   {
  //     "id":2,

  //   "name": "sita3",
  //   "fatherName": "Fathe3r",
  //   "phoneNumber": 43421,
  //   "address": "xyz",
  //   "joiningDate": 21 / 32 / 45,
  //   "designation": "Enginnering"
  //   }];
  console.log(employee)
  return (
    <>
     
        {/* <employeeContext.Consumer> */}
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
          <button className="addbutton">
            <h3>Add Employee</h3>
          </button>
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
                <button className="delbutton">
                  <h3>Delete</h3>
                </button>
              </div>
              <div>
                <button className="delallbutton">
                  <h3>Delete all</h3>
                </button>
              </div>
            </div>
               
            <EmployeeList emp={employee} />
  
          </div>
        </div>
      </div>
          </div>
          {/* </employeeContext.Consumer> */}
   
        </>
  );
}

export default App;
