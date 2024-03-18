import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#221954',
        color: '#fff',
        textAlign: 'center',
        py: 3,
        boxShadow: '0px -4px 6px rgba(0, 0, 0, 0.1)',
      }}
    >
      <Typography variant="body1">© 2024 Divya Nanaware</Typography>
      <Typography variant="body2">
        Follow me on{' '}
        <Link href="https://www.linkedin.com/feed/" color="inherit" target="_blank" rel="noopener">
          <IconButton color="inherit" size="small">
            <LinkedInIcon />
          </IconButton>
        </Link>
        <Link href="https://github.com/nanawaredivya" color="inherit" target="_blank" rel="noopener">
          <IconButton color="inherit" size="small">
            <GitHubIcon />
          </IconButton>
        </Link>
        <Link href="https://www.instagram.com/" color="inherit" target="_blank" rel="noopener">
          <IconButton color="inherit" size="small">
            <InstagramIcon />
          </IconButton>
        </Link>
        <Link href="mailto:divyananaware28@gmail.com" color="inherit">
          <IconButton color="inherit" size="small">
            <EmailIcon />
          </IconButton>
        </Link>
      </Typography>
    </Box>
  );
};

export default Footer;
