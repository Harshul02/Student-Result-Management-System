// import React from 'react'
// import { useNavigate } from 'react-router-dom';

// export default function NavBar(props) {
//     const navigate = useNavigate();
//   return (
//     <div>
//         <nav class='navbar navbar-light bg-primary'>
//   <span class="navbar-brand mb-0 h1 text-white">Graphic Era (Deemed To Be) University</span>
//   <div className="ml-auto mx-4">
//           <span className="text-white mr-3 mx-3 fs-5 text-medium">{props.name}</span>
//           <button className="btn btn-light"
//           onClick={() => {
//               localStorage.removeItem("token");
//               navigate("/login");
//             }}
//             >
//             Logout
//             </button>
//         </div>
// </nav>
//     </div>
//   )
// }

import React from "react";
import { useNavigate } from "react-router-dom";

export default function NavBar(props) {
  const navigate = useNavigate();
  return (
    <nav class="navbar navbar-expand-lg bg-primary">
      <div class="container-fluid">
        <span className="navbar-brand mb-0 h1 text-white mx-2">
          Graphic Era Global School
        </span>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="collapse navbar-collapse justify-content-end"
          id="navbarSupportedContent"
        >
          <div className="ml-auto mx-4 d-flex align-items-center">
            <span className="text-white mr-3 mx-3 fs-5 font-weight-bold">
              {props.name}
            </span>
            <button
              className="btn btn-light"
              onClick={() => {
                localStorage.removeItem("token");
                navigate("/login");
              }}
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
