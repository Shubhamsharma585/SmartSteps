import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import { styled } from '@mui/system';
import VisibilityIcon from '@mui/icons-material/Visibility';
import GpsFixedIcon from '@mui/icons-material/GpsFixed';
import FlagIcon from '@mui/icons-material/Flag';

const RootContainer = styled('div')({
  marginTop: '2rem',
  marginBottom: '2rem',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  color: (theme) => theme.palette.primary.contrastText,
  // background: '#1976d2',
});

const SectionGrid = styled(Grid)(({ theme }) => ({
  marginTop: '2rem',
  marginBottom: '2rem',
}));

const SectionTitle = styled(Typography)({
  marginBottom: '1rem',
  color: (theme) => theme.palette.secondary.main,
});

const SectionContent = styled(Typography)({
  maxWidth: 600,
  textAlign: 'center',
});

const AboutUs = () => {
  return (
    <RootContainer>
      <Container>
        <Typography variant="h3" component="h1" gutterBottom>
          Welcome to Our Company
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          Discover Our Vision, Mission, and Objectives
        </Typography>
        <SectionGrid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <VisibilityIcon sx={{ fontSize: '3rem', marginBottom: '1rem' }} />
            <SectionTitle variant="h6">
              Our Vision
            </SectionTitle>
            <SectionContent variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut
              convallis neque eu mi facilisis, vel rhoncus tellus ultrices.
            </SectionContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <GpsFixedIcon sx={{ fontSize: '3rem', marginBottom: '1rem' }} />
            <SectionTitle variant="h6">
              Our Mission
            </SectionTitle>
            <SectionContent variant="body1">
              Integer ut velit eget arcu molestie suscipit in sed odio. Nam
              nec velit nec risus efficitur aliquam.
            </SectionContent>
          </Grid>
          <Grid item xs={12} sm={4}>
            <FlagIcon sx={{ fontSize: '3rem', marginBottom: '1rem' }} />
            <SectionTitle variant="h6">
              Our Objectives
            </SectionTitle>
            <SectionContent variant="body1">
              Aenean tempor nisl nec mauris lacinia, at malesuada arcu
              ultricies. Nullam scelerisque lorem nec purus ullamcorper, vitae
              fermentum sapien faucibus.
            </SectionContent>
          </Grid>
        </SectionGrid>
      </Container>
    </RootContainer>
  );
};

export default AboutUs;
