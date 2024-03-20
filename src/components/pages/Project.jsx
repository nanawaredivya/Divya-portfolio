import { Grid, Card, CardActionArea, CardContent, CardMedia, Typography, Link } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

const projects = [
  {
    name: 'E-COMMERCE WEBSITE',
    image: '/Assets/project1.png',
    repo: 'https://github.com/nanawaredivya',
    description: 'A hospital website "Shree Clinic" provides essential information about the hospitals services, doctors, and facilities, allowing patients to schedule appointments and access medical resources online.',
  },
  {
    name: 'BLOGS WEBSITE',
    image: '/Assets/project2.png',
    repo: 'https://github.com/nanawaredivya',
    description: 'A blog website showcasing diverse topics, providing insightful articles and engaging content for readers. Explore a range of perspectives and ideas, offering a platform for sharing knowledge.',
  },
  // {
  //   name: 'Project 3',
  //   image: '/path/to/image3.jpg',
  //   repo: 'https://github.com/nanawaredivya',
  //   description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla volutpat vel velit nec feugiat.',
  // },
];

const Project = () => {
  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Typography variant="h4" align="center" gutterBottom
          sx={{
            fontSize: 40,
            color: '#962ac9',
            fontWeight: 'bold',
            marginTop: '1rem',
          }}>
          Projects
        </Typography>
      </Grid>
      {projects.map((project, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Card
            sx={{
              marginBottom: '2rem',
              marginLeft: '1rem',
              marginRight: '2rem',
              paddingInlineEnd: '2rem',
              paddingInlineStart: '2rem',
              paddingBlock: '2rem',
              bgcolor: '#D3D3D3',
              borderRadius: '10px',
            }}
          >
            <CardActionArea>
              <CardMedia
                component="img"
                height="200"
                image={project.image}
                alt={project.name}
                sx={{
                  transition: 'transform 0.3s',
                  '&:hover': {
                    transform: 'scale(1.1)',
                  },
                }}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div"
                  sx={{
                    margin: 1,
                    fontSize: '1rem',
                    color: '#962ac9'
                  }}
                >
                  {project.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {project.description}
                </Typography>
                <Link href={project.repo} target="_blank" rel="noopener noreferrer" sx={{ display: 'flex', alignItems: 'center' }}>
                  <GitHubIcon sx={{ marginRight: '0.5rem' }} />
                  GitHub Repository
                </Link>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}

export default Project;
