import React from 'react'
import { AppBar, Tabs, Tab } from '@mui/material'
import { AppBarCategory, TabCategory } from './styles';

export const Categories = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  return (
    <AppBarCategory
      position="sticky"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons="auto"
        variant="scrollable"
      >
        <TabCategory key={1} label="Tecnologia"/>
        <TabCategory key={2} label="Música"/>
      </Tabs>
    </AppBarCategory>
  )
}
