import React, { useState } from "react";
import { styled, alpha } from "@mui/material/styles";
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
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import logo from "../../assets/Images/arzaanlogo.webp";
import PersonIcon from "@mui/icons-material/Person";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import TopBar from "./TopBar";

// Styled search container
const Search = styled("div")(({ theme }) => ({
  position: "relative",
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  width: "100%",
  maxWidth: 1000,
  marginTop: 10,
  display: "flex",
  borderRadius: 0,
  alignItems: "center",
  border: "1px solid #b2d591",
  overflow: "hidden",
}));

// Styled input field
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  flex: 1,
  color: "inherit",
  padding: theme.spacing(1, 2),
  "& .MuiInputBase-input": {
    width: "100%",
  },
}));

export default function PrimarySearchAppBar() {

  const [category, setCategory] = useState("All");

  const handleCategoryChange = (event) => {
    setCategory(event.target.value);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <TopBar />
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "#fff", color: "#000" }}
      >
        <Toolbar sx={{ justifyContent: "space-between", px: 6 }}>
          {/* Logo  */}
          <Box sx={{ ml: 2 }}>
            <Typography sx={{ p: 1 }}>
              <img src={logo} alt="logo" style={{ height: 40 }} />
            </Typography>
          </Box>

          {/* Search bar - Center */}
          <Box sx={{ display: "flex", justifyContent: "center", flex: 1, mx: 3 }}>
            <Search>
              {/* Category dropdown on left */}
              <Box sx={{ minWidth: 200, borderRight: "1px solid #ccc" }}>
                <FormControl fullWidth variant="standard">
                  <Select
                    disableUnderline
                    value={category}
                    onChange={handleCategoryChange}
                    sx={{
                      color: "#333",
                      fontSize: 14,
                      px: 1,
                      "& .MuiSelect-select": {
                        display: "flex",
                        alignItems: "center",
                        py: 0.8,
                      },
                    }}
                  >
                    <MenuItem value="All">All Categories</MenuItem>
                    <MenuItem value="Electronics">Electronics</MenuItem>
                    <MenuItem value="Fashion">Fashion</MenuItem>
                    <MenuItem value="Home">Home</MenuItem>
                  </Select>
                </FormControl>
              </Box>

              {/* Input field */}
              <StyledInputBase placeholder="Search in..." />

              {/* Search button */}
              <IconButton
                sx={{
                  backgroundColor: "#61ab01",
                  color: "white",
                  borderRadius: 0,
                  px: 4,
                  py: 3,
                  "&:hover": { backgroundColor: "#61ab01" },
                }}
              >
                <SearchIcon />
              </IconButton>
            </Search>
          </Box>

          {/* Right side icons - Right */}
          <Box sx={{ display: "flex", mr: 2 }}>
            <IconButton size="large" className="flex flex-col">
              <PersonIcon />
              <Typography>Account</Typography>
            </IconButton>

            <IconButton className="flex flex-col" size="large">
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
              <Typography>WishList</Typography>
            </IconButton>

            <IconButton className="flex flex-col" size="large">
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
              <Typography>Cart</Typography>
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}