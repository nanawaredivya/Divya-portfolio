import React from 'react';
import { Button, Typography } from '@mui/material';
import GetAppIcon from '@mui/icons-material/GetApp';

const Resume = () => {
  const downloadResume = () => {
    const link = document.createElement('a');
    link.href = '/Doc/Divya-React-Frontend-Resume.docx';
    link.download = 'resume.doc';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '70vh',
        backgroundColor: '#e8e8e8',
      }}>
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <Typography variant="h4" gutterBottom>
          Download Resume
        </Typography>
        <Typography variant="body1" gutterBottom>
          Click the button below to download my resume in DOC format.
        </Typography>
        <Button variant="contained" onClick={downloadResume}
          sx={{
            backgroundColor: "#D35400",
            '&:hover': {
              backgroundColor: '#D35400 ',
            }
          }}
          startIcon={<GetAppIcon />}
          >
          Download
        </Button>
      </div>
    </div>
  );
};

export default Resume;
