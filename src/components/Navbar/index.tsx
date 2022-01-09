import React, { useContext } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { Hidden, IconButton, Toolbar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { AppBarStyled, LoginButton, RegisterButton } from './styles';
import SellIcon from '@mui/icons-material/Sell';
import Link from 'next/link'
import { ProfileContext } from '../../context/ProfileContext';
import { Logout } from '../Logout';

export const Navbar = () => {
  const { userProfile } = useContext(ProfileContext);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled position="sticky">
        <Toolbar>
          <Box sx={{flexGrow: 1}}>
            <Link href="/">
              <img src="/logo.png" style={{maxWidth: 100, cursor: 'pointer', marginLeft: '5rem'}}/>
            </Link>
          </Box>
          <Hidden mdDown>
            {userProfile?.id ? (
              <Logout name="Navbar"/>
            ) : (
              <>
                <Link href="/registerseller">
                  <RegisterButton
                    variant="outlined"
                    startIcon={<SellIcon />}
                  >
                     Quero vender
                  </RegisterButton>
                </Link>

                <Link href="/login">
                  <LoginButton
                    startIcon={<PersonIcon />}
                    variant="contained"
                  >
                    Entrar
                  </LoginButton>
                </Link>
              </>
            )}
          </Hidden>
        </Toolbar>
      </AppBarStyled>
    </Box>
  )
}
