import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Box } from '@mui/system';
import { AppBar, Button, IconButton, Toolbar, Typography } from '@mui/material';
import { AppBarStyled } from './styles';

export const Navbar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBarStyled position="fixed">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon sx={{fontSize: 40}}/>
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBarStyled>
    </Box>
  )
}
