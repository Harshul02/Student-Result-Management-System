import { Col, Form, Row, Space } from "antd";
import axios from "axios";
import toast from "react-hot-toast";
import { ShowLoading, HideLoading } from "../redux/alerts";
import { useDispatch, useSelector } from "react-redux";
import { RiDeleteBinLine } from "react-icons/ri";

import React from "react";
import { useNavigate } from "react-router-dom";
import "./ResultForm.css"; // Import the CSS file for styling

function ResultForm() {
  const { employee } = useSelector((state) => state.employee);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onFinish = async (values) => {
    values.createdBy = employee._id;
    try {
      dispatch(ShowLoading());
      const response = await axios.post("/api/results/add-result", values, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });
      dispatch(HideLoading());
      if (response.data.success) {
        toast.success(response.data.message);
        navigate(-1);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      dispatch(HideLoading());
      toast.error(error.message);
    }
  };

  return (
    <div>
      <Form layout="vertical" onFinish={onFinish} initialValues={null}>
        <Row gutter={[10, 10]} className="mx-3">
          <Col span={16}>
            <Form.Item label="Examination" name="examination">
              <input type="text" className="form-control" placeholder="eg. Mid Term, End Term"/>
            </Form.Item>
          </Col>
          <Col span={8} />
          <Col span={8}>
            <Form.Item label="Date" name="date">
              <input type="date" className="form-control"/>
            </Form.Item>
          </Col>
          <Col span={8}>
            <Form.Item label="Class" name="class">
              <input type="number" className="form-control"/>
            </Form.Item>
          </Col>
        </Row>

        <hr />
        <Form.List name="subjects">
          {(fields, { add, remove }) => (
            <>
              {fields.map(({ key, name, ...restField }) => (
                <Space
                  key={key}
                  style={{ display: "flex", marginBottom: 8 }}
                  align="baseline"
                  className="mx-3"
                >
                  <Col xs={24} sm={30}>
                    <Form.Item
                      {...restField}
                      name={[name, "name"]}
                      rules={[{ required: true, message: "Required" }]}
                    >
                      <input
                        placeholder="Subject Name"
                        className="form-control"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={30}>
                    <Form.Item
                      {...restField}
                      name={[name, "totalMarks"]}
                      rules={[{ required: true, message: "Required" }]}
                    >
                      <input
                        placeholder="Total Marks"
                        className="form-control"
                      />
                    </Form.Item>
                  </Col>
                  <Col xs={24} sm={30}>
                    <Form.Item
                      {...restField}
                      name={[name, "passMarks"]}
                      rules={[{ required: true, message: "Required" }]}
                    >
                      <input
                        placeholder="Pass Marks"
                        className="form-control"
                      />
                    </Form.Item>
                  </Col>
                  <RiDeleteBinLine
                    size={18}
                    className="mx-4"
                    onClick={() => {
                      remove(name);
                    }}
                  />
                </Space>
              ))}

              <button
                onClick={() => add()}
                className="btn btn-primary mt-3 cursor-pointer mx-3"
              >
                Add Subject
              </button>
            </>
          )}
        </Form.List>
        <div className="d-flex justify-content-end mt-2">
          <button className="btn btn-primary primary text-white px-5 mx-3 mb-3">
            Save
          </button>
        </div>
      </Form>
    </div>
  );
}

export default ResultForm;
