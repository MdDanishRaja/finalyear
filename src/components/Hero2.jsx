import React from 'react';
import { Card, CardContent, Typography, Grid } from '@mui/material';

const ResponsiveCards = () => {
  return (
    <>
    <Typography variant="h5" m={3} sx={{fontWeight:"bold"}} >WHY CHOOSE US ?</Typography>
        <Grid container spacing={3} sx={{justifyContent:"space-evenly", textAlign:"center",pb:"8px"}}>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ borderRadius: '20px' }} sx={{backgroundColor:"#f0f0f0", 
            height:"200px",
            width:"350px",
            margin:"8px",
            textAlign:"center", justifyContent:"center"}}>
            <CardContent>
                <Typography variant="h6" sx={{paddingBottom:"15px",fontSize:"23px"}}>Secure Certificate Verification</Typography>
                <Typography>Ensure the validity of certificates through our advanced verification process, safegourding against fraud and mis repersentation.</Typography>
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ borderRadius: '20px' }} sx={{backgroundColor:"#FFFACD", 
            height:"200px",
            width:"350px",
            margin:"8px",
            textAlign:"center", justifyContent:"center"}}>
            <CardContent>
                <Typography variant="h6" sx={{paddingBottom:"15px",fontSize:"23px"}}>Effortless Distribution</Typography>
                <Typography>Organization can easily distribute certificates online, streamlining the entire cretification process.</Typography>
            </CardContent>
            </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3}>
            <Card style={{ borderRadius: '20px' }} sx={{backgroundColor:"#FAF0E6", 
            height:"200px",
            width:"350px",
            margin:"8px",
            textAlign:"center", justifyContent:"center"}}>
            <CardContent>
                <Typography variant="h6" sx={{paddingBottom:"15px",fontSize:"23px"}}>Real-time Tracking</Typography>
                <Typography>Track verification status in real-time, providing instant updates and peace of mind.</Typography>
            </CardContent>
            </Card>
        </Grid>
        </Grid>
    </>
  );
};

export default ResponsiveCards;

