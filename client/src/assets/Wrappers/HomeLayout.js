import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  font-family: Arial, sans-serif;
`;

export const Header = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: #0078d7;
  color: white;
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;

  svg {
    margin-right: 0.5rem;
  }
`;

export const MenuIcon = styled.div`
  font-size: 1.5rem;
  cursor: pointer;
`;

export const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 250px;
  height: 100%;
  background-color: #fff;
  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.1);
  transform: translateX(-100%); /* Initially off-screen to the left */
  transition: transform 0.3s ease-in-out;
  z-index: 1000; /* Ensure it's above the content */
  
  /* When the menu is open, slide the menu in */
  ${({ menuOpen }) => menuOpen && `
    transform: translateX(0);
  `}
`;



export const MenuItem = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  font-size: 1rem;
  cursor: pointer;
  border-bottom: 1px solid #ddd;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #0078d7;
    color: white;
  }
`;

export const SidebarContent = styled.div`
  position: fixed; /* Ensures the sidebar is fixed over the map */
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100%;
  background-color: white; /* Main sidebar background */
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1); /* Sidebar shadow */
  overflow-y: auto; /* Enables scrolling if content exceeds viewport height */
  padding: 1rem; /* Inner padding for the content */

  /* Responsive styling for smaller screens */
  @media (max-width: 768px) {
    width: 80%; /* Take up less width on smaller devices */
  }

  @media (max-width: 480px) {
    width: 100%; /* Full width on very small devices */
  }

  z-index: 1000; /* Ensures it appears above other elements like the map */
`;


export const SearchSection = styled.div`
  display: flex;
  padding: 1rem;
  background-color: #0078d7;
`;

export const SearchBar = styled.input`
  flex: 1;
  padding: 0.5rem;
  font-size: 1rem;
  border: none;
  border-radius: 4px;

  &::placeholder {
    color: #aaa;
  }
`;

export const MapContainer = styled.div`
  flex: 1;
  position: relative;
  height: 300px;
  transition: height 0.3s ease, margin-left 0.3s ease;

  /* When the menu is open, adjust the height and shift the content */
  ${({ menuOpen }) =>
    menuOpen &&
    `
    margin-left: 250px; /* Make space for the sidebar */
    height: 250px; /* Reduce height when sidebar is open */
  `}

  /* Media Query for Larger Screens */
  @media (min-width: 768px) {
    height: 400px;
  }

  /* Media Query for Smaller Screens (Mobile Devices) */
  @media (max-width: 768px) {
    height: 250px;
  }
`;

export const ExploreSection = styled.section`
  padding: 1rem;
`;

export const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

export const ExploreGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1rem;
`;

export const ExploreItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f9f9f9;
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 0.5rem;
  text-align: center;
  cursor: pointer;

  img {
    width: 100%;
    max-width: 80px;
    height: auto;
    margin-bottom: 0.5rem;
  }

  &:hover {
    background-color: #0078d7;
    color: white;
  }
`;

export const SubMenuSlide = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  max-width: 400px;
  height: 100%;
  background: white;
  box-shadow: -4px 0 8px rgba(0, 0, 0, 0.1);
  transform: ${({ slideOpen }) => (slideOpen ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.3s ease-in-out;
  padding: 1rem;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const BackButton = styled.button`
  display: flex;
  align-items: center;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  background-color: #0078d7;
  color: white;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 1rem;

  svg {
    margin-right: 0.5rem;
  }

  &:hover {
    background-color: #005bb5;
  }
`;
