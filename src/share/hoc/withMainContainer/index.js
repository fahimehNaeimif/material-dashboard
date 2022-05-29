import React from "react";
import { Box } from "@mui/material";
import Toolbar from '@mui/material/Toolbar';
import Header from "../containerPartilas/header";
import Footer from "../containerPartilas/footer";
import Aside from "../containerPartilas/aside";
import WrapperStyle from "./style";

const drawerWidth = 240;


const withMainContainer = (WrapperComponent) => {

  const MainContainer = () => {

    const [mobileOpen, setMobileOpen] = React.useState(false);

    const handleDrawerToggle = () => {
      setMobileOpen(!mobileOpen);
    };
  

    return (
      <WrapperStyle className="wrapper">
        <Box sx={{ display: "flex" }}>
          <Header drawerWidth={drawerWidth} mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
          <Aside drawerWidth={drawerWidth}  mobileOpen={mobileOpen} handleDrawerToggle={handleDrawerToggle} />
          <Box
            component="main"
            sx={{
              flexGrow: 1,
              p: 3,
              width: { sm: `calc(100% - ${drawerWidth}px)` },
            }}
          >
            <Toolbar />
            <WrapperComponent />
          </Box>
        </Box>
      </WrapperStyle>
    );
  };
  return MainContainer;
};

export default withMainContainer;
