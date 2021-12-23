import { CardContent, Grid } from '@mui/material'
import React from 'react'
import { Active, CardTicket, Date, Hour, Locale, Price, TicketId, TitleTicket } from './styles'
import { UserTicketDetails } from './UserTicketDetails';

export const UserTickets = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <CardTicket onClick={handleOpen}>
          <CardContent>
            <TitleTicket>Event Name</TitleTicket>
            <TicketId>8287387383</TicketId>
            <Grid
              container
              mt={1}
              spacing={0.5}
            >
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Price>Free</Price>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Date>20/11/2021</Date>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Locale>Online</Locale>
              </Grid>
              <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                <Hour>17:00</Hour>
              </Grid>
              <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                <Active>Venda Ativa</Active>
              </Grid>
            </Grid>
          </CardContent>
        </CardTicket>
      </Grid>
      <UserTicketDetails open={open} handleClose={handleClose}/>
    </>
  )
}
