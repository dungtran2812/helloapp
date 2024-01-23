import React from 'react';
import { Container, Typography, Grid, TextField, Button, Paper } from '@mui/material';

const Contact = () => {
  return (
    <Container>
      <Paper elevation={3} style={{ padding: '20px', marginTop: '20px' }}>
        <Typography variant="h2"  gutterBottom>
          Contact Us
        </Typography>

        <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField label="Your Name" fullWidth />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField label="Your Email" fullWidth />
            </Grid>
            <Grid item xs={12}>
              <TextField label="Message" multiline rows={4} fullWidth />
            </Grid>
            <Grid item xs={12}>
              <Button variant="contained" color="primary">
                Send Message
              </Button>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    );
  };

export default Contact;