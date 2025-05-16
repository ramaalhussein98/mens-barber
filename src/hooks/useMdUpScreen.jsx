import { useTheme } from "@emotion/react";
import { useMediaQuery } from "@mui/material";

export const useMdUpScreen = () => {
  const theme = useTheme();
  const isMdUP = useMediaQuery(theme.breakpoints.up("md"));
  return { isMdUP };
};
