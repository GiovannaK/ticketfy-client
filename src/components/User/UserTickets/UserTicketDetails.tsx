import { Card, CardContent, Grid, Modal, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { CardStyled, Title } from './UserTicketDetailsStyle'

type UserTicketDetailsProps = {
  open: boolean;
  handleClose: () => void;
}

export const UserTicketDetails = ({open, handleClose}: UserTicketDetailsProps) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <Grid container sx={{justifyContent: 'center'}}>
        <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
          <CardStyled>
            <CardContent>
              <Title>473838333334748</Title>
              <Grid container>
                <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                  
                </Grid>
              </Grid>
            </CardContent>
          </CardStyled>
        </Grid>
      </Grid>
    </Modal>
  )
}
