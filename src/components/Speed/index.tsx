import React from 'react';
import Link from 'next/link';
import { SpeedDialAction } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import { ProfileContext } from '../../context/ProfileContext';
import { SpeedCustom } from './styles';

export function Speed() {
  const { userProfile } = React.useContext(ProfileContext);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const actions = [
    { icon: <Link href={userProfile?.role === 'user' ? '/user' : '/seller'}><DashboardIcon color="primary" /></Link>, name: 'Dashboard' },
    { icon: <Link href="/create"><CreateIcon color="primary" /></Link>, name: 'Criar um evento' },
    { icon: <Link href="/"><ConfirmationNumberIcon color="primary" /></Link>, name: 'Home' },
  ];
  return (
    <SpeedCustom
      ariaLabel="SpeedDial"
      icon={<MenuIcon />}
      onClose={handleClose}
      onOpen={handleOpen}
      open={open}
      direction="up"
    >
      {actions.map((action) => (
        <SpeedDialAction
          key={action.name}
          icon={action.icon}
          tooltipTitle={action.name}
          onClick={handleClose}
        />
      ))}
    </SpeedCustom>
  );
}
