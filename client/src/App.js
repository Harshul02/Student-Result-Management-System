import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './pages/employees/Login';
import StudentLogin from './pages/students/StudentLogin';
import PublicRoute from './components/PublicRoute';
import ProtectedRoute from './components/ProtectedRoute';
import EmployeeHome from './pages/employees/EmployeeHome';
import Students from './pages/employees/Students';
import AddStudent from './pages/employees/AddStudent';
import EditStudent from './pages/employees/EditStudent';
import Results from './pages/employees/Results';
import AddResult from './pages/employees/AddResult';
import EditResult from './pages/employees/EditResult';
import ResultCheck from './pages/ResultCheck';
import Student from './pages/students/Student';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/result/:resultId" element={<ResultCheck />} />
          <Route path="/login" element={<PublicRoute><Login /></PublicRoute>}/>
          <Route path="/employee" element={<ProtectedRoute><EmployeeHome /></ProtectedRoute>}/>
          <Route path="/employee/students" element={<ProtectedRoute><Students /></ProtectedRoute>}/>
          <Route path="/employee/students/add" element={<ProtectedRoute><AddStudent /></ProtectedRoute>}/>
          <Route path="/employee/students/edit/:rollNo" element={<ProtectedRoute><EditStudent /></ProtectedRoute>}/>
          <Route path="/employee/results" element={<ProtectedRoute><Results /></ProtectedRoute>}/>
          <Route path="/employee/results/add" element={<ProtectedRoute><AddResult /></ProtectedRoute>}/>
          <Route path="/employee/results/edit/:resultId" element={<ProtectedRoute><EditResult /></ProtectedRoute>}/>
          <Route path="/student" element={<Student />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
