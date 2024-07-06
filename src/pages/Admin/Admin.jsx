import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

const Admin = () => {
  const navigate = useNavigate();

  return (
    <div>
      <div className="admin">
        <div className="sidebar">
          <ul>
            <li>
              <Link to="mange-product">Dashboard</Link>
            </li>
            <li>
              <Link to="mange-category">Products</Link>
            </li>
            <li onClick={() => navigate("create-product")}>
              <Link to="create-product">Create</Link>
            </li>
          </ul>
        </div>
        <div className="admin-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Admin;
