import styled from "styled-components";

// Container for the entire page
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: #f9f9f9;
  position: relative;
  
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

// Header section with logo and menu icon
export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #fff;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  z-index: 10;
`;

// Logo section with an icon
export const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 20px;
  color: #333;

  svg {
    margin-right: 8px;
  }
`;

// Menu Icon (hamburger) to toggle the sidebar
export const MenuIcon = styled.div`
  font-size: 24px;
  cursor: pointer;
`;

// Side Menu (Open on the left side)
export const SideMenu = styled.div`
  position: fixed;
  top: 0;
  left: ${({ menuOpen }) => (menuOpen ? "0" : "-250px")};
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
  }
`;

// Individual menu item inside the sidebar
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
`;

// SubMenu for expandable menu items (e.g., Profile Settings)
export const SubMenu = styled.div`
  padding: 10px 20px;
  background-color: #f9f9f9;
  border-left: 4px solid #0078ff;
  margin-left: 10px;
  font-size: 14px;
  color: #333;
  transition: max-height 0.3s ease-in-out, opacity 0.3s ease-in-out;
  max-height: ${({ isOpen }) => (isOpen ? "200px" : "0")};
  overflow: hidden;
  opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
`;

// Content that appears when a menu item is selected (right panel)
export const SidebarContent = styled.div`
  position: fixed;
  top: 0;
  left: ${({ isVisible }) => (isVisible ? "0" : "-250px")};
  height: 100%;
  width: 250px;
  background: white;
  box-shadow: 2px 0 5px rgba(0, 0, 0, 0.1);
  z-index: 200;
  padding: 20px;
  transition: left 0.3s ease-in-out;
  display: flex;
  flex-direction: column;
  gap: 20px;

  @media (max-width: 768px) {
    width: 200px;
  }
`;


// Map section where the Google Map will be displayed
export const MapContainer = styled.div`
  flex: 1;
  position: relative;

  & > div {
    height: 100%;
  }
`;

// Search section where users can search for locations
export const SearchSection = styled.div`
  padding: 15px;
  background: white;
`;

// Search Bar input
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
`;

// Explore section with category items like "Bike", "Auto", etc.
export const ExploreSection = styled.div`
  padding: 20px;
  background: #ffffff;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  box-shadow: 0 -2px 4px rgba(0, 0, 0, 0.1);
`;

// Section title in the Explore section
export const SectionTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

// Grid layout for the Explore section (Bike, Auto, Cab, etc.)
export const ExploreGrid = styled.div`
  display: flex;
  gap: 15px;
  justify-content: space-around;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

// Individual item in the Explore section (e.g., Bike, Auto)
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
`;
