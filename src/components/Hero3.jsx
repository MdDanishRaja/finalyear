import { Card, CardContent, Grid, Typography } from '@mui/material'
import React from 'react'

const Hero3 = () => {
  return (
    <>
      <Typography variant="h5" m={3} sx={{fontWeight:"bold"}} >TESTINOMIALS - </Typography>
        <Grid container spacing={3} sx={{justifyContent:"space-evenly", textAlign:"center",pb:"8px"}}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ borderRadius: '20px' }} sx={{backgroundColor:"#F0F8FF", 
            height:"200px",
            width:"350px",
            margin:"8px",
            textAlign:"center", justifyContent:"center"}}>
            <CardContent>
                <Typography variant="p">"I never knew certificate verification could be this simple and reliable, Highly recommended!"</Typography>
                <Typography sx={{paddingTop:"35px",fontSize:"20px"}}>-Jane Doe, HR Manager</Typography>
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ borderRadius: '20px' }} sx={{backgroundColor:"#F0FFF0", 
            height:"200px",
            width:"350px",
            margin:"8px",
            textAlign:"center", justifyContent:"center"}}>
            <CardContent>
                <Typography variant="p">"This platform has saved us countless hours of manual verification for sure."</Typography>
                <Typography sx={{paddingTop:"35px",fontSize:"20px"}}>-john Smith, School Administrator</Typography>
            </CardContent>
            </Card>
        </Grid>
        </Grid>
    </>
  )
}

export default Hero3;
