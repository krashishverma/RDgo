import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  background-color: #f9f9f9;
  padding: 1rem;

  @media (max-width: 768px) {
    height: auto;
    padding: 2rem;
  }
`;

export const Illustration = styled.img`
  width: 300px;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    width: 250px;
  }

  @media (max-width: 480px) {
    width: 200px;
  }
`;

export const Heading = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.3rem;
  }

  @media (max-width: 480px) {
    font-size: 1.1rem;
  }
`;

export const SubHeading = styled.p`
  font-size: 1rem;
  color: gray;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    margin-bottom: 1.5rem;
  }

  @media (max-width: 480px) {
    font-size: 0.8rem;
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
  transition: background 0.3s ease;

  &:hover {
    background: linear-gradient(90deg, #182848, #4b6cb7);
  }

  @media (max-width: 768px) {
    padding: 0.7rem 1.5rem;
    font-size: 0.9rem;
  }

  @media (max-width: 480px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.8rem;
  }
`;
