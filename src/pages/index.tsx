import { Box } from '@mui/system';
import * as React from 'react';
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
        <Box mt={20}>
          Lorem ipsum dolor sit amet.
        </Box>
      </Layout>
    </PaperComponent>
  );
}
