import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react'
import { DashboardTab } from '../components/DashboardTab';
import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { PaperComponent } from '../components/PaperComponent';
import { Profile } from '../components/Profile';
import { SideBar } from '../components/SideBar';
import { Tickets } from '../components/Tickets';
import { ProfileContext } from '../context/ProfileContext';

const Seller = () => {
  const { userProfile } = React.useContext(ProfileContext);
  return (
    <PaperComponent>
      <Navbar />
      <SideBar />
      <Layout title="seller dashboard">
        <Box mt={1} mb={3}>
          <DashboardTab />
          <Grid container
            mt={2}
            spacing={2}
            sx={{
              justifyContent: 'center',
            }}
          >
            {userProfile && (
              <Profile userProfile={userProfile}/>
            )}
            <Tickets />
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  )
}

export default Seller;
