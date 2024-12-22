// Logout.js
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear session data (you can also clear localStorage if needed)
    sessionStorage.clear();
    localStorage.clear(); // Optional, if you're using localStorage as well

    // After clearing the session, redirect to the home page or login page
    navigate("/intro"); // Redirect to home or login page
  }, [navigate]);

  return (
    <div>
      <h2>Logging you out...</h2>
      <p>Please wait while we log you out.</p>
    </div>
  );
};

export default Logout;
