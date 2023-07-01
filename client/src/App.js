import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import Login from './components/Login';
import StudentLogin from './components/StudentLogin';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login />}/>
          <Route path="/studentlogin" element={<StudentLogin />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
