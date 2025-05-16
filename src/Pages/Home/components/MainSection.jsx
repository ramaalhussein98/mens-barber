import { Box, Button } from "@mui/material";
import React from "react";
import { LandingImage, LandingImageSmall } from "../../../assets/logos";
import "../../../assets/css/landingpage.css";
import { useSmallScreen } from "../../../hooks/useSmallScreen";
import { Link } from "react-router-dom";

const MainSection = () => {
  const { isSM } = useSmallScreen();
  return (
    <div className="langingImgContiner">
      <img
        src={isSM ? LandingImageSmall : LandingImage}
        className="langingImgContinerImg"
        alt="LandingPage"
      />
      <Box className="MainSectionBox">
        <div>
          <p className="falste">Sharper Cuts</p>
          <p>Smoother Experience</p>
          <Button className="bookNowMainSection" component={Link} to="/book">
            Book Now
          </Button>
        </div>
      </Box>
    </div>
  );
};

export default MainSection;
