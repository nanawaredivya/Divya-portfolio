import { Box, Grid, Typography } from '@mui/material';
import React from 'react';

const About = () => {
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
        <Typography variant="h3" align="center"
          sx={{
            fontSize: "2rem",
            color: "black",
            marginTop: '2rem',
            marginBottom: '0.5rem'
          }}>
          Know Who &nbsp;
          <span
            style={{
              color: '#962ac9'
            }}>
            I'M 😊
          </span>
        </Typography><br />
        <Typography variant="body1" align="center"
          sx={{
            fontSize: "1.5rem",
            marginBottom: '2rem',
          }}>
          Hi Everyone, I'm &nbsp;
          <span
            style={{
              color: '#962ac9',
              fontSize: 25
            }}>Divya Nanaware,</span> a React Front-End Web Developer. I specialize in creating engaging
          and user-friendly web experiences. With a passion for clean code and seamless user experiences,
          I’ve built numerous applications using React, Redux, and other modern tools. My goal is to craft elegant
          solutions that enhance usability and delight users.
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <img src="/Assets/about.png" alt="Divya" className="image" height="80%" width="100%" />
      </Grid>
      <Grid item xs={12}>
        <Grid item xs={6}>
          <Typography align="center"
            sx={{
              fontSize: "2rem",
              marginBottom: '1rem'
            }}
          >
            BEST SKILL ON
          </Typography>
          <Grid container justifyContent="center" alignItems="center" spacing={2}>
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  backgroundColor: '#a9a9a9',
                  padding: '1rem',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s, color 0.3s, border 0.3s',
                  '&:hover': {
                    backgroundColor: '#34282C',
                    color: 'white',
                    border: '2px solid #962ac9',
                    animation: 'pulse-border 1s ease infinite',
                  },
                  '@keyframes pulse-border': {
                    '70%': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 0 10px rgba(0, 123, 255, 0)',
                    },
                    '100%': {
                      transform: 'scale(1)',
                      boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)',
                    },
                  },
                }}
              >
                <Typography align="center" variant="body2">
                  React Js
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  backgroundColor: '#a9a9a9',
                  padding: '1rem',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s, color 0.3s, border 0.3s',
                  '&:hover': {
                    backgroundColor: '#34282C',
                    color: 'white',
                    border: '2px solid #962ac9',
                    animation: 'pulse-border 1s ease infinite',
                  },
                  '@keyframes pulse-border': {
                    '70%': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 0 10px rgba(0, 123, 255, 0)',
                    },
                    '100%': {
                      transform: 'scale(1)',
                      boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)',
                    },
                  },
                }}
              >
                <Typography align="center" variant="body2">
                Redux
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  backgroundColor: '#a9a9a9',
                  padding: '1rem',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s, color 0.3s, border 0.3s',
                  '&:hover': {
                    backgroundColor: '#34282C',
                    color: 'white',
                    border: '2px solid #962ac9',
                    animation: 'pulse-border 1s ease infinite',
                  },
                  '@keyframes pulse-border': {
                    '70%': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 0 10px rgba(0, 123, 255, 0)',
                    },
                    '100%': {
                      transform: 'scale(1)',
                      boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)',
                    },
                  },
                }}
              >
                <Typography align="center" variant="body2">
                Material Ui
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  backgroundColor: '#a9a9a9',
                  padding: '1rem',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s, color 0.3s, border 0.3s',
                  '&:hover': {
                    backgroundColor: '#34282C',
                    color: 'white',
                    border: '2px solid #962ac9',
                    animation: 'pulse-border 1s ease infinite',
                  },
                  '@keyframes pulse-border': {
                    '70%': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 0 10px rgba(0, 123, 255, 0)',
                    },
                    '100%': {
                      transform: 'scale(1)',
                      boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)',
                    },
                  },
                }}
              >
                <Typography align="center" variant="body2">
                JavaScript
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  backgroundColor: '#a9a9a9',
                  padding: '1rem',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s, color 0.3s, border 0.3s',
                  '&:hover': {
                    backgroundColor: '#34282C',
                    color: 'white',
                    border: '2px solid #962ac9',
                    animation: 'pulse-border 1s ease infinite',
                  },
                  '@keyframes pulse-border': {
                    '70%': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 0 10px rgba(0, 123, 255, 0)',
                    },
                    '100%': {
                      transform: 'scale(1)',
                      boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)',
                    },
                  },
                }}
              >
                <Typography align="center" variant="body2">
                Github
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  backgroundColor: '#a9a9a9',
                  padding: '1rem',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s, color 0.3s, border 0.3s',
                  '&:hover': {
                    backgroundColor: '#34282C',
                    color: 'white',
                    border: '2px solid #962ac9',
                    animation: 'pulse-border 1s ease infinite',
                  },
                  '@keyframes pulse-border': {
                    '70%': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 0 10px rgba(0, 123, 255, 0)',
                    },
                    '100%': {
                      transform: 'scale(1)',
                      boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)',
                    },
                  },
                }}
              >
                <Typography align="center" variant="body2">
                MySQL
                </Typography>
              </Box>
            </Grid>
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  backgroundColor: '#a9a9a9',
                  padding: '1rem',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s, color 0.3s, border 0.3s',
                  '&:hover': {
                    backgroundColor: '#34282C',
                    color: 'white',
                    border: '2px solid #962ac9',
                    animation: 'pulse-border 1s ease infinite',
                  },
                  '@keyframes pulse-border': {
                    '70%': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 0 10px rgba(0, 123, 255, 0)',
                    },
                    '100%': {
                      transform: 'scale(1)',
                      boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)',
                    },
                  },
                }}
              >
                <Typography align="center" variant="body2">
                JSON
                </Typography>
              </Box>
            </Grid> 
            <Grid item xs={6} sm={3}>
              <Box
                sx={{
                  backgroundColor: '#a9a9a9',
                  padding: '1rem',
                  borderRadius: '5px',
                  transition: 'background-color 0.3s, color 0.3s, border 0.3s',
                  '&:hover': {
                    backgroundColor: '#34282C',
                    color: 'white',
                    border: '2px solid #962ac9',
                    animation: 'pulse-border 1s ease infinite',
                  },
                  '@keyframes pulse-border': {
                    '70%': {
                      transform: 'scale(1.1)',
                      boxShadow: '0 0 0 10px rgba(0, 123, 255, 0)',
                    },
                    '100%': {
                      transform: 'scale(1)',
                      boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)',
                    },
                  },
                }}
              >
                <Typography align="center" variant="body2">
                Bitbucket
                </Typography>
              </Box>
            </Grid>
            
          
            
          </Grid>
        </Grid>
        {/* <Grid item xs={6}>
          <Typography align="center"
            sx={{
              fontSize: "2rem",
              marginBottom: '1rem'
            }}
          >
            FIND ME IN
          </Typography>
        </Grid> */}
      </Grid>
    </Grid>
  )
}

export default About;
