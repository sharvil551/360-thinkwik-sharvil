import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Avatar, Stack } from "@mui/material";
import { useNavigate } from "react-router";

interface NavbarProps {
  onMenuToggle: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onMenuToggle }) => {
  const navigate = useNavigate();
  const isLoggedIn = localStorage.getItem("loggedIn");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" sx={{ background: "rgb(95, 158, 160)" }}>
        <Toolbar>
          {isLoggedIn !== null && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={onMenuToggle}
            >
              <MenuIcon />
            </IconButton>
          )}

          <Box sx={{ flexGrow: 1 }}>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "baseline",
              }}
            >
              <Typography variant="h6" component="div" noWrap>
                thinkwik360
              </Typography>

              <Typography
                variant="caption"
                component="span"
                sx={{ marginLeft: "16px" }}
              >
                1.0.6 (51bf85)
              </Typography>
            </Stack>
          </Box>

          {isLoggedIn !== null && (
            <Avatar
              onClick={() => {
                navigate("/my-profile");
              }}
              alt="Sharvil Patel"
              sx={{ maxWidth: "100%", maxHeight: "100%", cursor: "pointer" }}
            >
              SP
            </Avatar>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default Navbar;
