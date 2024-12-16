import React, { useState } from "react";
import { FaBars, FaMapMarkerAlt, FaUser, FaHandsHelping, FaCreditCard, FaCarSide, FaShieldAlt, FaGift, FaBell, FaCog, FaChevronDown } from "react-icons/fa";
import GoogleMapReact from "google-map-react";
import {
  Container,
  Header,
  Logo,
  MenuIcon,
  SideMenu,
  MenuItem,
  SubMenu,
  SidebarContent,
  SearchSection,
  SearchBar,
  MapContainer,
  ExploreSection,
  SectionTitle,
  ExploreGrid,
  ExploreItem
} from "../assets/Wrappers/HomeLayout";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const openSidebar = (sidebar) => {
    setActiveSidebar(sidebar);
    setMenuOpen(false); // Close the menu when a sidebar is opened
  };

  const closeSidebar = () => {
    setActiveSidebar(null);
  };

  const toggleSubMenu = (menu) => {
    setOpenSubMenu(openSubMenu === menu ? null : menu);
  };

  return (
    <Container>
      <Header>
        <Logo>
          <FaMapMarkerAlt />
          RDGo
        </Logo>
        <MenuIcon onClick={toggleMenu}>
          <FaBars />
        </MenuIcon>
      </Header>

      {/* Side Menu */}
      <SideMenu menuOpen={menuOpen}>
        <MenuItem onClick={() => openSidebar("profile")}>
          <FaUser /> Profile
        </MenuItem>
        <MenuItem onClick={() => openSidebar("help")}>
          <FaHandsHelping /> Help
        </MenuItem>
        <MenuItem onClick={() => openSidebar("payment")}>
          <FaCreditCard /> Payment
        </MenuItem>
        <MenuItem onClick={() => openSidebar("myRides")}>
          <FaCarSide /> My Rides
        </MenuItem>
        <MenuItem onClick={() => openSidebar("safety")}>
          <FaShieldAlt /> Safety
        </MenuItem>
        <MenuItem onClick={() => openSidebar("refer")}>
          <FaGift /> Refer and Earn
        </MenuItem>
        <MenuItem onClick={() => openSidebar("rewards")}>
          <FaGift /> My Rewards
        </MenuItem>
        <MenuItem onClick={() => openSidebar("notifications")}>
          <FaBell /> Notifications
        </MenuItem>
        <MenuItem onClick={() => openSidebar("settings")}>
          <FaCog /> Settings
        </MenuItem>

        {/* Example of SubMenu inside a Menu Item */}
        <MenuItem onClick={() => toggleSubMenu("profileSettings")}>
          <FaCog /> Profile Settings
          <FaChevronDown style={{ marginLeft: "auto", transition: "transform 0.3s ease" }} />
        </MenuItem>
        <SubMenu isOpen={openSubMenu === "profileSettings"}>
          <MenuItem>Change Password</MenuItem>
          <MenuItem>Update Profile Picture</MenuItem>
          <MenuItem>Manage Privacy</MenuItem>
        </SubMenu>
      </SideMenu>

      {/* Content Sidebar (Dynamic) */}
      {activeSidebar && (
        <SidebarContent onClick={closeSidebar}>
          <div>
            {activeSidebar === "profile" && <p>Profile content here</p>}
            {activeSidebar === "help" && <p>Help content here</p>}
            {activeSidebar === "payment" && <p>Payment content here</p>}
            {activeSidebar === "myRides" && <p>My Rides content here</p>}
            {activeSidebar === "safety" && <p>Safety content here</p>}
            {activeSidebar === "refer" && <p>Refer content here</p>}
            {activeSidebar === "rewards" && <p>Rewards content here</p>}
            {activeSidebar === "notifications" && <p>Notifications content here</p>}
            {activeSidebar === "settings" && <p>Settings content here</p>}
          </div>
        </SidebarContent>
      )}

      {/* Search Section */}
      <SearchSection>
        <SearchBar placeholder="Where are you going?" />
      </SearchSection>

      {/* Map Section */}
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: 'AIzaSyDM9u38Og94OUqafCkOStORarCVyGxsl-w' }}
          defaultCenter={{ lat: 12.9716, lng: 77.5946 }}
          defaultZoom={10}
        >
          {/* Markers or other map content */}
        </GoogleMapReact>
      </MapContainer>

      {/* Explore Section */}
      <ExploreSection>
        <SectionTitle>Explore</SectionTitle>
        <ExploreGrid>
          <ExploreItem>
            <img src="src/assets/images/bikeExplore.jpg" alt="Bike" />
            Bike
          </ExploreItem>
          <ExploreItem>
            <img src="src/assets/images/auto.jpg" alt="Auto" />
            Auto
          </ExploreItem>
          <ExploreItem id="cab">
            <img src="src/assets/images/car-sharing.png" alt="Cab" />
            Cab
          </ExploreItem>
          <ExploreItem>
            <img src="src/assets/images/parcleExplore.jpg" alt="Parcel" />
            Parcel
          </ExploreItem>
        </ExploreGrid>
      </ExploreSection>
    </Container>
  );
};

export default HomePage;
