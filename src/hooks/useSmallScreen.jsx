import { useMediaQuery, useTheme } from "@mui/material";

export const useSmallScreen = () => {
  const theme = useTheme();
  const isSM = useMediaQuery(theme.breakpoints.down("sm"));
  return { isSM };
};
