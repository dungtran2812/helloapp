import React from 'react';
import { Container, Typography, Paper, Grid } from '@mui/material';

const About = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>

        <Typography paragraph>
          Here you can see player card, which consists of over 50 soccer football player from all over the world
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Nation
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt vestibulum mauris, vel
              euismod tortor facilisis ut.
            </Typography>
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h6" gutterBottom>
              Daily News
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tincidunt vestibulum mauris, vel
              euismod tortor facilisis ut.
            </Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
};

export default About;