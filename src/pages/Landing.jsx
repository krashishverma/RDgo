
// SplashPage.js
import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import car from "../assets/images/bike.png";
import bike from "../assets/images/car.png";
import { Link } from "react-router-dom";
import { Container, Logo, Vehicle } from "../assets/Wrappers/Landing";
import logo from "../assets/images/logo.png"
const Landing = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/intro'); // Redirect to /intro after 5 seconds
    }, 2300);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [navigate]);


  return (
    <Container>
      <Logo><img src={logo} alt="jobify" className="logo"/></Logo>
      <Vehicle
        src={car} // Car image
        alt="Car"
        className="car"
      />
      <Vehicle
        src={bike} // Bike image
        alt="Bike"
        className="bike"
      />
    </Container>
  );
};
export default Landing;