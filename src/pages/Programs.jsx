import React, { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Pay from './Pay';

function Programs() {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ dreams: '', goals: '' });

  const handleNext = () => {
    setStep(step + 1);
  };

  const handleBack = () => {
    setStep(step - 1);
  };

  const handlePay = () => {
    console.log('Triggering payment gateway.');
    // Add your payment gateway integration here
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Container>
      {step === 0 && (
        <Box>
          <Typography variant="h5" gutterBottom>
            Enter Your Details
          </Typography>
          <TextField
            autoFocus
            margin='dense'
            name='dreams'
            label='Your Dreams'
            type='text'
            fullWidth
            variant='outlined'
            value={formData.dreams}
            onChange={handleChange}
          />
          <TextField
            margin='dense'
            name='goals'
            label='Your Goals'
            type='text'
            fullWidth
            variant='outlined'
            value={formData.goals}
            onChange={handleChange}
          />
          <Box mt={2}>
            <Button color='primary' variant='contained' onClick={handleNext}>
              Next
            </Button>
          </Box>
        </Box>
      )}
      {step === 1 && (
        <Box>
          <Typography variant="h5" gutterBottom>
            Confirm Your Details
          </Typography>
          <Typography variant="body1">
            <strong>Dreams:</strong> {formData.dreams}
          </Typography>
          <Typography variant="body1">
            <strong>Goals:</strong> {formData.goals}
          </Typography>
          <Box mt={2}>
            <Button color='secondary' onClick={handleBack}>
              Back
            </Button>
            <Button color='primary' variant='contained' onClick={handleNext} style={{ marginLeft: 10 }}>
              Next
            </Button>
          </Box>
        </Box>
      )}
      {step === 2 && (
        <Pay handleBack={handleBack} handlePay={handlePay} />
      )}
    </Container>
  );
}

export default Programs;
