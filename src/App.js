import "./App.css";
import React, { useState } from "react";
import { Route } from "react-router-dom";
import AddEmployeeModal from "./components/addEmployeeModal";
import EmpDashboard from "./components/empDashboard";
import empContext, { employeeData } from "./context/employeeContext";
import EditEmployee from "./components/editEmployee";
function App() {
  const [employees, setEmployeeList] = useState(employeeData);
  const updateEmployees = (employee) => {
    setEmployeeList(employee);
  };

  return (
    <empContext.Provider value={{ employees, updateEmployees }}>
      <Route path="/" exact>
        <EmpDashboard />
      </Route>
      <Route path="/addemp">
        <AddEmployeeModal />
      </Route>
      <Route path={`/editemp`}>
        <EditEmployee />
      </Route>
    </empContext.Provider>
  );
}

export default App;
