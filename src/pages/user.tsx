import { Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { PaperComponent } from '../components/PaperComponent'
import { UserProfileCard } from '../components/User/UserProfileCard'
import { UserTickets } from '../components/User/UserTickets'

const User = () => {
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
            <UserProfileCard />
            <UserTickets />
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  )
}

export default User
