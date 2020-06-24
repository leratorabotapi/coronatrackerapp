import React from 'react';
import { Grid, Typography, Box, Button } from '@material-ui/core';

import CovidIcon from '../image/bacteria.png';

class Headers extends React.Component {
  render(){
    return (
     <div>
    <Box width="1" display="flex" p={1} my={0.5}>
      
    <Grid container spacing={10}>
        <Grid item xs={12}>
        
        </Grid>
        
        <Grid item xs={8}>
        <Typography variant="h4" component="h1">
            <Box fontWeight="fontWeightBold" m={1}>
            <img style={{
            height: 30, marginRight: 15,
          }} src={CovidIcon} alt='corona' />
            Covid-19 Stats Tracker
            </Box>
        </Typography>
        <Typography variant="body1" gutterBottom>
            Track the spread of the Coronavirus Covid-19 outbreak
        </Typography>
        </Grid>
        <Grid item xs={2}>
        <Button variant="outlined" size="small" color="default" style={{ 
            width: 150
        }}>
          Join This Project
        </Button>
        </Grid>
        <Grid item xs={2}>
        <Button variant="outlined" size="small" color="default" href="https://github.com/mathdroid/covid19"  style={{ 
            width: 150
        }}>
          Connect To This API
        </Button>
        </Grid>
      </Grid>
      </Box>

     </div>
    );
  }
}

export default Headers;