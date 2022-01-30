import { Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import { CheckoutButton, ModalStyled, SubTitle, Text, TitleCheckout } from './styles'
import { CardElement } from '@stripe/react-stripe-js';

interface IModalCheckout {
  open: boolean;
  handleClose: () => void;
  total: number
}

export const ModalCheckout = ({open, handleClose, total}: IModalCheckout) => {
  return (
    <ModalStyled
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Grid container sx={{justifyContent: 'center'}}>
        <Grid item xs={12} sm={12} md={10} lg={6} xl={6}>
          <Card sx={{background: 'rgba(255, 255, 255, 0.8)'}}>
            <CardContent>
              <TitleCheckout textAlign="center">
                Pagamento
              </TitleCheckout>
              <SubTitle textAlign="center">
                Quando o pagamento for confirmado, você receberá
                um e-mail com as informações do seu ticket.
              </SubTitle>
              <Grid container spacing={1.5} mb={3}>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Text variant="h5" textAlign="center">
                    Total
                  </Text>
                </Grid>
                <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
                  <Text variant="h5" textAlign="center">
                    {'R$' + Number(total).toFixed(2).toString().replace('.', ',')}
                  </Text>
                </Grid>
              </Grid>
              <CardElement />
              <CheckoutButton variant="outlined">Pagar</CheckoutButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ModalStyled>
  )
}
