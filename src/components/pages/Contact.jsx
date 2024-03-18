import React from 'react';
import { Grid, Typography, TextField, Button, Card, CardContent, CardMedia } from '@mui/material';

const Contact = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <Grid container spacing={2}
    sx={{
              marginTop: '0.3rem'
             }}>
<Grid item xs={12}>
         <Typography variant="h4" align="center" gutterBottom 
         sx={{
              fontSize: 40,
              color: '#962ac9',
              fontWeight: 'bold',
             }}>
           Contact with me
         </Typography>
       </Grid>
      <Grid item xs={12} md={4}>
        <Card sx={{ 
          display: 'flex', 
          flexDirection: 'column',
          marginBottom: '1rem',
              marginLeft: '1rem',
              marginRight: '2rem',
              paddingInlineEnd: '2rem',
              paddingInlineStart: '2rem',
              paddingBlock: '1.5rem',
              bgcolor: '#E5E4E2',
           }}>
          <CardMedia
            component="img"
            height="200"
            image="/Assets/contact.png"
            alt="Contact Image"
          />
          <CardContent>
             <Typography variant="h5" gutterBottom>
               Divya Nanaware
             </Typography>
             <Typography variant='body1' gutterBottom
             sx={{
              marginBottom: '1rem'
             }}>
              
 As a React frontend developer, I specialize in creating engaging user interfaces and interactive web experiences.             </Typography>
             <Typography variant="body1" gutterBottom
             sx={{
              marginBottom: '1rem'
             }}>
               REACT-FRONTEND DEVELOPER
             </Typography>
             <Typography variant="body1" gutterBottom
             >
               Phone: 9767425393
             </Typography>
            <Typography variant="body1" gutterBottom>
             Email: divyananaware28@gmail.com
             </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Right Section */}
      <Grid item xs={12} md={7}>
        <Card sx={{ padding: 2, bgcolor: '#E5E4E2', }}>
          <CardContent>
    
            <form onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField
                    label="Name"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Email"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Phone Number"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    label="Subject"
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                   <TextField
                    label="Message"
                    multiline
                    rows={4}
                    variant="outlined"
                    fullWidth
                    required
                  />
                </Grid>
                <Grid item xs={12}>
                  <Button type="submit" variant="contained" color="primary" fullWidth sx={{backgroundColor: "gray"}}>
                    Submit
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Contact;
