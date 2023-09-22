// DrawerAppBar.tsx

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Avatar from "@mui/material/Avatar";
import LogoWhite from "../assets/LogoWhite.png";

interface Props {
  window?: () => Window;
  setCurrentPage: React.Dispatch<React.SetStateAction<string>>;
}

const drawerWidth = 240;
const navItems = ["Dashboard", "Search", "Contact Us", "Sign in"];

export default function DrawerAppBar(props: Props) {
  const { window, setCurrentPage } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [showProfileInfo, setShowProfileInfo] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  const handleProfileHover = (isHovered: boolean) => {
    setShowProfileInfo(isHovered);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Legally Yours
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton
              sx={{ textAlign: "center" }}
              onClick={() => handleNavigate(item.toLowerCase())}
            >
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    console.log(page);
    setMobileOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar component="nav" sx={{ backgroundColor: "#023E8A" }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            <img
              src={LogoWhite}
              alt="Logo"
              style={{ height: "85px", padding: "8px 0" }}
            />
          </Typography>
          <Box sx={{ display: { xs: "none", sm: "flex" } }}>
            {navItems.map((item) => (
              <Button
                key={item}
                sx={{
                  position: "relative",
                  color: "#fff",
                  backgroundColor: "#023E8A",
                  fontSize: "1.0rem",
                  "&:hover": {
                    backgroundColor: "#03045E",
                  },
                }}
                onClick={() => handleNavigate(item.toLowerCase())}
              >
                {item}
              </Button>
            ))}
          </Box>
          <Avatar
            alt="Profile"
            src={isLoggedIn ? "url_to_user_avatar" : "url_to_guest_avatar"}
            onMouseEnter={() => handleProfileHover(true)}
            onMouseLeave={() => handleProfileHover(false)}
            sx={{
              width: 30,
              height: 30,
              marginLeft: "10px",
            }}
          />
          {showProfileInfo && (
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                right: "0",
                transform: "translateY(-50%)",
                color: "#000",
                fontSize: "0.8rem",
                background: "#fff",
                padding: "2px 5px",
                borderRadius: "5px",
              }}
            >
              {isLoggedIn ? "User" : "Guest"}
            </Box>
          )}
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ p: 3 }}>
        <Toolbar />
      </Box>
    </Box>
  );
}
