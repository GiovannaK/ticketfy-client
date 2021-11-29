import { CircularProgress, Grid } from '@mui/material';
import React from 'react';

export const Loading = () => (
  <>
    <Grid container sx={{
      minHeight: '100vh',
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <CircularProgress sx={{ marginTop: '50vh' }} />
    </Grid>
  </>
);

