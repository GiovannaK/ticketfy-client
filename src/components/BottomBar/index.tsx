import React from 'react'
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ArchiveIcon from '@mui/icons-material/Archive';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';

export const BottomBar = () => {
  return (
    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
      <BottomNavigation
        showLabels
      >
        <BottomNavigationAction  icon={<ConfirmationNumberIcon color="primary"/>} />
        <BottomNavigationAction icon={<DashboardIcon color="primary"/>} />
        <BottomNavigationAction icon={<CreateIcon color="primary" />} />
      </BottomNavigation>
    </Paper>
  )
}
