import * as React from "react";
import { styled, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import DashboardIcon from "@mui/icons-material/Dashboard";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PersonIcon from "@mui/icons-material/Person";
import LogoutIcon from "@mui/icons-material/Logout";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ListItem, Typography } from "@mui/material";

interface SidebarProps {
  open: boolean;
  onClose?: () => void;
  sideBarWidth?: number;
}

const Sidebar: React.FC<SidebarProps> = ({ open, sideBarWidth }) => {
  const openedMixin = (theme: Theme): CSSObject => ({
    width: sideBarWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: "hidden",
    zIndex: 1000,
  });

  const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: "hidden",
    width: `60px`,
    zIndex: 1000,
    [theme.breakpoints.up("sm")]: {
      width: `60px`,
    },
  });

  const Drawer = styled(MuiDrawer, {
    shouldForwardProp: (prop) => prop !== "open",
  })(({ theme, open }) => ({
    width: sideBarWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...(open && {
      ...openedMixin(theme),
      "& .MuiDrawer-paper": openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      "& .MuiDrawer-paper": closedMixin(theme),
    }),
  }));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [selected, setSelected] = useState<string>("");
  const location = useLocation();
  const navigate = useNavigate();

  const handleListItemClick = (path: string) => {
    setSelected(path);
  };
  const isLoggedIn = localStorage.getItem("loggedIn");

  return (
    <>
      {isLoggedIn !== null && (
        <Drawer variant="permanent" anchor="left" open={open}>
          <List sx={{ paddingTop: "4rem" }}>
            <ListItemButton
              component={Link}
              to="/dashboard"
              onClick={() => handleListItemClick("/dashboard")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&.Mui-selected": {
                  backgroundColor: "transparent",
                },
              }}
              selected={location.pathname === "/dashboard"}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:
                    location.pathname === "/dashboard"
                      ? "rgb(95, 158, 160)"
                      : "none",
                }}
              >
                <DashboardIcon />
              </ListItemIcon>

              <ListItemText
                primary="Dashboard"
                sx={{
                  opacity: open ? 1 : 0,
                  color:
                    location.pathname === "/dashboard"
                      ? "rgb(95, 158, 160)"
                      : "none",
                }}
              />
            </ListItemButton>

            <Divider />

            <ListItemButton
              component={Link}
              to="/leaves"
              onClick={() => handleListItemClick("/leaves")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&.Mui-selected": {
                  backgroundColor: "transparent",
                },
              }}
              selected={location.pathname === "/leaves"}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:
                    location.pathname === "/leaves"
                      ? "rgb(95, 158, 160)"
                      : "none",
                }}
              >
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText
                primary="Leaves"
                sx={{
                  opacity: open ? 1 : 0,
                  color:
                    location.pathname === "/leaves"
                      ? "rgb(95, 158, 160)"
                      : "none",
                }}
              />
            </ListItemButton>

            <ListItemButton
              component={Link}
              to="/leaves-summary"
              onClick={() => handleListItemClick("/leaves-summary")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&.Mui-selected": {
                  backgroundColor: "transparent",
                },
              }}
              selected={location.pathname === "/leaves-summary"}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:
                    location.pathname === "/leaves-summary"
                      ? "rgb(95, 158, 160)"
                      : "none",
                }}
              >
                <CalendarMonthIcon />
              </ListItemIcon>
              <ListItemText
                primary="Leaves Summary"
                sx={{
                  opacity: open ? 1 : 0,
                  color:
                    location.pathname === "/leaves-summary"
                      ? "rgb(95, 158, 160)"
                      : "none",
                }}
              />
            </ListItemButton>

            <Divider />

            {open && (
              <ListItem>
                <Typography variant="overline">
                  LOGGED IN AS SHARVIL PATEL
                </Typography>
              </ListItem>
            )}

            <ListItemButton
              component={Link}
              to="/my-profile"
              onClick={() => handleListItemClick("/my-profile")}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                "&.Mui-selected": {
                  backgroundColor: "transparent",
                },
              }}
              selected={location.pathname === "/my-profile"}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color:
                    location.pathname === "/my-profile"
                      ? "rgb(95, 158, 160)"
                      : "none",
                }}
              >
                <PersonIcon />
              </ListItemIcon>
              <ListItemText
                primary="My Profile"
                sx={{
                  opacity: open ? 1 : 0,
                  color:
                    location.pathname === "/my-profile"
                      ? "rgb(95, 158, 160)"
                      : "none",
                }}
              />
            </ListItemButton>

            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
              onClick={() => {
                localStorage.removeItem("loggedIn");

                navigate("/login");
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                }}
              >
                <LogoutIcon />
              </ListItemIcon>
              <ListItemText primary="Logout" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </List>
        </Drawer>
      )}
    </>
  );
};

export default Sidebar;
