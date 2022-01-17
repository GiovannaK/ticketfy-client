import { CircularProgress, Grid } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { CardComponent } from '../components/CardComponent';
import { Categories } from '../components/Categories';
import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { PaperComponent } from '../components/PaperComponent';
import Link from 'next/link';
import { SideBar } from '../components/SideBar';
import { useQuery } from 'react-query';
import { api } from '../services/api';
import { ITicket } from '../interfaces/ITickets';
import { CardCategory } from '../components/CardCategory';

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
        <CardCategory />
        <Box mt={5} mb={5}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            {data && data?.map((ticket) => (
              <Link href={`/ticket/${ticket.sellerId.id}/${ticket.id}`}>
                <Grid item xs={10} sm={6} md={4} lg={4} xl={3}>
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
