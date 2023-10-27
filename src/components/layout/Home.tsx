import { useState } from "react";
import Sidebar from "./Sidebar";
import { Box, CssBaseline } from "@mui/material";
import Navbar from "./Navbar";
import "../../assets/main.scss";

type HomeProps = {
  children: JSX.Element | any;
};

export const Home = ({ children }: HomeProps): JSX.Element => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setSidebarOpen((o) => !o);
  };
  const sidebarWidth = 230;

  // const contentStyle = {
  //   paddingLeft: isSidebarOpen ? `${sidebarWidth}px` : "50px",
  //   transition: "width 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
  // };

  return (
    <>
      {/* <Box component="div">
        <Navbar onMenuToggle={handleMenuToggle} />
        <Sidebar open={isSidebarOpen} sideBarWidth={sidebarWidth} />
        <Box component="main" sx={{ flexGrow: 1, p: 3, ...contentStyle }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "0px 8px",
              minHeight: "64px",
            }}
          ></div>
          
          {children}
        </Box>
      </Box> */}

      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <Navbar onMenuToggle={handleMenuToggle} />
        <Sidebar open={isSidebarOpen} sideBarWidth={sidebarWidth} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 2,
            marginLeft: isSidebarOpen ? "20px" : "5px",
            transition: "margin-left 200ms cubic-bezier(0.4, 0, 0.6, 1)",
            // marginLeft: isSidebarOpen ? '10px' : "0px",
            //  transition: isSidebarOpen?"margin-left 200ms cubic-bezier(0.4, 0, 0.6, 1) 10ms ": "margin 200ms cubic-bezier(0.4, 0, 0.6, 1) 10ms"
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "flex-end",
              padding: "0px 8px",
              minHeight: "64px",
            }}
          ></div>

          {/* <Grid container >
            <Grid item xs={12}> */}
          {children}
          {/* </Grid>
          </Grid> */}
        </Box>
      </Box>
    </>
  );
};
