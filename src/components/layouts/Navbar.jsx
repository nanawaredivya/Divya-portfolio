import React from "react";
import { Link } from "react-router-dom";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Avatar,
  useMediaQuery,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import './Navbar.css'

const Navbar = () => {
  const isMobile = useMediaQuery("(max-width:600px)");
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  const [activeLink, setActiveLink] = React.useState("");

  const handleDrawerOpen = () => {
    setIsDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setIsDrawerOpen(false);
  };
  const handleLinkClick = (link) => {
    setActiveLink(link); 
  };

  return (
    <>
      <AppBar position="static" sx={{ background: "#221954" }}>
        <Toolbar sx={{ justifyContent: "space-between" }}>
          {isMobile ? (
            <>
              <IconButton
                edge="start"
                color="inherit"
                aria-label="menu"
                onClick={handleDrawerOpen}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                anchor="left"
                open={isDrawerOpen}
                onClose={handleDrawerClose}
              >
                <List>
                  <ListItem
                    button
                    component={Link}
                    to="/home"
                    onClick={() => {
                      handleDrawerClose();
                      handleLinkClick("/home");
                    }}
                    className={activeLink === "/home" ? "active" : ""}
                  >
                    <ListItemText>Home</ListItemText>
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/about"
                    onClick={() => {
                      handleDrawerClose();
                      handleLinkClick("/about");
                    }}
                    className={activeLink === "/about" ? "active" : ""}
                  >
                    <ListItemText>About</ListItemText>
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/project"
                    onClick={() => {
                      handleDrawerClose();
                      handleLinkClick("/project");
                    }}
                    className={activeLink === "/project" ? "active" : ""}
                  >
                    <ListItemText>Projects</ListItemText>
                  </ListItem>
                  <ListItem
                    button
                    component={Link}
                    to="/contact"
                    onClick={() => {
                      handleDrawerClose();
                      handleLinkClick("/contact");
                    }}
                    className={activeLink === "/contact" ? "active" : ""}
                  >
                    <ListItemText>Contact</ListItemText>
                  </ListItem>
                </List>
              </Drawer>
            </>
          ) : (
            <>
              <Typography
                variant="h6"
                to="/"
                sx={{
                  flexGrow: 1,
                  textDecoration: "none",
                  color: "inherit",
                  fontWeight: "bold",
                  mr: 3,
                }}
              >
                <div style={{ display: "flex", alignItems: "center" }}>
                  <Avatar
                    src="/Assets/divya.jpg"
                    alt="Avatar"
                    sx={{
                      width: 56,
                      height: 56,
                    }}
                  />
                  <Typography
                    variant="body1"
                    sx={{
                      marginLeft: 2,
                      fontSize: "2rem",
                      fontFamily: "Georgia, serif",
                      color: "#962ac9",
                      fontWeight: "bold"
                    }}
                  >
                    DN
                  </Typography>
                </div>
              </Typography>

              <Button
                component={Link}
                to="/home"
                color="inherit"
                sx={{ fontSize: "1rem", mr: 9 }}
                className={activeLink === "/home" ? "active" : ""}
                onClick={() => handleLinkClick("/home")}
              >
                Home
              </Button>
              <Button
                component={Link}
                to="/about"
                color="inherit"
                sx={{ fontSize: "1rem", mr: 9 }}
                className={activeLink === "/about" ? "active" : ""}
                onClick={() => handleLinkClick("/about")}
              >
                About
              </Button>
              <Button
                component={Link}
                to="/project"
                color="inherit"
                sx={{ fontSize: "1rem", mr: 9 }}
                className={activeLink === "/project" ? "active" : ""}
                onClick={() => handleLinkClick("/project")}
              >
                Projects
              </Button>
              <Button
                component={Link}
                to="/contact"
                color="inherit"
                sx={{ fontSize: "1rem", mr: 9 }}
                className={activeLink === "/contact" ? "active" : ""}
                onClick={() => handleLinkClick("/contact")}
              >
                Contact
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
