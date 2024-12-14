import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f9f9f9;
  position: relative;

  @media (max-width: 768px) {
    min-height: 100%;
  }
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px;
  background: linear-gradient(90deg, #0078ff, #00c6ff);
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: white;

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 24px;
  font-weight: bold;
  gap: 8px;

  svg {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 20px;
    svg {
      font-size: 20px;
    }
  }
`;

export const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.1);
  }

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

export const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ menuOpen }) => (menuOpen ? "0" : "-100%")};
  width: 250px;
  height: 100%;
  background: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 100;
  display: flex;
  flex-direction: column;
  padding: 20px;
  transition: left 0.3s ease-in-out;

  @media (max-width: 768px) {
    width: 200px;
    padding: 15px;
  }
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 18px;
  padding: 10px 0;
  cursor: pointer;
  border-bottom: 1px solid #eee;

  &:hover {
    color: #0078ff;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;
export const ProfileArrow = styled.span`
  margin-left: auto; /* Push the arrow to the right */
  font-size: 16px;
  transition: transform 0.3s ease-in-out;

  /* Rotate the arrow when submenu is open */
  svg {
    transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0)")};
  }
`;

export const SubMenu = styled.div`
  padding: 10px 20px;
  background-color: #f9f9f9; /* Light background for the submenu */
  border-left: 4px solid #0078ff; /* Highlight the submenu */
  margin-left: 10px;
  font-size: 14px;
  color: #333;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};

  p {
    margin: 5px 0;
    font-weight: 500;
  }
`;


export const SearchSection = styled.div`
  padding: 15px;
  background: white;

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

export const SearchBar = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 25px;
  outline: none;
  transition: box-shadow 0.3s ease;

  &:focus {
    box-shadow: 0 0 8px rgba(0, 120, 255, 0.6);
  }

  &::placeholder {
    color: #999;
  }

  @media (max-width: 768px) {
    padding: 8px;
    font-size: 14px;
  }
`;

export const MapContainer = styled.div`
  flex: 1;
  position: relative;

  & > div {
    height: 100%;
  }

  @media (max-width: 768px) {
    & > div {
      height: 300px; /* Set a fixed height for smaller screens */
    }
  }
`;

export const ExploreSection = styled.div`
  padding: 20px;
  background: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    padding: 15px;
  }
`;

export const SectionTitle = styled.h2`
  font-size: 18px;
  margin-bottom: 15px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ExploreGrid = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-wrap: wrap;
    gap: 10px;
  }
`;

export const ExploreItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 5px;
  font-size: 14px;

  img {
    width: 80px;
    height: 80px;
    transition: transform 0.3s ease;

    &:hover {
      transform: scale(1.2);
    }
  }

  @media (max-width: 768px) {
    font-size: 12px;

    img {
      width: 60px;
      height: 60px;
    }
  }
`;