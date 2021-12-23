import React from 'react'
import PersonIcon from '@mui/icons-material/Person';
import DashboardIcon from '@mui/icons-material/Dashboard';
import Link from 'next/link'
import SpeedDial from '@mui/material/SpeedDial';
import SpeedDialIcon from '@mui/material/SpeedDialIcon';
import SpeedDialAction from '@mui/material/SpeedDialAction';
import { ProfileContext } from '../../context/ProfileContext';


export const SpeedNavigation = () => {
  const { userProfile } = React.useContext(ProfileContext);

  const actions = [
    {icon: <Link href={userProfile?.role === 'user' ? '/user' : '/seller'}><PersonIcon /></Link>, name: 'Dashboard', link: '/user'},
    {icon: <Link href="/"><DashboardIcon /></Link>, name: 'Home', link: '/'},
  ]

  return (
    <SpeedDial
        ariaLabel="SpeedDial basic example"
        sx={{ position: 'fixed', bottom: 16, right: 16 }}
        icon={<SpeedDialIcon />}
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
        />
      ))}
    </SpeedDial>
  )
}
