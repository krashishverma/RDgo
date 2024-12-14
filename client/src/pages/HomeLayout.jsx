import React, { useState } from "react";
import {
  Container,
  Header,
  Logo,
  MenuIcon,
  SideMenu,
  MenuItem,
  SubMenu,
  ProfileArrow,
  SearchSection,
  SearchBar,
  MapContainer,
  ExploreSection,
  SectionTitle,
  ExploreGrid,
  ExploreItem,
} from "../assets/Wrappers/HomeLayout"; // Import all styled components
import {
  FaBars,
  FaUser,
  FaCreditCard,
  FaBell,
  FaCog,
//   users,
  FaGift,
  FaCarSide,
  FaHandsHelping,
  FaShieldAlt,
  FaMapMarkerAlt,
  FaChevronDown,
  FaChevronRight, 
} from "react-icons/fa";
import GoogleMapReact from "google-map-react";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const toggleProfile = () => {
    setMenuOpen(!profileOpen);
  };

  return (
    <Container>
      {/* Header Section */}
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
        <MenuItem>
          <FaUser /> Profile
          <ProfileArrow>
            {profileOpen ? <FaChevronDown /> : <FaChevronRight />}
          </ProfileArrow>
        </MenuItem>
        {/* adding profile option here */}
        {profileOpen && (
          <SubMenu>
            <p><strong>Username:</strong> John Doe</p>
            <p><strong>Phone Number:</strong> +91-9876543210</p>
          </SubMenu>
        )}
        <MenuItem>
          <FaHandsHelping /> Help
          <ProfileArrow>
            {profileOpen ? <FaChevronDown /> : <FaChevronRight />}
          </ProfileArrow>
        </MenuItem>
        <MenuItem>
          <FaCreditCard /> Payment
          <ProfileArrow>
            {profileOpen ? <FaChevronDown /> : <FaChevronRight />}
          </ProfileArrow>
        </MenuItem>
        <MenuItem>
          <FaCarSide /> My Rides
          <ProfileArrow>
            {profileOpen ? <FaChevronDown /> : <FaChevronRight />}
          </ProfileArrow>
        </MenuItem>
        <MenuItem>
          <FaShieldAlt /> Safety
          <ProfileArrow>
            {profileOpen ? <FaChevronDown /> : <FaChevronRight />}
          </ProfileArrow>
        </MenuItem>
        <MenuItem>
          <FaGift /> Refer and Earn
          <ProfileArrow>
            {profileOpen ? <FaChevronDown /> : <FaChevronRight />}
          </ProfileArrow>
        </MenuItem>
        <MenuItem>
          <FaGift /> My Rewards
          <ProfileArrow>
            {profileOpen ? <FaChevronDown /> : <FaChevronRight />}
          </ProfileArrow>
        </MenuItem>
        <MenuItem>
          <FaBell /> Notifications
          <ProfileArrow>
            {profileOpen ? <FaChevronDown /> : <FaChevronRight />}
          </ProfileArrow>
        </MenuItem>
        <MenuItem>
          <FaCog /> Settings
          <ProfileArrow>
            {profileOpen ? <FaChevronDown /> : <FaChevronRight />}
          </ProfileArrow>
        </MenuItem>
        <MenuItem>
          {/* <users /> About Us */}
        </MenuItem>
      </SideMenu>

      {/* Search Section */}
      <SearchSection>
        <SearchBar placeholder="Where are you going?" />
      </SearchSection>

      {/* Map Section */}
      <MapContainer>
        <GoogleMapReact
          bootstrapURLKeys={{ key: "YOUR_GOOGLE_MAPS_API_KEY" }}
          defaultCenter={{ lat: 12.9716, lng: 77.5946 }}
          defaultZoom={10}
        />
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
