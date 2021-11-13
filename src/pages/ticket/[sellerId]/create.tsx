import { Box } from '@mui/system'
import React from 'react'
import { CreateTicketForm } from '../../../components/Create'
import { DashboardTab } from '../../../components/DashboardTab'
import { Layout } from '../../../components/Layout'
import { Navbar } from '../../../components/Navbar'
import { PaperComponent } from '../../../components/PaperComponent'

const CreateTicket = () => {
  return (
    <PaperComponent>
      <Navbar />
      <Layout title="Criar um evento">
        <Box mt={1} mb={5}>
          <DashboardTab />
          <CreateTicketForm />
        </Box>
      </Layout>
    </PaperComponent>
  )
}

export default CreateTicket
