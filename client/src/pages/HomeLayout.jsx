import React, { useState, useRef, useEffect } from "react";
import {
  FaBars,
  FaMapMarkerAlt,
  FaUser,
  FaHandsHelping,
  FaCog,
  FaChevronDown,
  FaArrowLeft,
  FaWallet,
  FaCar,
  FaShieldAlt,
  FaGift,
  FaBell,
} from "react-icons/fa";
import GoogleMapReact from "google-map-react";
import {
  Container,
  Header,
  Logo,
  MenuIcon,
  SideMenu,
  MenuItem,
  SidebarContent,
  SearchSection,
  SearchBar,
  MapContainer,
  ExploreSection,
  SectionTitle,
  ExploreGrid,
  ExploreItem,
  SubMenuSlide,
  BackButton,
} from "../assets/Wrappers/HomeLayout";

const HomePage = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSidebar, setActiveSidebar] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const [slideOpen, setSlideOpen] = useState(false);

  const sideMenuRef = useRef(null);
  const sidebarRef = useRef(null);

  // Function to toggle the main menu
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Function to open a sidebar
  const openSidebar = (sidebar) => {
    setActiveSidebar(sidebar);
    setMenuOpen(false); // Close the side menu when opening a sidebar
  };

  // Function to close the sidebar
  const closeSidebar = () => {
    setActiveSidebar(null);
  };

  // Function to toggle a submenu
  const toggleSubMenu = (menu) => {
    if (openSubMenu === menu) {
      setSlideOpen(false);
    } else {
      setOpenSubMenu(menu);
      setSlideOpen(true);
    }
  };

  const closeSubMenu = () => {
    setOpenSubMenu(null);
    setSlideOpen(false);
  };

  // Detect clicks outside the side menu
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sideMenuRef.current &&
        !sideMenuRef.current.contains(event.target)
      ) {
        setMenuOpen(false);
      }
    };

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  // Detect clicks outside the sidebar
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        closeSidebar();
      }
    };

    if (activeSidebar) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [activeSidebar]);

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
      <SideMenu ref={sideMenuRef} menuOpen={menuOpen}>
        <MenuItem onClick={() => openSidebar("profile")}>
          <FaUser /> Profile
        </MenuItem>
        <MenuItem onClick={() => openSidebar("help")}>
          <FaHandsHelping /> Help
        </MenuItem>
        <MenuItem onClick={() => openSidebar("payment")}>
          <FaWallet /> Payment
        </MenuItem>
        <MenuItem onClick={() => openSidebar("myRides")}>
          <FaCar /> My Rides
        </MenuItem>
        <MenuItem onClick={() => openSidebar("safety")}>
          <FaShieldAlt /> Safety
        </MenuItem>
        <MenuItem onClick={() => openSidebar("referEarn")}>
          <FaGift /> Refer and Earn
        </MenuItem>
        <MenuItem onClick={() => openSidebar("myRewards")}>
          <FaGift /> My Rewards
        </MenuItem>
        <MenuItem onClick={() => openSidebar("notifications")}>
          <FaBell /> Notifications
        </MenuItem>
        <MenuItem onClick={() => openSidebar("settings")}>
          <FaCog /> Settings
        </MenuItem>
        <MenuItem onClick={() => toggleSubMenu("profileSettings")}>
          <FaCog /> Profile Settings
          <FaChevronDown style={{ marginLeft: "auto" }} />
        </MenuItem>
      </SideMenu>

      {/* SubMenu Slide */}
      {slideOpen && (
        <SubMenuSlide slideOpen={slideOpen}>
          <BackButton onClick={closeSubMenu}>
            <FaArrowLeft /> Back
          </BackButton>
          {openSubMenu === "profileSettings" && (
            <div>
              <h3>Profile Settings</h3>
              <MenuItem>Change Password</MenuItem>
              <MenuItem>Update Profile Picture</MenuItem>
              <MenuItem>Manage Privacy</MenuItem>
            </div>
          )}
        </SubMenuSlide>
      )}

      {/* Content Sidebar (Dynamic) */}
      {activeSidebar && (
        <SidebarContent ref={sidebarRef}>
          <BackButton onClick={closeSidebar}>
            <FaArrowLeft /> Back
          </BackButton>
          <div>
            {activeSidebar === "profile" && <p>Profile content here</p>}
            {activeSidebar === "help" && <p>Help content here</p>}
            {activeSidebar === "payment" && <p>Payment content here</p>}
            {activeSidebar === "myRides" && <p>My Rides content here</p>}
            {activeSidebar === "safety" && <p>Safety content here</p>}
            {activeSidebar === "referEarn" && <p>Refer and Earn content here</p>}
            {activeSidebar === "myRewards" && <p>My Rewards content here</p>}
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
          bootstrapURLKeys={{ key: "AIzaSyDM9u38Og94OUqafCkOStORarCVyGxsl-w" }} // Replace with your actual API key
          defaultCenter={{ lat: 12.9716, lng: 77.5946 }}
          defaultZoom={10}
        >
          {/* Add markers or other map elements */}
        </GoogleMapReact>
      </MapContainer>

      {/* Explore Section */}
      <ExploreSection>
        <SectionTitle>Explore</SectionTitle>
        <ExploreGrid>
          <ExploreItem>
            <img src="src/assets/images/bike.png" alt="Bike" />
            Bike
          </ExploreItem>
          <ExploreItem>
            <img src="src/assets/images/auto.png" alt="Auto" />
            Auto
          </ExploreItem>
          <ExploreItem>
            <img src="src/assets/images/car.png" alt="Cab" />
            Cab
          </ExploreItem>
          <ExploreItem>
            <img src="src/assets/images/emergency.png" alt="Emergency" />
            Emergency
          </ExploreItem>
        </ExploreGrid>
      </ExploreSection>
    </Container>
  );
};

export default HomePage;
