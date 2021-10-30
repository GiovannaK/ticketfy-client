import { CardContent } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import {
  CardMediaStyled,
  CardStyled,
  Date, Hour,
  Locale, Price,
  Title } from './style'

export const CardComponent = () => {
  return (
    <CardStyled square>
      <CardMediaStyled
        image="event.png"
      />
      <CardContent>
        <Title variant="h5">Event Name</Title>
        <Box display="flex" justifyContent="space-between">
          <Hour>20:00</Hour>
          <Date>20/10/2021</Date>
        </Box>
        <Box display="flex" justifyContent="space-between">
          <Locale>Online</Locale>
          <Price>R$200,00</Price>
        </Box>
      </CardContent>
    </CardStyled>
  )
}
