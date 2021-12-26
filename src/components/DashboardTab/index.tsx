import { Tabs } from '@mui/material';
import React from 'react'
import { TabCategory } from '../Categories/styles';
import { AppBarDashboard } from './style';
import Link from 'next/link';
import { ProfileContext } from '../../context/ProfileContext';

export const DashboardTab = () => {
  const { userProfile } = React.useContext(ProfileContext);
  return (
    <AppBarDashboard
      position="sticky"
    >
      <Tabs
        scrollButtons="auto"
        variant="scrollable"
      >
        {userProfile?.role === 'user' ? (
          <Link href={`/user`}>
            <TabCategory key={100} label="Meus tickets"/>
          </Link>
        ) : (
          <Link href={`/seller`}>
            <TabCategory key={100} label="Meus tickets"/>
          </Link>
        )}

        {userProfile?.role === 'seller' && (
          <Link href={`/create`}>
            <TabCategory key={200} label="Criar novo evento"/>
          </Link>
        )}

      </Tabs>
    </AppBarDashboard>
  )
}
