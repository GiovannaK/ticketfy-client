import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { DashboardTab } from '../../../components/DashboardTab';
import { Layout } from '../../../components/Layout';
import { Navbar } from '../../../components/Navbar';
import { PaperComponent } from '../../../components/PaperComponent';
import { Profile } from '../../../components/Profile';
import { Tickets } from '../../../components/Tickets';

const Seller = () => {
  return (
    <PaperComponent>
      <Navbar />
      <Layout title="seller dashboard">
        <Box mt={2} mb={3}>
          <DashboardTab />
          <Grid container
            mt={2}
            spacing={2}
            sx={{
              justifyContent: 'center',
            }}
          >
            <Profile />
            <Tickets />
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  )
}

export default Seller;
