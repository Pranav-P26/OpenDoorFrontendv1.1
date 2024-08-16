import React, { useState, useEffect } from "react";
import {
  AppBar,
  Toolbar,
  Button,
  IconButton,
  Menu,
  MenuItem,
  ListItemIcon,
  ListItemText,
  useTheme,
  useMediaQuery,
  styled,
  alpha,
  Box,
} from "@mui/material";
import {
  Menu as MenuIcon,
  Info as InfoIcon,
  ContactMail as ContactMailIcon,
  Stars as StarsIcon,
} from "@mui/icons-material";
import Logo from "../../../assets/Logo.png";

const AnimatedButton = styled(Button)(({ theme }) => ({
  position: "relative",
  overflow: "hidden",
  transition: "color 0.3s ease-in-out",
  color: theme.palette.primary.contrastText,
  "&::before": {
    content: '""',
    position: "absolute",
    top: 0,
    left: "-100%",
    width: "100%",
    height: "100%",
    background: alpha(theme.palette.common.white, 0.2),
    transition: "left 0.3s ease-in-out",
    zIndex: 0,
  },
  "&:hover": {
    color: theme.palette.error.main,
    "&::before": { left: "100%" },
  },
  "& .MuiButton-startIcon": { transition: "transform 0.3s ease-in-out" },
  "&:hover .MuiButton-startIcon": { transform: "scale(1.2) rotate(10deg)" },
  "& .MuiButton-label": { zIndex: 1, position: "relative" },
}));

const LogoComponent = ({ maxHeight, maxWidth, marginY, onClick }) => (
  <img
    style={{ 
      maxHeight, 
      maxWidth, 
      marginTop: marginY, 
      marginBottom: marginY,
      cursor: 'pointer' // Add this to show it's clickable
    }}
    alt="Your Logo"
    src={Logo}
    onClick={onClick}
  />
);

const navItems = [
  { name: "Our Mission", icon: <InfoIcon />, id: "our-mission" },
  { name: "Features", icon: <StarsIcon />, id: "features" },
  { name: "Contact", icon: <ContactMailIcon />, id: "contact" },
];


function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);
  const [showAppBar, setShowAppBar] = useState(false);

  const handleMenuToggle = (event) =>
    setAnchorEl(anchorEl ? null : event.currentTarget);

  useEffect(() => {
    const handleScroll = () => {
      setShowAppBar(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 64; // Adjust this value based on your actual navbar height
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;

      window.scrollTo({
        top: offsetPosition,
      });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
    });
  };

  return (
    <Box 
      sx={{ 
        position: "sticky", 
        top: 0, 
        zIndex: 1100,
        padding: "10px",
        transition: 'padding 0.3s'
      }}
    >
      <AppBar
        position="relative"
        sx={{
          backgroundColor: theme.palette.primary.main,
          borderRadius: "64px",
          opacity: showAppBar ? 1 : 0,
          visibility: showAppBar ? "visible" : "hidden",
          transition: "opacity 0.3s ease-in-out, visibility 0.3s ease-in-out",
          maxWidth: "calc(100% - 20px)",
          left: "50%",
          transform: "translateX(-50%)",
          right: 0,
        }}
      >
        <Toolbar sx={{ justifyContent: "space-between" }}>
          <LogoComponent
            maxHeight={50}
            maxWidth="200px"
            marginY={theme.spacing(2)}
            onClick={scrollToTop} // Add this line
          />
          {isMobile ? (
            <IconButton
              color="inherit"
              aria-label="open menu"
              edge="start"
              onClick={handleMenuToggle}
              sx={{
                order: 3,
                transition: "transform 0.3s",
                "&:hover": { transform: "rotate(180deg)" },
              }}
            >
              <MenuIcon />
            </IconButton>
          ) : (
            <div
              style={{ display: "flex", justifyContent: "center", flexGrow: 1 }}
            >
              {navItems.map((item) => (
                <AnimatedButton 
                  key={item.name} 
                  startIcon={item.icon}
                  onClick={() => scrollToSection(item.id)}
                >
                  {item.name}
                </AnimatedButton>
              ))}
            </div>
          )}
          <Button
            variant="contained"
            color="secondary"
            sx={{
              display: { xs: "none", sm: "block" },
              borderRadius: "64px",
              whiteSpace: "nowrap",
              transition: "all 0.3s",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: theme.shadows[4],
              },
            }}
          >
            Start Learning
          </Button>
        </Toolbar>
      </AppBar>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuToggle}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem onClick={() => {
          handleMenuToggle();
          scrollToTop();
        }}>
          <LogoComponent
            maxHeight={40}
            maxWidth="100%"
            marginY={theme.spacing(1)}
          />
        </MenuItem>
        {navItems.map((item) => (
          <MenuItem
            key={item.name}
            onClick={() => {
              handleMenuToggle();
              scrollToSection(item.id);
            }}
            sx={{
              transition: "background-color 0.3s",
              "&:hover": {
                backgroundColor: alpha(theme.palette.primary.main, 0.1),
              },
            }}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.name}</ListItemText>
          </MenuItem>
        ))}
        <MenuItem onClick={handleMenuToggle}>
          <Button
            variant="contained"
            color="secondary"
            fullWidth
            sx={{
              transition: "all 0.3s",
              "&:hover": {
                transform: "translateY(-3px)",
                boxShadow: theme.shadows[4],
              },
            }}
          >
            Start Learning
          </Button>
        </MenuItem>
      </Menu>
    </Box>
  );
}

export default Navbar;