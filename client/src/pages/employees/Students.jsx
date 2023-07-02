import React, {useState} from 'react';
import { Table } from "antd";
import { useNavigate } from 'react-router-dom';
import PageTitle from '../../components/PageTitle';

export default function Students() {
    const navigate = useNavigate();
    const [students, setStudents] = useState([]);


    const columns = [
        {
          title: "Class",
          dataIndex: "class",
          key: "class",
        },
        {
          title: "Roll No",
          dataIndex: "rollNo",
          key: "rollNo",
        },
        {
          title: "First Name",
          dataIndex: "firstName",
          key: "firstName",
        },
        {
          title: "Last Name",
          dataIndex: "lastName",
          key: "lastName",
        },
        {
          title: "Email",
          dataIndex: "email",
          key: "email",
        },
        {
          title: "Phone Number",
          dataIndex: "phoneNumber",
          key: "phoneNumber",
        },
        {
          title: "Action",
          key: "action",
          render: (text, record) => (
            <div className="d-flex gap-3">
              <i
                className="ri-delete-bin-line"
                onClick={() => {
                //   deleteStudent(record.rollNo);
                }}
              ></i>
              <i
                className="ri-pencil-line"
                onClick={() => {
                  navigate(`/employee/students/edit/${record.rollNo}`);
                }}
              ></i>
            </div>
          ),
        },
      ];
  return (
    <div>
        <PageTitle title="Students" />
      <div className="d-flex justify-content-between align-items-center my-3 mx-3">
        <input
          type="text"
          className="w-300 px-2 form-control"
          placeholder="search students"
          style={{width: "250px"}}
        />
        <button
          className="btn btn-primary primary text-white px-3 mx-3"
          onClick={() => {
            navigate("/employee/students/add");
          }}
        >
          Add Student
        </button>
      </div>
      <div className="table-responsive px-3">
        <Table columns={columns} dataSource={students} />
      </div>
    </div>
  )
}
