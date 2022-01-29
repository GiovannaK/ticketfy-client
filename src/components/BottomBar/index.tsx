import React from 'react'
import Link from 'next/link'
import { ProfileContext } from '../../context/ProfileContext';
import { BottomNavigation, BottomNavigationAction, Paper } from '@mui/material';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';

export const BottomBar = () => {
  const { userProfile } = React.useContext(ProfileContext);
  return (
    <>
      {userProfile?.id && (

        <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
          <BottomNavigation
            showLabels
          >
            <Link href="/">
              <BottomNavigationAction  icon={<ConfirmationNumberIcon color="primary"/>} />
            </Link>
            <Link href={userProfile?.role === 'user' ? '/user' : '/seller'}>
              <BottomNavigationAction icon={<DashboardIcon color="primary"/>} />
            </Link>
            {userProfile?.role === 'seller' && (
              <Link href="/create">
                <BottomNavigationAction icon={<CreateIcon color="primary" />} />
              </Link>
            )}
          </BottomNavigation>
        </Paper>
      )}
    </>
  )
}
