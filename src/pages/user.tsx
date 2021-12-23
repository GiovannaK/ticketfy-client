import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { PaperComponent } from '../components/PaperComponent'
import { SpeedNavigation } from '../components/SpeedNavigation'
import { UserProfileCard } from '../components/User/UserProfileCard'
import { UserTickets } from '../components/User/UserTickets'
import { ProfileContext } from '../context/ProfileContext'

const User = () => {
  const { userProfile } = useContext(ProfileContext);
  return (
    <PaperComponent>
      <Navbar />
      <Layout title="Criar um evento">
        <Box mt={1} mb={5}>
        <Grid container
            mt={2}
            spacing={2}
            sx={{
              justifyContent: 'center',
            }}
          >
            {userProfile && (
              <UserProfileCard userProfile={userProfile}/>
            )}
            <UserTickets />
          </Grid>
        </Box>
      </Layout>
      <SpeedNavigation />
    </PaperComponent>
  )
}

export default User
