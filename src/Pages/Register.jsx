import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const navigate = useNavigate();

  const handleSignInClick = () => {
    // Navigate to the sign-in page when the "Sign-In" button is clicked
    navigate('/login');
  };
  return (
    <>
    <Header/>
    <Box
    sx={{
      position: 'relative',
      minHeight: '85vh', // Ensure the box takes at least the full viewport height
    }}
  >
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '585px',
        width: '380px',
        borderRadius:"25px",
        backgroundColor: '#afeeee',
      }}
    >
      <Stack
        direction={{ xs: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Typography sx={{fontSize:"32px"}} color="#7c6f64">Register -</Typography>
        <TextField
          id="outlined-basic"
          label="Enter User Name ..."
          variant="outlined"
          style={{ width: '300px', height: '60px'}}
        />
        <TextField
          id="outlined-basic"
          label="Enter E-mail ..."
          variant="outlined"
          style={{ width: '300px', height: '60px'}}
        />
        <TextField
          id="outlined-basic"
          label="Enter Password ...."
          variant="outlined"
          style={{ width: '300px', height: '60px'}}
        />
        <TextField
          id="outlined-basic"
          label="Enter Mob-no...."
          variant="outlined"
          style={{ width: '300px', height: '60px' }}
        />
        <Button
          variant="contained"
          style={{ width: '300px', height: '40px',backgroundColor:"black" }}
        >
         Register
        </Button>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Typography>Already have an account?</Typography>
            <Button 
            sx={{color:"red"}}
            onClick={handleSignInClick}
            >
            Login</Button>
        </Box>
      </Stack>
    </Box>
    </Box>
   <Footer />
    </>
  )
}

export default Register;




