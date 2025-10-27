// import React, { useState } from 'react';
// import {
//   Box,
//   Drawer,
//   List,
//   ListItem,
//   ListItemButton,
//   ListItemIcon,
//   ListItemText,
//   IconButton,
//   InputBase,
//   Divider,
//   Tabs,
//   Tab,
// } from '@mui/material';
// import {
//   Menu as MenuIcon,
//   Close as CloseIcon,
//   Search as SearchIcon,
//   Favorite,
//   Watch,
//   AccountBalanceWallet,
//   FitnessCenter,
//   HealthAndSafety,
//   CardTravel,
//   AcUnit,
//   LocalMall,
//   Category,
//   ChevronRight,
//   Lightbulb,
//   Home,
//   Blender,
//   Face,
//   PhoneAndroid,
//   Extension,
//   RemoveRedEye,
//   Build,
// } from '@mui/icons-material';

// const HeroSection = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [tabValue, setTabValue] = useState(0);

//   const handleDrawerToggle = () => {
//     setMobileOpen(!mobileOpen);
//   };

//   const handleTabChange = (event, newValue) => {
//     setTabValue(newValue);
//   };

//   // Desktop categories
//   const desktopCategories = [
//     { name: 'Glasses', icon: <RemoveRedEye />, hasSubmenu: false },
//     { name: 'Electronics', icon: <PhoneAndroid />, hasSubmenu: true },
//     { name: 'Solar & Torches', icon: <Lightbulb />, hasSubmenu: true },
//     { name: 'Watches', icon: <Watch />, hasSubmenu: true },
//     { name: 'Wallets', icon: <AccountBalanceWallet />, hasSubmenu: true },
//     { name: 'Fitness & Gym', icon: <FitnessCenter />, hasSubmenu: false },
//     { name: 'Health & Beauty', icon: <HealthAndSafety />, hasSubmenu: false },
//     { name: 'Travel & Outdoor', icon: <CardTravel />, hasSubmenu: false },
//     { name: 'Winter Collection', icon: <AcUnit />, hasSubmenu: false },
//     { name: 'Backpack & Bag', icon: <LocalMall />, hasSubmenu: false },
//     { name: 'Other Categories', icon: <Category />, hasSubmenu: true },
//   ];

//   // Mobile menu items
//   const mobileMenuItems = [
//     'WINTER SALE',
//     'ADVENTURE',
//     'LADIES WALLETS',
//     'GENTS WALLETS',
//     'WATCHES',
//     'HAIR TRIMMERS',
//     'SMART WATCHES',
//     'BAGS',
//     'SOLAR LIGHTS',
//     'TORCH LIGHTS',
//     'FITNESS & GYM',
//     'HOME & KITCHEN',
//     'BEAUTY & COSMETICS',
//     'MOBILE ACCESSORIES',
//     'MISCELLANEOUS',
//     'GLASSES',
//     'TOOLKIT',
//   ];

//   const mobileCategories = [
//     'Electronics',
//     'Fashion',
//     'Home & Kitchen',
//     'Sports',
//     'Beauty',
//   ];

//   // Desktop Sidebar
//   const desktopSidebar = (
//     <Box sx={{ width: 280, backgroundColor: '#fff' }}>
//       {/* Browse Categories Header */}
//       <Box
//         sx={{
//           backgroundColor: '#6bb013',
//           color: 'white',
//           p: 2,
//           display: 'flex',
//           justifyContent: 'space-between',
//           alignItems: 'center',
//         }}
//       >
//         <Box sx={{ fontWeight: 'bold', fontSize: 16 }}>Browse Categories</Box>
//         <MenuIcon />
//       </Box>

//       {/* Category List */}
//       <List sx={{ p: 0 }}>
//         {desktopCategories.map((category, index) => (
//           <React.Fragment key={category.name}>
//             <ListItem disablePadding>
//               <ListItemButton
//                 sx={{
//                   py: 1.5,
//                   '&:hover': {
//                     backgroundColor: '#f5f5f5',
//                   },
//                 }}
//               >
//                 <ListItemIcon sx={{ minWidth: 40, color: '#999' }}>
//                   {category.icon}
//                 </ListItemIcon>
//                 <ListItemText
//                   primary={category.name}
//                   sx={{
//                     '& .MuiListItemText-primary': {
//                       fontSize: 14,
//                       color: '#333',
//                     },
//                   }}
//                 />
//                 {category.hasSubmenu && (
//                   <ChevronRight sx={{ color: '#999', fontSize: 20 }} />
//                 )}
//               </ListItemButton>
//             </ListItem>
//             {index < desktopCategories.length - 1 && (
//               <Divider sx={{ borderColor: '#f0f0f0' }} />
//             )}
//           </React.Fragment>
//         ))}
//       </List>
//     </Box>
//   );

