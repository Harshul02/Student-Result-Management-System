import { Col, Form, Row } from "antd";
import React from "react";
import axios from "axios";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";
import { ShowLoading, HideLoading } from "../redux/alerts";
import { useNavigate } from 'react-router-dom';

function StudentForm({ student, type }) {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onFinish = async (values) => {
    try {
      dispatch(ShowLoading());
      let response = null;
      if (type === "edit") {
        response = await axios.post(`/api/student/update-student/${student.rollNo}`, values, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      } else {
        response = await axios.post("/api/student/add-student", values, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
      }

      dispatch(HideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate("/employee/students");
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      toast.error(error.message);
    }
  };

  return (
    <div className="d-flex justify-content-center my-5"> {/* Center align the form */}
      <Form layout="vertical" onFinish={onFinish} initialValues={student}>
        <Row gutter={[10, 10]}>
          <Col span={8}>
            <Form.Item label="First Name" name="firstName">
              <input type="text" className="form-control form-control-xs" style={{ border: '1px solid black', width: "210px" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Last Name" name="lastName">
              <input type="text" className="form-control form-control-xs" style={{ border: '1px solid black', width: "210px" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Roll No" name="rollNo">
              <input type="number" disabled={type === 'edit' ? true : false} className="form-control form-control-xs" style={{ border: '1px solid black', width: "210px" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Email" name="email">
              <input type="text" className="form-control form-control-xs" style={{ border: '1px solid black', width: "210px" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Phone Number" name="phoneNumber">
              <input type="text" className="form-control form-control-xs" style={{ border: '1px solid black', width: "210px" }} />
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Class" name="class">
              <input type="number" className="form-control form-control-xs" style={{ border: '1px solid black', width: "210px" }} />
            </Form.Item>
          </Col>
        </Row>
        <div className="d-flex justify-content-center mt-2">
  <button className="btn btn-primary mx-4 primary text-white px-5 my-4">Save</button>
</div>

      </Form>
    </div>
  );
}

export default StudentForm;
