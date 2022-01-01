import { List, ListItem } from '@mui/material'
import React from 'react'
import { IconBtn, SideBarContainer } from './styles'
import ConfirmationNumberIcon from '@mui/icons-material/ConfirmationNumber';
import DashboardIcon from '@mui/icons-material/Dashboard';
import CreateIcon from '@mui/icons-material/Create';
import { ProfileContext } from '../../context/ProfileContext';
import Link from 'next/link'
import { Logout } from '../Logout';

export const SideBar = () => {
  const { userProfile } = React.useContext(ProfileContext);

  return (
    <>
    {userProfile?.id && (

      <SideBarContainer
        variant='permanent'
      >
        <List>
          <ListItem
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
           >
             <Link href="/">
              <IconBtn>
                <ConfirmationNumberIcon
                  color='secondary'
                  sx={{
                    transform: 'scale(1.7)'
                  }}
                />
              </IconBtn>
             </Link>
             <Link href={userProfile?.role === 'user' ? '/user' : '/seller'}>
                <IconBtn>
                  <DashboardIcon
                    color='secondary'
                    sx={{
                      transform: 'scale(1.7)'
                    }}
                  />
                </IconBtn>
             </Link>
             {userProfile?.role === 'seller' && (
               <Link href="/create">
                  <IconBtn>
                    <CreateIcon
                      color='secondary'
                      sx={{
                        transform: 'scale(1.7)'
                      }}
                    />
                  </IconBtn>
               </Link>
             )}
             <Logout name="SideBar"/>
          </ListItem>
        </List>
      </SideBarContainer>
    )}
    </>
  )
}
