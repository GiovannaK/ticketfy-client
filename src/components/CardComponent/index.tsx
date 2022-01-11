import { CardContent } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { ITicket } from '../../interfaces/ITickets'
import moment from 'moment'

import {
  CardMediaStyled,
  CardStyled,
  Date, Hour,
  Locale, Price,
  Title } from './style'

type TicketDetail = {
  ticket: ITicket
}

export const CardComponent = ({ticket}: TicketDetail) => {
  return (
    <CardStyled square>
      <CardMediaStyled
        image="event.png"
      />
      <CardContent>
        <Title variant="h5">{ticket.title}</Title>
        <Box display="flex" justifyContent="space-between">
          <Hour>{moment.utc(ticket.hour).local().format('HH:mm')}</Hour>
          <Date>{moment.utc(ticket.date).local().format('DD/MM/YYYY')}</Date>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Locale>{ticket.isOnline ? 'Online' : 'Presencial'}</Locale>
          <Price>{ticket.price === 0 ? 'Gratuito' : 'R$' + Number(ticket.price).toFixed(2).toString().replace('.', ',')}</Price>
        </Box>
      </CardContent>
    </CardStyled>
  )
}
