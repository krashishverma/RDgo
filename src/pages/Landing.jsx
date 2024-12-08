
// SplashPage.js
import React, { useState, useEffect } from "react";
import car from "../assets/images/bike.png";
import bike from "../assets/images/car.png";
import { Container, Logo, Vehicle } from "../assets/Wrappers/Landing";

const Landing = ({ onSplashEnd }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onSplashEnd();
    }, 3000); // Splash screen duration: 5 seconds

    return () => clearTimeout(timer);
  }, [onSplashEnd]);

  return (
    <Container>
      <Logo>RDGo</Logo>
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