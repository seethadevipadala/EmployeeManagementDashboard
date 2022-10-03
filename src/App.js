import "./App.css";
import React, { useState } from "react";
import EmpDashboard from "./components/empDashboard";
import empContext, { employeeData } from "./context/employeeContext";
function App() {
  const [employees, setEmployeeList] = useState(employeeData);
  const updateEmployees = (employee) => {
    setEmployeeList(employee);
    return employee;
  };

  return (
    <empContext.Provider value={{ employees, updateEmployees }}>
      <EmpDashboard />
    </empContext.Provider>
  );
}

export default App;
