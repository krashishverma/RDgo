// styled/SplashPageStyles.js
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
`;

export const Logo = styled.h1`
  position: absolute;
  font-size: 4rem;
  color: #333;
  font-weight: bold;
  z-index: 1;
  animation: fadeIn 2s ease-in-out;

  @keyframes fadeIn {
    0% { opacity: 0; }
    100% { opacity: 1; }
  }
`;
export const Vehicle = styled.img`
  position: absolute;
  width: 100px;

  &.car {
    bottom: 20%;
    animation: ${moveLeftToRight} 3s linear infinite;
  }

  &.bike {
    top: 20%;
    animation: ${moveRightToLeft} 3s linear infinite;
  }
`;