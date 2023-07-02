import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";

function DefaultLayout(props) {
  const { employee } = useSelector((state) => state.employee);
  const navigate = useNavigate();
  return (
    <div className="layout">
    <NavBar name = {employee?.name}/>
      {/* <div className="header d-flex justify-content-between align-items-center">
        <h1 className="text-primary">
          {" "}
          <b className="secondary-text">MY</b> RESULTS{" "}
        </h1>
        <div>
          <h1 className="text-primary text-small">{employee?.name}</h1>
          <h1
            className="text-white text-small cursor-pointer underline"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/login");
            }}
          >
            Logout
          </h1>
        </div>
      </div> */}
      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
