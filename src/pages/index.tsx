import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import * as React from 'react';
import { CardComponent } from '../components/CardComponent';
import { Categories } from '../components/Categories';
import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { PaperComponent } from '../components/PaperComponent';

export default function Index() {
  return (
    <PaperComponent>
      <Navbar />
      <Layout title="home">
        <Categories />
        <Box mt={5} mb={5}>
          <Grid
            container
            spacing={2}
            direction="row"
            justifyContent="center"
            alignItems="center"
          >
            <Grid item xs={10} sm={6} md={4} lg={4} xl={3}>
              <CardComponent />
            </Grid>
            <Grid item xs={10} sm={6} md={4} lg={4} xl={3}>
              <CardComponent />
            </Grid>
            <Grid item xs={10} sm={6} md={4} lg={4} xl={3}>
              <CardComponent />
            </Grid>
            <Grid item xs={10} sm={6} md={4} lg={4} xl={3}>
              <CardComponent />
            </Grid>
            <Grid item xs={10} sm={6} md={4} lg={4} xl={3}>
              <CardComponent />
            </Grid>
            <Grid item xs={10} sm={6} md={4} lg={4} xl={3}>
              <CardComponent />
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  );
}