//   // Mobile Drawer Content
//   const mobileDrawer = (
//     <Box sx={{ width: '100vw', height: '100vh', backgroundColor: '#fff' }}>
//       {/* Close Button */}
//       <Box sx={{ display: 'flex', justifyContent: 'flex-end', p: 1 }}>
//         <IconButton onClick={handleDrawerToggle}>
//           <CloseIcon />
//         </IconButton>
//       </Box>

//       {/* Search Bar */}
//       <Box sx={{ px: 2, pb: 2 }}>
//         <Box
//           sx={{
//             display: 'flex',
//             border: '1px solid #ddd',
//             overflow: 'hidden',
//           }}
//         >
//           <InputBase
//             placeholder="Search in..."
//             sx={{ flex: 1, px: 2, py: 1 }}
//           />
//           <Box
//             sx={{
//               backgroundColor: '#6bb013',
//               color: 'white',
//               display: 'flex',
//               alignItems: 'center',
//               justifyContent: 'center',
//               px: 3,
//             }}
//           >
//             <SearchIcon />
//           </Box>
//         </Box>
//       </Box>

//       {/* Tabs */}
//       <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
//         <Tabs
//           value={tabValue}
//           onChange={handleTabChange}
//           sx={{
//             '& .MuiTab-root': {
//               flex: 1,
//               color: '#666',
//               fontWeight: 'normal',
//             },
//             '& .Mui-selected': {
//               color: '#6bb013 !important',
//             },
//             '& .MuiTabs-indicator': {
//               backgroundColor: '#6bb013',
//             },
//           }}
//         >
//           <Tab label="MENU" />
//           <Tab label="CATEGORIES" />
//         </Tabs>
//       </Box>

//       {/* Menu/Categories Content */}
//       <Box sx={{ overflow: 'auto', height: 'calc(100vh - 200px)' }}>
//         {tabValue === 0 ? (
//           <List>
//             {mobileMenuItems.map((item, index) => (
//               <ListItem
//                 key={item}
//                 disablePadding
//                 sx={{
//                   borderBottom: '1px solid #f0f0f0',
//                 }}
//               >
//                 <ListItemButton sx={{ py: 2 }}>
//                   <ListItemText
//                     primary={item}
//                     sx={{
//                       '& .MuiListItemText-primary': {
//                         fontSize: 14,
//                         color: item === 'LADIES WALLETS' ? '#6bb013' : '#666',
//                         fontWeight: item === 'LADIES WALLETS' ? 'bold' : 'normal',
//                       },
//                     }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         ) : (
//           <List>
//             {mobileCategories.map((category) => (
//               <ListItem
//                 key={category}
//                 disablePadding
//                 sx={{
//                   borderBottom: '1px solid #f0f0f0',
//                 }}
//               >
//                 <ListItemButton sx={{ py: 2 }}>
//                   <ListItemText
//                     primary={category}
//                     sx={{
//                       '& .MuiListItemText-primary': {
//                         fontSize: 14,
//                         color: '#666',
//                       },
//                     }}
//                   />
//                 </ListItemButton>
//               </ListItem>
//             ))}
//           </List>
//         )}
//       </Box>
//     </Box>
//   );

//   return (
//     <Box>
//       {/* Desktop View - Sidebar (hidden on mobile) */}
//       <Box sx={{ display: { xs: 'none', md: 'block' } }}>
//         {desktopSidebar}
//       </Box>

//       {/* Mobile View - Menu Button */}
//       <Box sx={{ display: { xs: 'block', md: 'none' }, p: 2 }}>
//         <IconButton
//           onClick={handleDrawerToggle}
//           sx={{
//             backgroundColor: '#6bb013',
//             color: 'white',
//             '&:hover': {
//               backgroundColor: '#5a9501',
//             },
//           }}
//         >
//           <MenuIcon />
//         </IconButton>
//       </Box>

