import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/employees/Login';
import StudentLogin from './pages/students/StudentLogin';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';
import EmployeeHome from './pages/employees/EmployeeHome';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}/>
          <Route path="/employee" element={<ProtectedRoute><EmployeeHome /></ProtectedRoute>}/>
          <Route path="/studentlogin" element={<StudentLogin />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
