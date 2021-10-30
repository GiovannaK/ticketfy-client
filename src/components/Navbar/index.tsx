import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { Hidden, IconButton, Toolbar } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import { AppBarStyled, LoginButton, RegisterButton } from './styles';
import SellIcon from '@mui/icons-material/Sell';

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled position="sticky">
        <Toolbar>
          <Hidden mdUp>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <MenuIcon sx={{fontSize: 35}}/>
            </IconButton>
          </Hidden>
          <Box sx={{flexGrow: 1}}>
            <img src="logo.png" style={{maxWidth: 115}}/>
          </Box>
          <Hidden mdDown>
            <RegisterButton
              variant="outlined"
              startIcon={<SellIcon />}
            >
               Quero vender
            </RegisterButton>
            <LoginButton
              startIcon={<PersonIcon />}
              variant="contained"
            >
              Entrar
            </LoginButton>
          </Hidden>
        </Toolbar>
      </AppBarStyled>
    </Box>
  )
}
