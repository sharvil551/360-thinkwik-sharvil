import { useState } from "react";
import Sidebar from "./Sidebar";
import { Box } from "@mui/material";
import Navbar from "./Navbar";
type HomeProps = {
  children: JSX.Element | any;
};

export const Home = ({ children }: HomeProps): JSX.Element => {
  const [isSidebarOpen, setSidebarOpen] = useState<boolean>(false);

  const handleMenuToggle = () => {
    setSidebarOpen((o) => !o);
  };
  const sidebarWidth = 240; 

  const contentStyle = {
    paddingLeft: isSidebarOpen ? `${sidebarWidth}px` : "35px",
    transition:  "margin 0.3s ease-in-out", 
  };

  return (
    <>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Navbar onMenuToggle={handleMenuToggle} />
         <Sidebar open={isSidebarOpen} sideBarWidth={sidebarWidth} />
        <Box component="main" sx={{ flexGrow: 1, p: 4, ...contentStyle}} >
          {children}
        </Box>
      </Box>
    </>
  );
};
