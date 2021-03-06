import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React, { useContext } from 'react'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { PaperComponent } from '../components/PaperComponent'
import { SideBar } from '../components/SideBar'
import { UserProfileCard } from '../components/User/UserProfileCard'
import { UserTickets } from '../components/User/UserTickets'
import { ProfileContext } from '../context/ProfileContext'

const User = () => {
  const { userProfile } = useContext(ProfileContext);
  return (
    <PaperComponent>
      <Navbar />
      <SideBar />
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
    </PaperComponent>
  )
}

export default User
