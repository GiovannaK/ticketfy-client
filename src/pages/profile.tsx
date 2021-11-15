import { Box } from '@mui/system'
import React from 'react'
import { DashboardTab } from '../components/DashboardTab'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { PaperComponent } from '../components/PaperComponent'
import {UpdatePersonalDataForm} from '../components/UpdatePersonalData'

const UpdateProfileInfo = () => {
  return (
    <PaperComponent>
      <Navbar />
      <Layout title="Criar um evento">
        <Box mt={1} mb={5}>
          <DashboardTab />
          <UpdatePersonalDataForm />
        </Box>
      </Layout>
    </PaperComponent>
  )
}

export default UpdateProfileInfo
