import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1rem;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: url("src/assets/images/vil.jpg") no-repeat center center;
  background-size: cover;
  filter: blur(8px) brightness(0.7);
  z-index: -1;
`;

export const Illustration = styled.img`
  width: 250px;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const Heading = styled.h1`
  font-size: 1.8rem;
  font-weight: bold;
  color: #fff;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const SubHeading = styled.p`
  font-size: 1rem;
  color: #e0e0e0;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }
`;

export const Button = styled.button`
  padding: 0.8rem 2rem;
  font-size: 1rem;
  color: #fff;
  background: linear-gradient(90deg, #4b6cb7, #182848);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  outline: none;
  text-transform: uppercase;

  &:hover {
    background: linear-gradient(90deg, #182848, #4b6cb7);
  }

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.6rem 1.5rem;
  }
`;
