import { Tabs } from '@mui/material';
import React from 'react'
import { TabCategory } from '../Categories/styles';
import { AppBarDashboard } from './style';
import Link from 'next/link';

export const DashboardTab = () => {

  return (
    <AppBarDashboard
      position="sticky"
    >
      <Tabs
        scrollButtons="auto"
        variant="scrollable"
      >
        <Link href={`/seller`}>
          <TabCategory key={100} label="Meus eventos"/>
        </Link>
        <Link href={`/create`}>
          <TabCategory key={200} label="Criar novo evento"/>
        </Link>
      </Tabs>
    </AppBarDashboard>
  )
}
