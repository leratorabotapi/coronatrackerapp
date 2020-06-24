import React from 'react';
import { CardContent, Typography, Grid, Box } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';

import styles from './Cards.module.css';
import CovidCases from '../image/vademecum.png';
import CovidRecovery from '../image/health.png';
import CovidDeaths from '../image/tombstone.png';
import CovidActive from '../image/virus.png';

const Info = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return 'Loading...';
 
  }


  return (
    <div className={styles.container}>
      <Grid container spacing={6} justify="center">

        <Grid item xs={12} md={5} className={cx(styles.card, styles.infected)}>

          <CardContent>
          <Grid container xs={12}>

            <Grid item xs={10}>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              TOTAL CASES
            </Typography>
            <Typography variant="h4" component="h2">
                <Box fontWeight="fontWeightBold" m={1}>
              <CountUp start={0} end={confirmed.value} duration={2.75} separator="," />
              </Box>
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            </Grid>

            <Grid xs={2}>
            <img style={{
            height: 40,
          }} src={CovidCases} alt='coronacases' />
            </Grid>

            </Grid>
          </CardContent>

        </Grid>

        <Grid item xs={12} md={5} className={cx(styles.card, styles.recovered)}>

          <CardContent>
          <Grid container xs={12}>

            <Grid item xs={10}>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              TOTAL RECOVERIES
            </Typography>
            <Typography variant="h4" component="h2">
                <Box fontWeight="fontWeightBold" m={1}>
              <CountUp start={0} end={recovered.value} duration={2.75} separator="," />
              </Box>
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            </Grid>

            <Grid xs={2}>
            <img style={{
            height: 40,
          }} src={CovidRecovery} alt='coronacases' />
            </Grid>

            </Grid>

          </CardContent>
        </Grid>

        <Grid item xs={12} md={5} className={cx(styles.card, styles.deaths)}>

          <CardContent>
          <Grid container xs={12}>

            <Grid item xs={10}>
            <Typography variant="subtitle2" color="textSecondary" gutterBottom>
              TOTAL DEATHS
            </Typography>
            <Typography variant="h4" component="h2">
                <Box fontWeight="fontWeightBold" m={1}>
              <CountUp start={0} end={deaths.value} duration={2.75} separator="," />
              </Box>
            </Typography>
            <Typography variant="caption" color="textSecondary">
              {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p">
            </Typography>
            </Grid>

          <Grid xs={2}>
          <img style={{
          height: 40,
          }} src={CovidDeaths} alt='coronacases' />
          </Grid>

          </Grid>   
          </CardContent>
        </Grid>

        <Grid item xs={12} md={5} className={cx(styles.card, styles.active)}>

          <CardContent>
          <Grid container xs={12}>

            <Grid item xs={10}>
            <Typography variant="subtitle2" color="textSecondary">
              ACTIVE CASES
            </Typography>
            <Typography variant="h6" component="h2">
                (Feature Still To Come)
            </Typography> 
            <Typography variant="caption" color="textSecondary">
              last updated: {new Date(lastUpdate).toDateString()}
            </Typography>
            <Typography variant="body2" component="p"></Typography>
            </Grid>

          <Grid xs={2}>
          <img style={{
          height: 40,
          }} src={CovidActive} alt='coronacases' />
          </Grid>

          </Grid>
          </CardContent>
        </Grid>
        
      </Grid>
    </div>
  );
};

export default Info;
