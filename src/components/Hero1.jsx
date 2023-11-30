import { Box, Button, Stack, Typography } from '@mui/material'
import React from 'react'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import img1 from "../images/complete.svg"
import styled from '@emotion/styled';

const StyledImg = styled('img')({
    height:500,
    width:300
})


const Hero = () => {
  return (
    <Stack direction="row" justifyContent={'space-around'} m={6}>
        <Box>
           <Typography variant="caption">|Unicever</Typography> 
           <Typography variant="h5" pt={2} pb={2}>Unlocking Identity:</Typography>
           <Typography variant="h3" pb={2}>Your Digital Singnature of Authenticity</Typography>
           <Typography variant="h6" pb={4}>A Secure Certificate Verification Platform</Typography>
           <Button style={{ width: '200px', height: '50px',backgroundColor:"#333333" }} variant="contained" endIcon={<ArrowForwardIcon />}
      >
        Get Started
      </Button>
        </Box>
        <Box sx={{display:{xs:"none", sm:"block"}}}>
            <StyledImg src={img1} alt='complete'/>
        </Box>
    </Stack>
  )
}

export default Hero;