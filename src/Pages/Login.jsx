import { Box, Button, Stack, TextField, Typography } from '@mui/material'
import React from 'react'
import Footer from '../components/Footer'
import Header from '../components/Header'
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

  const handleSignInClick = () => {
    // Navigate to the sign-in page when the "Sign-In" button is clicked
    navigate('/register');
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
        height: '530px',
        width: '380px',
        borderRadius:"25px",
        backgroundColor: '#afeeee',
      }}
    >
      <Stack
        direction={{ xs: 'column' }}
        spacing={{ xs: 1, sm: 2, md: 4 }}
      >
        <Typography sx={{fontSize:"32px"}} color="#7c6f64">Login -</Typography>
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
        <Button
          variant="contained"
          style={{ width: '300px', height: '40px',backgroundColor:"red" }}
        >
         Login
        </Button>
        <Box sx={{display:"flex", justifyContent:"center", alignItems:"center"}}>
            <Typography>New User ?</Typography>
            <Button 
            sx={{color:"red"}}
            onClick={handleSignInClick}
            >
            Register
            </Button>
        </Box>
      </Stack>
    </Box>
    </Box>
   <Footer/>
    </>
  )
}

export default Login;
