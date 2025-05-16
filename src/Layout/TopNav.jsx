import React, { useState } from "react";
import {
  AppBar,
  Box,
  Button,
  Drawer,
  Hidden,
  IconButton,
  List,
  ListItem,
  ListItemText,
  Toolbar,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { LogoNav } from "../assets/logos";
import "../assets/css/layout.css";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom"; // Import useLocation hook
import CloseIcon from "@mui/icons-material/Close";
const TopNav = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const theme = useTheme();
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const location = useLocation(); // Get the current location

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    // Close the drawer if it's open (for mobile)
    if (drawerOpen) {
      toggleDrawer();
    }
  };

  const handleGalleryClick = () => {
    if (location.pathname === "/about") {
      navigate(`/`);
      setTimeout(() => {
        scrollToSection("gallery");
      }, 100);
    } else {
      scrollToSection("gallery");
    }
  };

  return (
    <div>
      <AppBar position="static" className="AppBar_class">
        <Toolbar className="navClass">
          <Box className="logoNav" component={Link} to="/" sx={{ flexGrow: 1 }}>
            <img src={LogoNav} className="img_logo" alt="Logo" />
          </Box>
          <Hidden smDown>
            {/* Show links only on screens larger than small */}
            <Button
              component={Link}
              to="/"
              className="nav_links_btn"
              onClick={() => scrollToSection("home")}
            >
              HOME
            </Button>
            <Button
              className="nav_links_btn"
              onClick={handleGalleryClick} // Use the custom handler for Gallery click
            >
              GALLERY
            </Button>
            <Button component={Link} to="/about" className="nav_links_btn">
              ABOUT US
            </Button>
          </Hidden>

          <Button className="book_now_btn" component={Link} to="/book">
            {" "}
            BOOK NOW
          </Button>
          <IconButton
            onClick={toggleDrawer}
            edge="end"
            color="inherit"
            aria-label="menu"
            sx={{
              display: isSmallScreen ? "block" : "none",
              marginRight: "0px",
            }}
          >
            <MenuIcon className="menu_icon" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer}>
        <CloseIcon
          onClick={toggleDrawer}
          sx={{
            cursor: "pointer",
            position: "absolute",
            left: "1rem",
            top: "1rem",
          }}
        />
        <div
          className="DrawerStyle"
          onClick={toggleDrawer}
          onKeyDown={toggleDrawer}
        >
          <List>
            <ListItem className="listItemStyle" component={Link} to="/">
              <ListItemText className="ulSryleDrawer" primary="HOME" />
            </ListItem>
            <ListItem
              className="listItemStyle"
              button
              onClick={handleGalleryClick}
            >
              <ListItemText className="ulSryleDrawer" primary="GALLERY" />
            </ListItem>
            <ListItem
              className="listItemStyle"
              button
              component={Link}
              to="/about"
            >
              <ListItemText className="ulSryleDrawer" primary="ABOUT" />
            </ListItem>
          </List>
        </div>
      </Drawer>
    </div>
  );
};

export default TopNav;
