import React, { useState } from "react";
import CallIcon from "@mui/icons-material/Call";
import { Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Divider from '@mui/material/Divider';
import Box from '@mui/material/Box';
import logo from '../../assets/Images/arzaanlogo.webp'
import Headers from "./Header";



const TopBar = () => {
    // select logic 
    const [currency, setcurrency] = useState("PKR");

    const handleChange = (event) => {
        setcurrency(event.target.value);
    };
  return (
    <>

      <Box className='flex justify-between p-2 text-gray-300 items-center '>
        {/* Call number  */}
        <Box className='flex gap-6'>
          <Typography>{<CallIcon/>}</Typography>
          <Typography>CALL: 03417707717</Typography>
        </Box>
        {/* Login*/}
        <Box className='flex gap-6'>
          <Typography><PersonIcon/></Typography>
          <Typography>LOGIN</Typography>
          {/* select  */}
          <Box sx={{ minWidth: 80 }}>
            <FormControl fullWidth variant="standard">
              <Select
                labelId="demo-simple-select-label"
                id="SelectCurrency"
                disableUnderline
                value={currency}
                label="PKR"
                onChange={handleChange}
                sx={{ 
                    color: '#cccccc',
                    '& .MuiSelect-select': {
                      paddingTop: 0,
                      paddingBottom: 0,
                      display: 'flex',
                      alignItems: 'center'
                    }
                  }}
              >
                <MenuItem sx={{ color: '#cccccc' }} value={"PKR"}>PKR</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
       {/* Divider*/}
       <Divider sx={{ borderColor: "#e0e0e0" }} />
    
       <Box>

       </Box>
    </>
  );
};

export default TopBar;
