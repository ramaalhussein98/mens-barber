import { Box, Grid } from "@mui/material";
import React from "react";
import { LogoFooter, LogoFooterPng } from "../assets/logos";
import { Link, useLocation, useNavigate } from "react-router-dom";

const Footer = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
    <div className="FooterContainer">
      <Grid container spacing={1} sx={{ justifyContent: "center" }}>
        <Grid item xs={12} sm={5}>
          <img src={LogoFooter} className="imgFooter" />
        </Grid>
        <Grid
          item
          xs={6}
          sm={2}
          sx={{
            justifyContent: { xs: "center", md: "initial" },
            display: "flex",
          }}
        >
          <div className="footer_section">
            <p className="title">Useful Links</p>
            <ul className="footerUl">
              <li>
                <Link to="/">HOME</Link>
              </li>
              <li onClick={handleGalleryClick}>GALLERY</li>
              <li>
                <Link to="/about">ABOUT US</Link>
              </li>
              <li>BOOK</li>
              <li>SERVICE</li>
            </ul>
          </div>
        </Grid>
        <Grid
          item
          xs={6}
          sm={2}
          sx={{
            justifyContent: { xs: "right", md: "initial" },
            display: "flex",
          }}
        >
          <div className="footer_section">
            <p className="title"> Contact</p>
            <ul className="footerUl">
              <a href="https://www.instagram.com/generation_gentlemen/?igsh=MTlvMjRlcGNvcHByYw%3D%3D">
                <li>INSTAGRAM</li>
              </a>
              <a href="https://www.facebook.com/people/Generation-Gentlemen/61556773955462/?mibextid=ZbWKwL">
                <li>FACEBOOK</li>
              </a>
              {/* <li>
                <a href=""> 0971 763 712 44</a>
              </li>
              <li>
                <a href=""> 0971 763 712 43</a>
              </li> */}
              <li>
                <a
                  href="https://maps.app.goo.gl/aQGpUTfvE1cQUKwD7?g_st=iwb"
                  target="_blank"
                >
                  UAE, Dubai , business bay , bay square , building 8 , retail 6
                </a>
              </li>
            </ul>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
