import { Form, Input } from "antd";
import React from "react";

function Login() {
  return (
      <div
        className="primary d-flex align-items-center justify-content-end"
        style={{
          background: `linear-gradient(to right, rgba(0, 0, 0, 0.8), transparent), url('https://shikshaview.com/wp-content/uploads/2020/05/graphic-era-1024x424.jpg')`,
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          minHeight: "100vh",
          textAlign: "right",
        }}
      >
        <div className="d-flex align-items-center">
          <div className="position-absolute top-0 start-0 p-4 text-white">
            <h1 className="text-medium">Graphic Era (Deemed To Be) University</h1>
          </div>
          <Form layout="vertical w-400 white p-4 mx-5" style={{ border: "1px solid #0000FF", background: "rgba(0, 0, 0, 0.6)", height: "450px"}}>
            <hr style={{color: "#46c1dc"}}/>
            <h1 className="text-medium fs-3 text-white">Admin - Login</h1>
            <hr style={{color: "#46c1dc"}}/>
            <Form.Item name="employeeId" label={<label style={{ color: "white" }}>Employee ID</label>}>
              <Input placeholder="Username"/>
            </Form.Item>
            <Form.Item name="password" label={<label style={{ color: "white" }}>Password</label>}>
              <Input type="password" placeholder="Password"/>
            </Form.Item>

            <button className="primary fw-normal text-light px-5 my-4 w-100 btn btn-sm" style={{backgroundColor: "#46c1dc"}}>Login</button>
          </Form>
        </div>
      </div>
  );
}

export default Login;