import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(135deg, #6c63ff, #4a47a3);
  padding: 20px;
`;

export const FormWrapper = styled.div`
  background: white;
  padding: 30px;
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  text-align: center;
  width: 100%;
  max-width: 400px;
  transition: transform 0.3s, box-shadow 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
  }
`;

export const Title = styled.h1`
  font-size: 26px;
  color: #333;
  margin-bottom: 10px;
  font-weight: bold;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

export const Subtitle = styled.p`
  font-size: 14px;
  color: #6d6d6d;
  margin-bottom: 20px;
  line-height: 1.5;
`;

export const InputGroup = styled.div`
  margin: 15px 0;
  text-align: left;
`;

export const Label = styled.label`
  display: block;
  font-size: 14px;
  color: #4f4f4f;
  margin-bottom: 5px;
`;

export const Select = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 6px rgba(108, 99, 255, 0.5);
    outline: none;
  }
`;

export const Input = styled.input`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  color: #333;
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    border-color: #6c63ff;
    box-shadow: 0 0 6px rgba(108, 99, 255, 0.5);
    outline: none;
  }
`;

export const Terms = styled.p`
  font-size: 12px;
  color: #6d6d6d;
  margin: 20px 0;

  a {
    color: #6c63ff;
    text-decoration: none;
    transition: color 0.3s;

    &:hover {
      text-decoration: underline;
      color: #4a47a3;
    }
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  font-size: 16px;
  color: white;
  background: linear-gradient(90deg, #6c63ff, #4a47a3);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: background 0.3s, transform 0.2s;

  &:hover {
    background: linear-gradient(90deg, #4a47a3, #6c63ff);
    transform: translateY(-2px);
  }

  &:active {
    transform: translateY(1px);
  }
`;
