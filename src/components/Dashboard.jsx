// src/components/About.js
import React from "react";
import { Link, Outlet } from "react-router-dom"; // Import Outlet for child routes

const Dashboard = () => {
  return (
    <div>
      <h1>About Us</h1>
      <nav>
        <ul>
          <li>
            <Link to="Navbar">Team</Link>
          </li>
        </ul>
      </nav>

      {/* Outlet is where the child route components will be rendered */}
      <Outlet />
    </div>
  );
};

export default Dashboard;
