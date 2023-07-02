import React from "react";
import { Row, Col } from "antd";
import { useNavigate } from "react-router-dom";

function EmployeeHome() {
  const navigate = useNavigate();
  return (
    <div className="h-100 d-flex justify-content-center align-items-center" style={{ marginTop: "20px" }}>
      <Row gutter={[20, 20]}>
        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} style={{width: "500px"}} className="d-flex justify-content-center">
          <div
            className="p-5 primary-border card w-100 cursor-pointer align-items-center justify-content-center gap-3 my-4"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s, box-shadow 0.3s",
              cursor: "pointer",
              height: "250px",
              maxWidth: "300px" // Increased maxWidth
            }}
            onClick={() => {
              navigate("/employee/students");
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ECECEC";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#F5F5F5";
              e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              src="https://cdn-icons-png.flaticon.com/512/3135/3135810.png"
              alt=""
              height={50}
              width={50}
            />
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Students</h1>
          </div>
        </Col>
        <Col xs={24} sm={12} md={12} lg={12} xl={12} xxl={12} style={{width: "500px"}} className="d-flex justify-content-center">
          <div
            className="p-5 primary-border card w-100 cursor-pointer d-flex align-items-center justify-content-center gap-3 my-4"
            style={{
              backgroundColor: "#F5F5F5",
              borderRadius: "10px",
              boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s, box-shadow 0.3s",
              cursor: "pointer",
              height: "250px",
              maxWidth: "300px" // Increased maxWidth
            }}
            onClick={() => {
              navigate("/employee/results");
            }}
            onMouseEnter={(e) => {
              e.target.style.backgroundColor = "#ECECEC";
              e.target.style.boxShadow = "0 4px 8px rgba(0, 0, 0, 0.2)";
            }}
            onMouseLeave={(e) => {
              e.target.style.backgroundColor = "#F5F5F5";
              e.target.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.1)";
            }}
          >
            <img
              src="https://static.tnn.in/photo/msid-99780121,width-100,height-200,resizemode-75/99780121.jpg"
              alt=""
              height={50}
              width={50}
            />
            <h1 style={{ fontSize: "20px", fontWeight: "bold" }}>Results</h1>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default EmployeeHome;
