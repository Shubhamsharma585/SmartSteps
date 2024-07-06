import React from 'react';
import { Button, Typography, Box } from '@mui/material';

const Pay = ({ handleBack, handlePay }) => {
  return (
    <Box>
      <Typography variant="h5" gutterBottom>
        Ready to Pay?
      </Typography>
      <Typography variant="body1" gutterBottom>
        Click "Pay" to proceed with the payment.
      </Typography>
      <Box mt={2}>
        <Button color='secondary' onClick={handleBack}>
          Back
        </Button>
        <Button color='primary' variant='contained' onClick={handlePay} style={{ marginLeft: 10 }}>
          Pay
        </Button>
      </Box>
    </Box>
  );
};

export default Pay;
