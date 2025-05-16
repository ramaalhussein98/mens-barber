import React from "react";
import { CoomingDesktop, CoomingPhone } from "../../../assets/Photos";
import { Box } from "@mui/material";
import { useMdUpScreen } from "../../../hooks/useMdUpScreen";

const CommingSoon = () => {
  const { isMdUP } = useMdUpScreen();
  return (
    <Box sx={{ width: "100%", height: "100vh" }}>
      <img
        src={isMdUP ? CoomingDesktop : CoomingPhone}
        alt="comming_soon"
        style={{ width: "100%", height: "100%", objectFit: "cover" }}
      />
    </Box>
  );
};

export default CommingSoon;
