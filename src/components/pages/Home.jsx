import React from 'react';
import { Grid, IconButton, Typography } from '@mui/material';
import './Style.css';
import Typewriter from 'typewriter-effect';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Grid
      container
      justifyContent="flex-end"
      alignItems="center"
      sx={{
        bgcolor: '#e8e8e8',
      }}
    >
      <Grid item xs={6}>
        <Typography variant="h3" align="center" sx={{ fontSize: '1.5rem', color: 'black' }}>
          WELCOME TO MY WORLD{' '}
          <span className="wave" role="img" aria-label="waving-hand">
            👋🏻
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: '2rem',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: 'black',
          }}
        >
          I'M {'  '} &nbsp;
          <span className="name" style={{ marginRight: '0.5rem', color: '#962ac9' }}>
            DIVYA NANAWARE
          </span>
        </Typography>
        <Typography
          sx={{
            fontSize: '3rem',
            fontWeight: 'bold',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            color: '#962ac9',
          }}
        >
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 50,
              strings: ['FRONT-END DEVELOPER.'],
            }}
          />
        </Typography>
        <Typography variant="h3" align="center" 
        sx={{ 
          fontSize: '1rem', 
          color: 'black',
          fontFamily: "revert-layer", 
          }}>
          Know me better{' '}
          <IconButton component={Link} to="/about"
          sx={{
                fontSize: '2rem',
                color: '#4caf50',
                '&:hover': {
                  color: '#4caf50', 
                  backgroundColor: '#b7b7b7', 
                  borderRadius: '50%',
                },
          }}
          >
            <ArrowForwardIcon />
          </IconButton>
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <img src="/Assets/homeprofile.png" alt="Divya" className="image" height="100%" width="100%" />
      </Grid>
    </Grid>
  );
};

export default Home;
