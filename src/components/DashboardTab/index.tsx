import { Tabs } from '@mui/material';
import React from 'react'
import { TabCategory } from '../Categories/styles';
import { AppBarDashboard } from './style';

export const DashboardTab = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <AppBarDashboard
      position="sticky"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons="auto"
        variant="scrollable"
      >
        <TabCategory key={100} label="Meus eventos"/>
        <TabCategory key={200} label="Criar novo evento"/>
      </Tabs>
    </AppBarDashboard>
  )
}
