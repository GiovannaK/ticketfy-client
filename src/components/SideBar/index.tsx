import { Hidden, List, ListItem } from '@mui/material';
import React from 'react';
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import Link from 'next/link';
import { ProfileContext } from '../../context/ProfileContext';
import { IconBtn, SideBarContainer } from './styles';
import { Logout } from '../Logout';
import { Speed } from '../Speed';

export function SideBar() {
  const { userProfile } = React.useContext(ProfileContext);

  return (
    <>
      <Hidden lgUp>
        <Speed />
      </Hidden>
      <Hidden lgDown>
        <>
          {userProfile?.id && (
          <SideBarContainer
            variant="permanent"
          >
            <List>
              <ListItem
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                }}
              >
                <Link href="/">
                  <IconBtn>
                    <ConfirmationNumberIcon
                      color="primary"
                      sx={{
                        transform: 'scale(1.7)',
                      }}
                    />
                  </IconBtn>
                </Link>
                <Link href={userProfile?.role === 'user' ? '/user' : '/seller'}>
                  <IconBtn>
                    <DashboardIcon
                      color="primary"
                      sx={{
                        transform: 'scale(1.7)',
                      }}
                    />
                  </IconBtn>
                </Link>
                {userProfile?.role === 'seller' && (
                <Link href="/create">
                  <IconBtn>
                    <CreateIcon
                      color="primary"
                      sx={{
                        transform: 'scale(1.7)',
                      }}
                    />
                  </IconBtn>
                </Link>
                )}
                <Logout name="SideBar" />
              </ListItem>
            </List>
          </SideBarContainer>
          )}
        </>
      </Hidden>
    </>
  );
}
