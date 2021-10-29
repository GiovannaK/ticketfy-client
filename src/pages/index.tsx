import { Box } from '@mui/system';
import * as React from 'react';
import { ButtonTest } from '../components/Button';
import { Layout } from '../components/Layout';
import { Navbar } from '../components/Navbar';
import { PaperComponent } from '../components/PaperComponent';

export default function Index() {
  return (
    <PaperComponent>
      <Navbar />
      <Layout title="home">
        <Box mt={20}>
          ahjshdhfd
        </Box>
      </Layout>
    </PaperComponent>
  );
}
