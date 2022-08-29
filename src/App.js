import "./App.css";
import React, { useState } from "react";
import EmpDashboard from "./components/empDashboard";
import empContext, { employeeData } from "./context/empContext";
function App() {
  const [updateEmployeeData, setupdateEmployeeData] = useState(employeeData);
  const updateEmployee = (employee) => {
    setupdateEmployeeData(employee);
    return employee;
  };

  return (
    <empContext.Provider value={updateEmployeeData}>
      <EmpDashboard updateEmployee={updateEmployee} />
    </empContext.Provider>
  );
}

export default App;