//       {/* Mobile Drawer */}
//       <Drawer
//         anchor="left"
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         sx={{
//           display: { xs: 'block', md: 'none' },
//           '& .MuiDrawer-paper': {
//             width: '100%',
//           },
//         }}
//       >
//         {mobileDrawer}
//       </Drawer>
//     </Box>
//   );
// };

// export default HeroSection;

import React from "react";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import MenuIcon from "@mui/icons-material/Menu";
import WorkIcon from "@mui/icons-material/Work";
import BeachAccessIcon from "@mui/icons-material/BeachAccess";
import { Button, List, Menu, MenuItem, Typography } from "@mui/material";
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
        <Box className="ml-50">
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
             <Typography sx={{fontSize:15}}>Glasses</Typography>
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
                sx={{ color: "#000", textTransform: "none",fontSize:15 }}
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
                sx={{ color: "#000", textTransform: "none",fontSize:15 }}
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
                sx={{ color: "#000", textTransform: "none" ,fontSize:15}}
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
                sx={{ color: "#000", textTransform: "none",fontSize:15 }}
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
              <Typography sx={{fontSize:15}}>Fitness & Gym</Typography>
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
              <Typography sx={{fontSize:15}}>Health & Beauty</Typography>
            </ListItem>
            {/* category 8 */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#ffff" }}>
                  <CabinIcon sx={{ fontSize: 19, color: "#dedede" }} />
                </Avatar>
              </ListItemAvatar>
              <Typography sx={{fontSize:15}}>Travel & Outdoor</Typography>
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
              <Typography sx={{fontSize:15}}>Winter Collection</Typography>
            </ListItem>
            {/* category 10  */}
            <ListItem>
              <ListItemAvatar>
                <Avatar sx={{ bgcolor: "#ffff" }}>
                  <WorkOutlineIcon sx={{ fontSize: 19, color: "#dedede" }} />
                </Avatar>
              </ListItemAvatar>
              <Typography sx={{fontSize:15}}>Backpack & Bag</Typography>
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
                sx={{ color: "#000", textTransform: "none",fontSize:15 }}
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
        <Box>
          <Swiper
            style={{ width: "1000px", height: "1000px" }}
            className="mySwiper"
            spaceBetween={20}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
          >
            {/* glasses slide  */}
            <SwiperSlide>
              <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
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
                    left: "10%",
                    transform: "translateY(-50%)",
                    color: "white",
                    zIndex: 10,
                  }}
                >
                  <Typography variant="h6" sx={{ fontWeight: 300, mb: 1 }}>
                    Summer Eyewear
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: "bold", mb: 0.5 }}>
                    Streampunk Stylish
                  </Typography>
                  <Typography variant="h3" sx={{ fontWeight: "bold", mb: 2 }}>
                    Sunglasses
                  </Typography>
                  <Typography
                    variant="h4"
                    sx={{ fontWeight: "bold", mb: 3, color: "#61ab01" }}
                  >
                    PKR 1850
                  </Typography>
                  <Button
                    sx={{
                      backgroundColor: "#61ab01",
                      color: "white",
                      px: 4,
                      py: 2,
                      borderRadius: 20,
                      fontSize: 16,
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
              <Box>
                <Box
                  sx={{ position: "relative", width: "100%", height: "100%" }}
                >
                  <img
                    src={cookingimage}
                    alt="Cooking"
                    style={{
                      width: "100%",
                      height: "2000px",
                      objectFit: "contain",
                      borderRadius: "8px",
                    }}
                  />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    top: "50%",
                    left: "10%",
                    transform: "translateY(-50%)",
                    color: "white",
                    zIndex: 10,
                  }}
                >
                  <Button
                    sx={{
                      backgroundColor: "#61ab01",
                      color: "white",
                      px: 10,
                      py: 2,
                      borderRadius: 20,
                      fontSize: 16,
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
        {/* side lamp  */}
        <Box>
          <Box
            component="img"
            src={lamp}
            alt="lamp"
            sx={{ width: 300, height: 300 }}
          />
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
