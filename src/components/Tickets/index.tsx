import { CardContent, Grid } from '@mui/material'
import React from 'react'
import { Active, CardTicket, Date, Hour, Locale, Price, TitleTicket } from './styles'
import Link from 'next/link';

export const Tickets = () => {
  return (
    <>
      <Grid item xs={12} sm={6} md={4} lg={4} xl={4}>
        <Link href={`/update/47474674`}>
          <CardTicket>
            <CardContent>
              <TitleTicket>Event Name</TitleTicket>
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
        </Link>
      </Grid>
    </>
  )
}
