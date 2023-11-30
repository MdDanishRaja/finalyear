import { Box, Typography } from '@mui/material'
import React from 'react'

const Footer = () => {
  return (
    <>
      <Box sx={{ backgroundColor: 'black',color:"white", textAlign: 'center',justifyContent: 'center',p: 2}} >
        <Typography>
            &copy; 2023 Unicever. All rights reserved. Privacy Policy | Terms of Services
        </Typography>
      </Box>
    </>
  )
}

export default Footer;