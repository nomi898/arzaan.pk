import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Button, Grid, List, Menu, MenuItem, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Categories } from "../../DummyData/Categories";
import ComputerIcon from "@mui/icons-material/Computer";
import SolarPowerIcon from "@mui/icons-material/SolarPower";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import WalletIcon from "@mui/icons-material/Wallet";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import CabinIcon from "@mui/icons-material/Cabin";
import HistoryToggleOffIcon from "@mui/icons-material/HistoryToggleOff";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Box from "../../../node_modules/@mui/material/esm/Box/Box";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../App.css";
import { Navigation, Pagination } from "swiper/modules";
import cookingimage from "../../assets/Images/cooking.jpg";
import glasses from "../../assets/Images/glasses.webp";
import lamp from "../../assets/Images/lamp.webp";

const HeroSection = () => {
  const [anchorEls, setAnchorEls] = React.useState({});

  const handleClick = (menuName) => (event) => {
    setAnchorEls({ ...anchorEls, [menuName]: event.currentTarget });
  };

  const handleClose = (menuName) => () => {
    setAnchorEls({ ...anchorEls, [menuName]: null });
  };

  return (
    <>
      <Box className="flex gap-6">
        {/* Categories Box  */}
        <Box className="ml-50" sx={{ display: { xs: "none", md: "block" } }}>
          <List sx={{ width: "100%", maxWidth: 250 }}>
            {/* main categories  */}
            <ListItem sx={{ bgcolor: "#61ab01" }}>
              <ListItemText
                primary={
                  <Typography sx={{ color: "white", fontWeight: 100 }}>
                    Browse Categories
                  </Typography>
                }
              />
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#61ab01" }}>
                  <MenuIcon sx={{ fontSize: 20, color: "white" }} />
                </Avatar>
              </ListItemAvatar>
            </ListItem>
            {/* category 1  */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#ffff" }}>
                  <WorkIcon sx={{ fontSize: 19, color: "#dedede" }} />
                </Avatar>
              </ListItemAvatar>
              <Typography sx={{ fontSize: 15 }}>Glasses</Typography>
            </ListItem>
            {/* category 2  */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#ffff" }}>
                  <ComputerIcon sx={{ fontSize: 19, color: "#dedede" }} />
                </Avatar>
              </ListItemAvatar>
              {/* ELECTRONICS menu  */}
              <Button
                endIcon={<ExpandMoreIcon />}
                onClick={handleClick("electronics")}
                sx={{ color: "#000", textTransform: "none", fontSize: 15 }}
              >
                Electronics
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
            </ListItem>
            {/* category 3  */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#ffff" }}>
                  <SolarPowerIcon sx={{ fontSize: 19, color: "#dedede" }} />
                </Avatar>
              </ListItemAvatar>
              {/* SOLAR & TORCH */}
              <Button
                endIcon={<ExpandMoreIcon />}
                onClick={handleClick("solar")}
                sx={{ color: "#000", textTransform: "none", fontSize: 15 }}
              >
                Solar & Torch
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
            </ListItem>
            {/* category 4  */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#ffff" }}>
                  <AvTimerIcon sx={{ fontSize: 19, color: "#dedede" }} />
                </Avatar>
              </ListItemAvatar>
              <Button
                endIcon={<ExpandMoreIcon />}
                onClick={handleClick("watches")}
                sx={{ color: "#000", textTransform: "none", fontSize: 15 }}
              >
                Watches
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
            </ListItem>
            {/* category 5  */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#ffff" }}>
                  <WalletIcon sx={{ fontSize: 19, color: "#dedede" }} />
                </Avatar>
              </ListItemAvatar>
              {/* WALLETS */}
              <Button
                endIcon={<ExpandMoreIcon />}
                onClick={handleClick("wallets")}
                sx={{ color: "#000", textTransform: "none", fontSize: 15 }}
              >
                Wallets
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
            </ListItem>
            {/* category 6  */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#ffff" }}>
                  <FavoriteBorderIcon sx={{ fontSize: 19, color: "#dedede" }} />
                </Avatar>
              </ListItemAvatar>
              <Typography sx={{ fontSize: 15 }}>Fitness & Gym</Typography>
            </ListItem>
            {/* category 7  */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#ffff" }}>
                  <HealthAndSafetyIcon
                    sx={{ fontSize: 19, color: "#dedede" }}
                  />
                </Avatar>
              </ListItemAvatar>
              <Typography sx={{ fontSize: 15 }}>Health & Beauty</Typography>
            </ListItem>
            {/* category 8 */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#ffff" }}>
                  <CabinIcon sx={{ fontSize: 19, color: "#dedede" }} />
                </Avatar>
              </ListItemAvatar>
              <Typography sx={{ fontSize: 15 }}>Travel & Outdoor</Typography>
            </ListItem>
            {/* category 9  */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#ffff" }}>
                  <HistoryToggleOffIcon
                    sx={{ fontSize: 19, color: "#dedede" }}
                  />
                </Avatar>
              </ListItemAvatar>
              <Typography sx={{ fontSize: 15 }}>Winter Collection</Typography>
            </ListItem>
            {/* category 10  */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#ffff" }}>
                  <WorkOutlineIcon sx={{ fontSize: 19, color: "#dedede" }} />
                </Avatar>
              </ListItemAvatar>
              <Typography sx={{ fontSize: 15 }}>Backpack & Bag</Typography>
            </ListItem>
            {/* category 11  */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#ffff" }}>
                  <AddShoppingCartIcon
                    sx={{ fontSize: 19, color: "#dedede" }}
                  />
                </Avatar>
              </ListItemAvatar>
              {/* OTHER */}
              <Button
                endIcon={<ExpandMoreIcon />}
                onClick={handleClick("other")}
                sx={{ color: "#000", textTransform: "none", fontSize: 15 }}
              >
                Other Categories
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
            </ListItem>
          </List>
        </Box>
{/* swiper  */}
<Grid container spacing={2}>
  <Grid item xs={12} md={9} lg={10}>
    <Box
      sx={{
        width: "100%",
        height: {
          xs: "300px", // Mobile
          sm: "400px", // Small tablets
          md: "500px", // Medium screens
          lg: "600px", // Large screens
          xl: "700px", // Extra large screens
        },
        px: { xs: 1, sm: 2, md: 3 },
      }}
    >
      <Swiper
        style={{ width: "100%", height: "100%" }}
        className="mySwiper"
        spaceBetween={20}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination]}
      >
        {/* glasses slide  */}
        <SwiperSlide>
          <Box
            sx={{ position: "relative", width: "100%", height: "100%" }}
          >
            <img
              src={glasses}
              alt="Glasses"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: "5%", sm: "8%", md: "10%" },
                transform: "translateY(-50%)",
                color: "white",
                zIndex: 10,
              }}
            >
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 300,
                  mb: { xs: 0.5, sm: 0.8, md: 1 },
                  fontSize: { xs: "0.9rem", sm: "1rem", md: "1.25rem" },
                }}
              >
                Summer Eyewear
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  mb: 0.5,
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "2.5rem",
                    lg: "3rem",
                  },
                }}
              >
                Streampunk Stylish
              </Typography>
              <Typography
                variant="h3"
                sx={{
                  fontWeight: "bold",
                  mb: { xs: 1, sm: 1.5, md: 2 },
                  fontSize: {
                    xs: "1.5rem",
                    sm: "2rem",
                    md: "2.5rem",
                    lg: "3rem",
                  },
                }}
              >
                Sunglasses
              </Typography>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: "bold",
                  mb: { xs: 1.5, sm: 2, md: 3 },
                  color: "#61ab01",
                  fontSize: {
                    xs: "1.2rem",
                    sm: "1.5rem",
                    md: "2rem",
                    lg: "2.125rem",
                  },
                }}
              >
                PKR 1850
              </Typography>
              <Button
                sx={{
                  backgroundColor: "#61ab01",
                  color: "white",
                  px: { xs: 2, sm: 3, md: 4 },
                  py: { xs: 1, sm: 1.5, md: 2 },
                  borderRadius: 20,
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1rem" },
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#5a9501" },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
        {/* cooking image  */}
        <SwiperSlide>
          <Box
            sx={{ position: "relative", width: "100%", height: "100%" }}
          >
            <Box sx={{ width: "100%", height: "100%" }}>
              <img
                src={cookingimage}
                alt="Cooking"
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  borderRadius: "8px",
                }}
              />
            </Box>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: "5%", sm: "8%", md: "10%" },
                transform: "translateY(-50%)",
                color: "white",
                zIndex: 10,
              }}
            >
              <Button
                sx={{
                  backgroundColor: "#61ab01",
                  color: "white",
                  px: { xs: 3, sm: 6, md: 8, lg: 10 },
                  py: { xs: 1, sm: 1.5, md: 2 },
                  borderRadius: 20,
                  fontSize: { xs: "0.875rem", sm: "1rem", md: "1rem" },
                  fontWeight: "bold",
                  border: "solid 1px black",
                  "&:hover": { backgroundColor: "#5a9501" },
                }}
              >
                SHOP NOW
              </Button>
            </Box>
          </Box>
        </SwiperSlide>
      </Swiper>
    </Box>
  </Grid>
  {/* side lamp - hidden on mobile, visible on medium+ screens */}
  <Grid item md={3} lg={2} sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', justifyContent: 'center' }}>
    <Box
      component="img"
      src={lamp}
      alt="lamp"
      sx={{ 
        width: { md: 250, lg: 300 }, 
        height: { md: 250, lg: 300 },
        objectFit: 'contain'
      }}
    />
  </Grid>
</Grid>
      </Box>
    </>
  );
};

export default HeroSection;
