import styled, { keyframes } from "styled-components";

// Keyframes for animations
const moveLeftToRight = keyframes`
  0% { transform: translateX(-100%); }
  100% { transform: translateX(100%); }
`;

const moveRightToLeft = keyframes`
  0% { transform: translateX(100%); }
  100% { transform: translateX(-100%); }
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f0f8ff;
  overflow: hidden;
  position: relative;
  padding: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const Logo = styled.h1`
  position: absolute;


  z-index: 1;
  animation: fadeIn 2s ease-in-out;

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }

  @media (max-width: 768px) {
    font-size: 3rem;
  }

  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const Vehicle = styled.img`
  position: absolute;
  width: 200px;
  max-width: 100%;

  &.car {
    bottom: 20%;
    animation: ${moveLeftToRight} 2s linear infinite;
  }

  &.bike {
    top: 20%;
    animation: ${moveRightToLeft} 2s linear infinite;
  }

  @media (max-width: 768px) {
    width: 150px;
  }

  @media (max-width: 480px) {
    width: 120px;
  }
`;
