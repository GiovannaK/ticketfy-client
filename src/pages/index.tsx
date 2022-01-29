import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { CardComponent } from '../components/CardComponent';
import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { PaperComponent } from '../components/PaperComponent';
import Link from 'next/link';
import { SideBar } from '../components/SideBar';
import { useQuery } from 'react-query';
import { api } from '../services/api';
import { ITicket } from '../interfaces/ITickets';
import { CardCategory } from '../components/CardCategory';
import { BestSellers } from '../components/BestSellers';

const getTickets = async () => {
  const tickets = await api.get<ITicket[]>('/ticket')
  return tickets.data
}

export default function Index() {
  const {data, error, isLoading} = useQuery("tickets", getTickets)

  if(error){
    console.log(error)
  }

  if(isLoading){
    <CircularProgress />
  }

  return (
    <PaperComponent>
      <Navbar />
      <SideBar />
      <Layout title="home">
        <BestSellers />
        <CardCategory />
        <Box mt={5} mb={20}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {data && data?.map((ticket) => (
              <Link href={`/ticket/${ticket.sellerId.id}/${ticket.id}`}>
                <Grid item xs={11} sm={5.5} md={3.7} lg={2.75} xl={2.75}>
                  <CardComponent ticket={ticket} />
                </Grid>
              </Link>
            ))}
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  );
}
