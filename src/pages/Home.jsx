import React from 'react'
import { Container, Typography, Grid, Paper, Box, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import { School, Star, FactCheck } from '@mui/icons-material';

function Home() {
  return (
    <Container>
    {/* Header */}
    <Box my={4}>
      <Typography variant="h2" component="h1" gutterBottom>
        Welcome to Smart Steps
      </Typography>
      <Typography variant="h6" component="h2" color="textSecondary">
        Guiding Students Towards a Brighter Future
      </Typography>
    </Box>

    {/* Highlights Section */}
    <Box my={4}>
      <Typography variant="h4" component="h2" gutterBottom>
        Highlights
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3}>
            <Box p={2}>
              <School fontSize="large" color="primary" />
              <Typography variant="h6" gutterBottom>
                Expert Guidance
              </Typography>
              <Typography variant="body1">
                Get advice from experienced counselors to make informed career decisions.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3}>
            <Box p={2}>
              <Star fontSize="large" color="secondary" />
              <Typography variant="h6" gutterBottom>
                Student Success Stories
              </Typography>
              <Typography variant="body1">
                Read inspiring stories of students who have found their career paths.
              </Typography>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Paper elevation={3}>
            <Box p={2}>
              <FactCheck fontSize="large" color="action" />
              <Typography variant="h6" gutterBottom>
                Comprehensive Resources
              </Typography>
              <Typography variant="body1">
                Access a wide range of resources to help you with your career planning.
              </Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>

    {/* Facts Section */}
    <Box my={4}>
      <Typography variant="h4" component="h2" gutterBottom>
        Facts
      </Typography>
      <List>
        <ListItem>
          <ListItemIcon>
            <FactCheck />
          </ListItemIcon>
          <ListItemText primary="Over 10,000 students guided" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FactCheck />
          </ListItemIcon>
          <ListItemText primary="95% satisfaction rate" />
        </ListItem>
        <ListItem>
          <ListItemIcon>
            <FactCheck />
          </ListItemIcon>
          <ListItemText primary="Access to 500+ career resources" />
        </ListItem>
      </List>
    </Box>
  </Container>
  )
}

export default Home