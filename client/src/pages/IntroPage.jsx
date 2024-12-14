
import React from "react";
import { Link } from "react-router-dom";
import {
  Container,
  Background,
  Illustration,
  Heading,
  SubHeading,
  Button,
} from "../assets/Wrappers/IntroPage";
import cars from "../assets/images/cars.svg"
const IntroPage = () => {
  return (
    <Container>
        <Background />
      <Illustration
        src={cars}// Replace with your illustration URL
        alt="Illustration"
      />
      <Heading>Book a cab, Tricycle or bike within seconds</Heading>
      <SubHeading>
        The fastest app to book a cab, Tricycle, or a bike anywhere
      </SubHeading>
      <Link to="/signup">
        <Button>Give me a ride</Button>
      </Link>
    </Container>
  );
};

export default IntroPage;
