import React, { useEffect } from "react";

import { useNavigate } from "react-router-dom";
import { Col, Row, Table } from "antd";
import axios from "axios";
import toast,{ Toaster } from "react-hot-toast";
import { useDispatch } from "react-redux";
// import { ShowLoading, HideLoading } from "../";
import "./student.css"

function Home() {
  const dispatch = useDispatch();
  const [results, setResults] = React.useState([]);
  const navigate = useNavigate();
  const getResults = async (values) => {
    try {
    //   dispatch(ShowLoading());
      const response = await axios.post(
        "https://student-result-api.onrender.com/api/results/get-all-results",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
    //   dispatch(HideLoading());
      if (response.data.success) {
        setResults(response.data.data);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
    //   dispatch(HideLoading());
      toast.error(error.message);
    }
  };

  useEffect(() => {
    if (results.length == 0) {
      getResults();
    }
  }, []);

  return (
    <>
    <Toaster />
    <div className="p-5">
      <div className="header d-flex justify-content-between align-items-center py-2 bg-primary" style={{borderRadius: "5px"}}>
        <h1 className="text-white fs-1 mx-2">
          {" "}
          MyRESULTS{" "}
        </h1>
        <div>
          {/* <h1
            className="text-white text-small cursor-pointer underline"
            onClick={() => {
              navigate("/login");
            }}
          >
            Login
          </h1> */}
        </div>
      </div>

      {results.length > 0 ? (
        <Row gutter={[20, 20]}>
          <Col span={24}>
            <h1 className="text-lg my-3 fs-2 mt-4">Welcome to MyRESULTS </h1>
            <h1 className="text-md my-3 fs-3" style={{fontFamily: "cursive"}}>
              Select Your Examination From Below..{" "}
            </h1>
            <hr />
          </Col>

          {results.map((result) => {
            return (
              <Col span={8}>
                <div
                  className="card p-2 cursor-pointer primary-border cardcrs"
                  onClick={() => {
                    navigate(`/result/${result._id}`);
                  }}
                >
                  <h1 className="text-md fs-3">{result.examination}</h1>
                  <hr />
                  <h1 className="text-sm fs-4">Class : {result.class}</h1>
                </div>
              </Col>
            );
          })}
        </Row>
      ) : (
        <div className="d-flex align-items-center justify-content-center mt-5 pt-5">
          <h1 className="text-medium">No Results Found</h1>
        </div>
      )}
    </div>
    </>
  );
}

export default Home;
