import React, { useState } from "react";
import {
  AppBar,
  Box,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  FormControl,
  Select,
  MenuItem,
  Drawer,
  List,
  TextField,
  InputAdornment,
  Tabs,
  Tab,
  ListItem,
  ListItemText,
  Button,
  Divider,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import MenuIcon from "@mui/icons-material/Menu";
import logo from "../../assets/Images/arzaanlogo.webp";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TopBar from "./TopBar";
import BottomHeader from "./BottomHeader";
import CloseIcon from "@mui/icons-material/Close";
import { mobileMenuItems } from "../../DummyData/Categories";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import GoogleIcon from "@mui/icons-material/Google";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

// Menu items - you can customize these
const menuItems = [
  'HOME',
  'SHOP',
  'ABOUT US',
  'CONTACT',
  'MY ACCOUNT',
  'TRACK ORDER',
  'DEALS',
];

export default function PrimarySearchAppBar() {
  const [category, setCategory] = useState("All");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [tabValue, setTabValue] = useState(0);

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  // Determine which items to show based on active tab
  const displayItems = tabValue === 0 ? menuItems : mobileMenuItems;

  return (
    <Box sx={{ flexGrow: 1 }}>
      <TopBar />

      {/* Desktop Header - Hidden on xs/sm, visible on md and up */}
      <Box sx={{ display: { xs: "none", md: "block" } }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{ backgroundColor: "#fff", color: "#000" }}
        >
          <Toolbar className="justify-between px-12">
            {/* Logo */}
            <div className="ml-4 p-2">
              <img src={logo} alt="logo" className="h-10" />
            </div>

            {/* Search bar */}
            <div className="flex justify-center flex-1 mx-6">
              <div className="flex items-center w-full max-w-4xl mt-2 border border-[#b2d591] overflow-hidden">
                {/* Category dropdown */}
                <div className="min-w-[200px] border-r border-gray-300">
                  <FormControl fullWidth variant="standard">
                    <Select
                      disableUnderline
                      value={category}
                      onChange={handleCategoryChange}
                      className="text-sm px-2"
                      sx={{
                        "& .MuiSelect-select": {
                          display: "flex",
                          alignItems: "center",
                          py: 1,
                        },
                      }}
                    >
                      <MenuItem value="All">All Categories</MenuItem>
                      <MenuItem value="Electronics">Electronics</MenuItem>
                      <MenuItem value="Fashion">Fashion</MenuItem>
                      <MenuItem value="Home">Home</MenuItem>
                    </Select>
                  </FormControl>
                </div>

                {/* Input field */}
                <InputBase
                  placeholder="Search in..."
                  className="flex-1 px-4 py-2"
                />

                {/* Search button */}
                <IconButton className="bg-[#61ab01] text-white rounded-none px-8 py-4 hover:bg-[#61ab01]">
                  <SearchIcon />
                </IconButton>
              </div>
            </div>

            {/* Right side icons */}
            <div className="flex mr-4 gap-2">
              <IconButton className="flex flex-col">
                <PersonIcon />
                <Typography className="text-xs">Account</Typography>
              </IconButton>

              <IconButton className="flex flex-col">
                <Badge
                  badgeContent={1}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#6bb013",
                      color: "white",
                    },
                  }}
                >
                  <FavoriteBorderIcon />
                </Badge>
                <Typography className="text-xs">WishList</Typography>
              </IconButton>

              <IconButton className="flex flex-col">
                <Badge
                  badgeContent={1}
                  sx={{
                    "& .MuiBadge-badge": {
                      backgroundColor: "#6bb013",
                      color: "white",
                    },
                  }}
                >
                  <ShoppingCartIcon />
                </Badge>
                <Typography className="text-xs">Cart</Typography>
              </IconButton>
            </div>
          </Toolbar>
        </AppBar>
      </Box>

      {/* Mobile Header - Visible on xs/sm, hidden on md and up */}
      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <AppBar
          position="static"
          elevation={0}
          sx={{ backgroundColor: "#fff", color: "#000" }}
        >
          <Toolbar className="justify-between px-4">
            {/* Menu Icon */}
            <IconButton
              onClick={() => setMobileMenuOpen(true)}
              className="text-black"
            >
              <MenuIcon />
            </IconButton>

            {/* Logo */}
            <img src={logo} alt="logo" className="h-9" />

            {/* Cart Icon */}
            <IconButton className="text-black">
              <Badge
                badgeContent={1}
                sx={{
                  "& .MuiBadge-badge": {
                    backgroundColor: "#6bb013",
                    color: "white",
                  },
                }}
              >
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Toolbar>

          {/* Mobile Search Bar */}
          <div className="px-4 pb-4">
            <div className="flex border border-gray-300 rounded overflow-hidden">
              <input
                placeholder="Search in..."
                className="flex-1 px-4 py-2 outline-none"
              />
              <IconButton className="bg-[#61ab01] text-white rounded-none px-6 hover:bg-[#5a9501]">
                <SearchIcon />
              </IconButton>
            </div>
          </div>
        </AppBar>
      </Box>

      {/* Drawer Menu */}
      <Drawer
        anchor="left"
        open={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        PaperProps={{
          sx: { width: 380, maxWidth: "90vw" },
        }}
      >
        <Box sx={{ height: "100%", display: "flex", flexDirection: "column" }}>
          {/* Header with Search and Close */}
          <Box sx={{ p: 2 }}>
            <Box sx={{ display: "flex", gap: 1, mb: 2 }}>
              <TextField
                fullWidth
                placeholder="Search in..."
                size="small"
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton
                        sx={{
                          bgcolor: "#61ab01",
                          color: "white",
                          borderRadius: 0,
                          "&:hover": { bgcolor: "#5a9501" },
                        }}
                      >
                        <SearchIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                  sx: { pr: 0 },
                }}
              />
              <IconButton onClick={() => setMobileMenuOpen(false)}>
                <CloseIcon />
              </IconButton>
            </Box>

            {/* Tabs */}
            <Tabs
              value={tabValue}
              onChange={(event, newValue) => setTabValue(newValue)}
              sx={{
                minHeight: 40,
                "& .MuiTab-root": {
                  minHeight: 40,
                  textTransform: "uppercase",
                  fontWeight: 600,
                  fontSize: "0.875rem",
                },
                "& .Mui-selected": {
                  color: "#61ab01",
                },
                "& .MuiTabs-indicator": {
                  backgroundColor: "#61ab01",
                },
              }}
            >
              <Tab label="MENU" />
              <Tab label="CATEGORIES" />
            </Tabs>
          </Box>

          <Divider />

          {/* Scrollable Menu Items + Footer */}
          <Box sx={{ flexGrow: 1, overflowY: "auto" }}>
            {/* Tab Content - Shows different items based on tab */}
            <List sx={{ py: 0 }}>
              {displayItems.map((item, index) => (
                <React.Fragment key={item}>
                  <ListItem
                    sx={{
                      py: 1.5,
                      cursor: "pointer",
                      "&:hover": { bgcolor: "#f5f5f5" },
                    }}
                  >
                    <ListItemText
                      primary={item}
                      primaryTypographyProps={{
                        fontSize: "0.9rem",
                        color: "#666",
                      }}
                    />
                  </ListItem>
                  {index < displayItems.length - 1 && <Divider />}
                </React.Fragment>
              ))}
            </List>

            {/* Footer Section */}
            <Box sx={{ px: 2, pb: 2 }}>
              <Divider sx={{ my: 2 }} />

              {/* Contact Info */}
              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <PhoneIcon sx={{ fontSize: 18, color: "#666" }} />
                <Typography variant="body2" sx={{ color: "#666" }}>
                  CALL: 03417707717
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
                <EmailIcon sx={{ fontSize: 18, color: "#666" }} />
                <Typography variant="body2" sx={{ color: "#666", fontSize: "0.75rem" }}>
                  EMAIL: SALES.ARZAAN.PK@GMAIL.COM
                </Typography>
              </Box>

              <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
                <PersonIcon sx={{ fontSize: 18, color: "#666" }} />
                <Typography variant="body2" sx={{ color: "#666" }}>
                  LOGIN
                </Typography>
              </Box>

              {/* Currency Selector */}
              <Typography variant="body2" sx={{ color: "#666", mb: 1 }}>
                SELECT CURRENCY:
              </Typography>
              <Button
                variant="outlined"
                size="small"
                sx={{
                  borderColor: "#61ab01",
                  color: "#61ab01",
                  mb: 2,
                  "&:hover": {
                    borderColor: "#5a9501",
                    bgcolor: "rgba(97, 171, 1, 0.04)",
                  },
                }}
              >
                PKR
              </Button>

              {/* Social Icons */}
              <Box
                sx={{ display: "flex", justifyContent: "center", gap: 1, mb: 2 }}
              >
                {[
                  FacebookIcon,
                  TwitterIcon,
                  GoogleIcon,
                  InstagramIcon,
                  YouTubeIcon,
                ].map((Icon, i) => (
                  <IconButton
                    key={i}
                    size="small"
                    sx={{
                      border: "1px solid #ddd",
                      "&:hover": { bgcolor: "#f5f5f5" },
                    }}
                  >
                    <Icon sx={{ fontSize: 20, color: "#666" }} />
                  </IconButton>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Drawer>

      <BottomHeader />
    </Box>
  );
}