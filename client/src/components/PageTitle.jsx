import React from "react";
import { useNavigate } from "react-router-dom";

function PageTitle({ title }) {
  const navigate = useNavigate();
  return (
    <div className="px-1 d-flex gap-3 align-items-center mb-4">
      <i
        className="ri-arrow-left-line"
        onClick={() => {
          navigate(-1);
        }}
      ></i>
      <h1 className="text-large">{title}</h1>
      <hr />
    </div>
  );
}

export default PageTitle;
