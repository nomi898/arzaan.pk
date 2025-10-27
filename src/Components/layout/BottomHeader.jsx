import React from "react";
import { Button, Menu, MenuItem, Box, AppBar, Toolbar } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Categories } from "../../DummyData/Categories"; 

const BottomHeader = () => {

  const [anchorEls, setAnchorEls] = React.useState({});

  const handleClick = (menuName) => (event) => {
    setAnchorEls({ ...anchorEls, [menuName]: event.currentTarget });
  };

  const handleClose = (menuName) => () => {
    setAnchorEls({ ...anchorEls, [menuName]: null });
  };

  return (
    <Box className='flex mx-41'>
      <Box sx={{ flexGrow: 1 }}>
      <AppBar
        position="static"
        elevation={0}
        sx={{ backgroundColor: "#fff", color: "#000" }}
      >
        <Toolbar>
          {/* HOME */}
          <Button sx={{ color: "#6bb013", fontWeight: "bold" }}>HOME</Button>

          {/* MAIN MENU */}
          <Button
            endIcon={<ExpandMoreIcon />}
            onClick={handleClick("Glasses")}
            sx={{ color: "#000" }}
          >
            MAIN MENU
          </Button>
          <Menu
            anchorEl={anchorEls.Glasses}
            open={Boolean(anchorEls.Glasses)}
            onClose={handleClose("Glasses")}
          >
            {Categories.MainMenu.map((item) => (
              <MenuItem key={item} onClick={handleClose("Glasses")}>
                {item}
              </MenuItem>
            ))}
          </Menu>

          {/* ELECTRONICS */}
          <Button
            endIcon={<ExpandMoreIcon />}
            onClick={handleClick("electronics")}
            sx={{ color: "#000" }}
          >
            ELECTRONICS
          </Button>
          <Menu
            anchorEl={anchorEls.electronics}
            open={Boolean(anchorEls.electronics)}
            onClose={handleClose("electronics")}
          >
            {Categories.electronics.map((item) => (
              <MenuItem key={item} onClick={handleClose("electronics")}>
                {item}
              </MenuItem>
            ))}
          </Menu>

          {/* SOLAR & TORCH */}
          <Button
            endIcon={<ExpandMoreIcon />}
            onClick={handleClick("solar")}
            sx={{ color: "#000" }}
          >
            SOLAR & TORCH
          </Button>
          <Menu
            anchorEl={anchorEls.solar}
            open={Boolean(anchorEls.solar)}
            onClose={handleClose("solar")}
          >
            {Categories.solar.map((item) => (
              <MenuItem key={item} onClick={handleClose("solar")}>
                {item}
              </MenuItem>
            ))}
          </Menu>

          {/* WATCHES */}
          <Button
            endIcon={<ExpandMoreIcon />}
            onClick={handleClick("watches")}
            sx={{ color: "#000" }}
          >
            WATCHES
          </Button>
          <Menu
            anchorEl={anchorEls.watches}
            open={Boolean(anchorEls.watches)}
            onClose={handleClose("watches")}
          >
            {Categories.watches.map((item) => (
              <MenuItem key={item} onClick={handleClose("watches")}>
                {item}
              </MenuItem>
            ))}
          </Menu>

          {/* WALLETS */}
          <Button
            endIcon={<ExpandMoreIcon />}
            onClick={handleClick("wallets")}
            sx={{ color: "#000" }}
          >
            WALLETS
          </Button>
          <Menu
            anchorEl={anchorEls.wallets}
            open={Boolean(anchorEls.wallets)}
            onClose={handleClose("wallets")}
          >
            {Categories.wallets.map((item) => (
              <MenuItem key={item} onClick={handleClose("wallets")}>
                {item}
              </MenuItem>
            ))}
          </Menu>

          {/* OTHER */}
          <Button
            endIcon={<ExpandMoreIcon />}
            onClick={handleClick("other")}
            sx={{ color: "#000" }}
          >
            OTHER
          </Button>
          <Menu
            anchorEl={anchorEls.other}
            open={Boolean(anchorEls.other)}
            onClose={handleClose("other")}
          >
            {Categories.other.map((item) => (
              <MenuItem key={item} onClick={handleClose("other")}>
                {item}
              </MenuItem>
            ))}
          </Menu>

          {/* Spacer */}
          <Box sx={{ flexGrow: 1 }} />

          {/* Clearance Badge */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Box sx={{ width: 2, height: 30, backgroundColor: "#ccc" }} />
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Box component="span" sx={{ color: "#6bb013", fontSize: 20 }}>
                💎
              </Box>
              <span style={{ fontWeight: "bold" }}>
                Clearance Up to 30% Off
              </span>
            </Box>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
    </Box>
  );
};

export default BottomHeader;
