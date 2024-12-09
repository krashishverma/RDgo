
import React from "react";
import {
  Container,
  Illustration,
  Heading,
  SubHeading,
  Button,
} from "../assets/Wrappers/IntroPage";
import cars from "../assets/images/cars.svg"
const IntroPage = () => {
  return (
    <Container>
      <Illustration
        src={cars}// Replace with your illustration URL
        alt="Illustration"
      />
      <Heading>Book a cab, Tricycle or bike within seconds</Heading>
      <SubHeading>
        The fastest app to book a cab, Tricycle, or a bike anywhere
      </SubHeading>
      <Button>Give me a ride</Button>
    </Container>
  );
};

export default IntroPage;
