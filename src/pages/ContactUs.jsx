import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { styled } from '@mui/system';

const RootContainer = styled('div')({
  marginTop: '2rem',
  marginBottom: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
});

const ContactUs = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <RootContainer>
      <Container maxWidth="md">
        <Typography variant="h3" gutterBottom>
          Contact Us
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Contact Information
            </Typography>
            <Typography variant="body1" gutterBottom>
              Address: 123 Sample St, Cityville, Country
            </Typography>
            <Typography variant="body1" gutterBottom>
              Phone: +123 456 7890
            </Typography>
            <Typography variant="body1" gutterBottom>
              Email: info@example.com
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="h6" gutterBottom>
              Send Us a Message
            </Typography>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <TextField
                label="Name"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
              <TextField
                label="Email"
                variant="outlined"
                margin="normal"
                fullWidth
                required
              />
              <TextField
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
                fullWidth
                required
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                style={{ marginTop: '1rem' }}
              >
                Send Message
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </RootContainer>
  );
};

export default ContactUs;
