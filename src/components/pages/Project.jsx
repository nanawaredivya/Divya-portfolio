// import { Grid, Typography, Box } from '@mui/material';
// import React from 'react';

// const Project = () => {
//   return (
//     <Grid
//       container
//       justifyContent="center"
//       alignItems="center"
//       sx={{
//         bgcolor: '#e8e8e8',
//         padding: '2rem',
//       }}
//     >
//       <Grid item xs={12}>
//         <Typography variant="h3" align="center" sx={{ marginBottom: '2rem' }}>
//           My Projects
//         </Typography>
//       </Grid>
//       <Grid item xs={12}>
//         <Grid container justifyContent="center" alignItems="center" spacing={2}>
//           <Grid item xs={12} sm={4}>
//             <Box
//               sx={{
//                 backgroundColor: '#f0f0f0',
//                 padding: '1rem',
//                 borderRadius: '5px',
//                 transition: 'background-color 0.3s, color 0.3s, border 0.3s',
//                 '&:hover': {
//                   backgroundColor: '#34282C',
//                   color: 'white',
//                   border: '2px solid #962ac9',
//                   animation: 'pulse-border 1s ease infinite',
//                 },
//                 '@keyframes pulse-border': {
//                   '0%': {
//                     transform: 'scale(1)',
//                     boxShadow: '0 0 0 0 rgba(0, 123, 255, 0.7)',
//                   },
//                   '70%': {
//                     transform: 'scale(1.1)',
//                     boxShadow: '0 0 0 10px rgba(0, 123, 255, 0)',
//                   },
//                   '100%': {
//                     transform: 'scale(1)',
//                     boxShadow: '0 0 0 0 rgba(0, 123, 255, 0)',
//                   },
//                 },
//               }}
//             >
//               <img src="/Assets/project1.png" alt="Project 1" style={{ width: '100%', borderRadius: '5px' }} />
//               <Typography align="center" variant="body2" sx={{ marginTop: '0.5rem' }}>
//                 Project 1
//               </Typography>
//             </Box>
//           </Grid>
//           {/* <Grid item xs={12} sm={4}>
//             <Box
//               sx={{
//                 backgroundColor: '#f0f0f0',
//                 padding: '1rem',
//                 borderRadius: '5px',
//                 transition: 'background-color 0.3s, color 0.3s, border 0.3s',
//                 '&:hover': {
//                   backgroundColor: '#34282C',
//                   color: 'white',
//                   border: '2px solid #962ac9',
//                   animation: 'pulse-border 1s ease infinite',
//                 },
//               }}
//             >
//               <img src={Project2Image} alt="Project 2" style={{ width: '100%', borderRadius: '5px' }} />
//               <Typography align="center" variant="body2" sx={{ marginTop: '0.5rem' }}>
//                 Project 2
//               </Typography>
//             </Box>
//           </Grid>
//           <Grid item xs={12} sm={4}>
//             <Box
//               sx={{
//                 backgroundColor: '#f0f0f0',
//                 padding: '1rem',
//                 borderRadius: '5px',
//                 transition: 'background-color 0.3s, color 0.3s, border 0.3s',
//                 '&:hover': {
//                   backgroundColor: '#34282C',
//                   color: 'white',
//                   border: '2px solid #962ac9',
//                   animation: 'pulse-border 1s ease infinite',
//                 },
//               }}
//             >
//               <img src={Project3Image} alt="Project 3" style={{ width: '100%', borderRadius: '5px' }} />
//               <Typography align="center" variant="body2" sx={{ marginTop: '0.5rem' }}>
//                 Project 3
//               </Typography>
//             </Box>
//           </Grid> */}
//         </Grid>
//       </Grid>
//     </Grid>
//   );
// }

// export default Project;


import React from 'react';
import { Grid, Typography, Card, CardActionArea, CardContent, CardMedia } from '@mui/material';
// import Project1Image from './path/to/project1.png'; // Update the path to your project images
// import Project2Image from './path/to/project2.png'; // Update the path to your project images
// import Project3Image from './path/to/project3.png'; // Update the path to your project images
// import Project4Image from './path/to/project4.png'; // Update the path to your project images

const Portfolio = () => {
  return (
    <Grid container justifyContent="center" alignItems="center" spacing={2} sx={{ padding: '2rem' }}>
      <Grid item xs={12}>
        <Typography variant="h3" align="center" sx={{ marginBottom: '2rem' }}>
          My Projects
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image='/Assets/project1.png'
              alt="Project 1"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project 1
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Project 1
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
      {/* <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Project2Image}
              alt="Project 2"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project 2
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Project 2
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid> */}
      {/* <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Project3Image}
              alt="Project 3"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project 3
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Project 3
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid> */}
      {/* <Grid item xs={12} sm={6} md={3}>
        <Card sx={{ maxWidth: 345 }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={Project4Image}
              alt="Project 4"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Project 4
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Description of Project 4
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid> */}
    </Grid>
  );
}

export default Portfolio;
