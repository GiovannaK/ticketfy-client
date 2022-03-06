/* eslint-disable no-shadow */
/* eslint-disable consistent-return */
import { Card, CardContent, Grid } from '@mui/material';
import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useRouter } from 'next/router';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import {
  CheckoutButton, ModalStyled, SubTitle, Text, TitleCheckout,
} from './styles';
import { api } from '../../services/api';

interface IModalCheckout {
  open: boolean
  handleClose: () => void
  total: number
  quantity: number
}

type PostPayment = {
  paymentMethodId: string | undefined
  quantity: number
  ticketsOrder: any
}

export const ModalCheckout = ({
  open, handleClose, total, quantity,
}: IModalCheckout) => {
  const stripe = useStripe();
  const elements = useElements();
  const router = useRouter();
  const { id: ticketsOrder } = router.query as any;

  const postPayment = async (sendPaymentData: PostPayment) => api.post<PostPayment>('/order', sendPaymentData);

  const handleSubmit = async () => {
    const cardElement = elements?.getElement(CardElement);

    if (!stripe || !elements || !cardElement) {
      return;
    }
    const stripeResponse = await stripe.createPaymentMethod({
      type: 'card',
      card: cardElement,
    });
    const { error, paymentMethod } = stripeResponse;

    if (error || !paymentMethod) {
      return;
    }
    const paymentMethodId = paymentMethod.id;
    return paymentMethodId;
  };

  const { isLoading, mutate } = useMutation(postPayment, {
    onSuccess: () => {
      toast.info('Pagamento está sendo processado!');
    },
    onError: () => {
      toast.error('Não foi possível processar pagamento!');
    },
  });
  const onSubmit = async (
    e: React.MouseEvent<HTMLElement>,
    quantity: number,
    ticketsOrder: any,
  ) => {
    const paymentMethodId = await handleSubmit();
    const sendPaymentData = { paymentMethodId, quantity, ticketsOrder };
    mutate(sendPaymentData);
  };

  return (
    <ModalStyled
      open={open}
      onClose={handleClose}
    >
      <Grid container sx={{ justifyContent: 'center' }}>
        <Grid item xs={12} sm={12} md={10} lg={6} xl={6}>
          <Card sx={{ background: 'rgba(255, 255, 255, 0.8)' }}>
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
              <CheckoutButton
                onClick={(e) => onSubmit(e, quantity, ticketsOrder)}
                variant="outlined"
                disabled={isLoading}
              >
                Pagar
              </CheckoutButton>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </ModalStyled>
  );
};
