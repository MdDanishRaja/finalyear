import { Button,  Stack, TextField, TextareaAutosize, Typography } from '@mui/material'
import React from 'react'


const Hero4 = () => {
  return (
    <>
      <Typography variant="h5" m={3}>CONTACT US</Typography>
      <Typography m={3}>Have questions? Reach out to our dedicated support team at support@unicever.com</Typography>
      <Typography m={3}>OR, Send us a quick mail</Typography>
      <Stack direction={{ xs: 'column', sm: 'row' }} spacing={{ xs: 1, sm: 2, md: 4 }} justifyContent={'space-evenly'} m={5}>
        <Stack direction={{ xs: 'column' }} spacing={{ xs: 1, sm: 2, md: 4 }}>            
            <TextField 
            id="outlined-basic" 
            label="UserName"
            variant="outlined"
            style={{width:"300px", height:"60px"}}
            />           
            <TextField
            id="outlined-basic" 
            label="Question Overview" 
            variant="outlined"
            style={{width:"300px", height:"60px"}}
            />
            <Button sx={{display:{xs:"none",sm:"block"}}}
            variant="contained" 
            color="primary" 
            style={{width:"300px", height:"40px"}}
            >
               E-Mail
            </Button>
        </Stack>
        <Stack>                  
            <TextareaAutosize
                minRows={3}
                placeholder="Write about yourself..."
                style={{ width: '300px', height:"200px"}}
            />
            <Button sx={{display:{sm:"none"}}} 
            variant="contained" 
            color="primary" 
            style={{width:"300px", height:"40px",marginTop:"25px"}}
            >
               E-Mail
            </Button>
        </Stack>
      </Stack>
    </>
  )
}

export default Hero4;
