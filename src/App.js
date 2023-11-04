import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";

import Header from "./Components/Header";
import ListedJobs from "./Components/ListedJobs";
import EmployerList from "./Components/EmployerList";
import EmployeeList from "./Components/EmployeeList";
import SponsedList from "./Components/SponsedList";
import EmployeeDeatils from "./Components/EmployeeDetails";
import EmployerDeatils from "./Components/EmployerDetails";
import Resdex from "./Components/Resdex";
import ResdexDetails from "./Components/ResdexDetails";
import ResdexUpgrade from "./Components/ResdexUpgrade";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<>Home</>} />
        <Route path="/about" element={<>About</>} />
        <Route path="/contact" element={<>Contact</>} />
        <Route path="/listedjobs" element={<ListedJobs />} />
        <Route path="/employee" element={<EmployeeList />} />
        <Route path="/employee/details" element={<EmployeeDeatils />} />
        <Route path="/employer" element={<EmployerList />} />
        <Route path="/employer/details" element={<EmployerDeatils />} />
        <Route path="/sponsored" element={<SponsedList />} />
        <Route path="/resdex" element={<Resdex />} />
        <Route path="/resdex/details" element={<ResdexDetails />} />
        <Route path="/resdex/upgrade" element={<ResdexUpgrade />} />
        <Route path="*" element={<>404 Not Found</>} />
      </Routes>
    </>
  );
}

export default App;
