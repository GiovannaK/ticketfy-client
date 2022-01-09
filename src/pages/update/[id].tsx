import { Box } from '@mui/system'
import React from 'react'
import { DashboardTab } from '../../components/DashboardTab'
import { Layout } from '../../components/Layout'
import { Navbar } from '../../components/Navbar'
import { PaperComponent } from '../../components/PaperComponent'
import { SideBar } from '../../components/SideBar'
import { UpdateTicketForm } from '../../components/UpdateTicket'

const UpdateTicket = () => {
  return (
    <PaperComponent>
      <Navbar />
      <SideBar />
      <Layout title="Criar um evento">
        <Box mt={1} mb={5}>
          <UpdateTicketForm />
        </Box>
      </Layout>
    </PaperComponent>
  )
}

export default UpdateTicket
