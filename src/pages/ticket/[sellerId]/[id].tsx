/* eslint-disable no-shadow */
/* eslint-disable no-unused-vars */
import {
  Grid, Card, CardContent, CircularProgress, CardMedia, Icon, Avatar, Toolbar,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useQuery } from 'react-query';
import { useRouter } from 'next/router';
import moment from 'moment';
import { Layout } from '../../../components/Layout';
import { Navbar } from '../../../components/Navbar';
import { PaperComponent } from '../../../components/PaperComponent';
import {
  BuyButton,
  CardStyled, Date,
  Description,
  Hour,
  InputTicket,
  Premiun, Standard, Subtitle, Title,
} from '../../../pageStyles/ticket/TicketId';
import { ModalCheckout } from '../../../components/ModalCheckout';
import { api } from '../../../services/api';
import { ITicket } from '../../../interfaces/ITickets';
import { SideBar } from '../../../components/SideBar';
import { Recommended } from '../../../components/Recommended';

type TicketIdType = {
  amount: string;
}

const getTicket = async (id: string | string[] | undefined) => {
  const ticket = await api.get<ITicket>(`/ticket/${id}`);
  return ticket.data;
};

function TicketId() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [amount, setAmount] = React.useState(0);
  const {
    register, handleSubmit, watch, formState: { errors },
  } = useForm();
  const [total, setTotal] = React.useState(0);
  const router = useRouter();
  const { id } = router.query;

  const { data, error, isLoading } = useQuery(['ticket', id], () => getTicket(id));

  const handleAmount = (amount: TicketIdType) => {
    const parseAmount = parseInt(amount.amount, 10);
    setAmount(parseAmount);
    if (data) {
      setTotal(data.price * parseAmount);
    }
  };

  if (error) {
    console.log(error);
  }

  if (isLoading) {
    <CircularProgress />;
  }
  return (
    <PaperComponent>
      <Navbar />
      <SideBar />
      <Layout title="event name">
        <Box mt={3} mb={15}>
          <Grid
            container
            spacing={0}
            sx={{
              justifyContent: 'center',
              zIndex: -2,
            }}
          >
            <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
              <Card>
                <CardMedia
                  image="../../event.png"
                  sx={{
                    minWidth: '100%',
                    height: 350,
                    position: 'relative',
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
              <CardStyled
                square
                sx={{
                  background: 'transparent', height: '60vh', overflowY: 'auto',
                }}
              >
                <Grid
                  container
                >
                  <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CardStyled square sx={{ minHeight: '60vh' }}>
                      <CardContent>
                        <Grid
                          container
                          spacing={2}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          sx={{ textAlign: 'center' }}
                        >
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <Title>{data && data?.title}</Title>
                          </Grid>
                          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <Premiun>{'R$' + Number(data && data?.price).toFixed(2).toString().replace('.', ',')}</Premiun>
                          </Grid>
                          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <Hour>{moment.utc(data && data?.hour).local().format('HH:mm')}</Hour>
                          </Grid>
                          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <Date>{moment.utc(data && data?.date).local().format('DD/MM/YYYY')}</Date>
                          </Grid>
                          <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                            <Standard>{data?.ticketCategory && data.ticketCategory.title}</Standard>
                          </Grid>
                          <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                            <form onSubmit={handleSubmit(handleAmount)}>
                              <InputTicket
                                placeholder="quantidade"
                                type="number"
                                defaultValue={1}
                                {...register('amount', { required: 'Quantidade não pode ser nula' })}
                              />
                              <BuyButton
                                variant="contained"
                                onClick={handleOpen}
                                type="submit"
                              >
                                Comprar
                              </BuyButton>
                            </form>
                          </Grid>
                        </Grid>
                      </CardContent>
                    </CardStyled>
                  </Grid>
                  <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CardStyled square sx={{ minHeight: '60vh' }}>
                      <CardContent>
                        <Description>INFORMAÇÕES DO VENDEDOR</Description>
                        <Box mt={4.5}>
                          <Grid
                            container
                            spacing={2}
                            direction="row"
                            justifyContent="center"
                            alignItems="center"
                            sx={{ textAlign: 'center' }}
                          >
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                              <Avatar sx={{ width: '70%', height: '70%' }} />
                            </Grid>
                            <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                              <Subtitle>{data?.sellerId && data.sellerId.fullName}</Subtitle>
                            </Grid>
                          </Grid>
                          <Toolbar />
                          <Recommended />
                        </Box>
                      </CardContent>
                    </CardStyled>
                  </Grid>
                </Grid>
              </CardStyled>
            </Grid>
          </Grid>
        </Box>
        <ModalCheckout open={open} handleClose={handleClose} total={total} quantity={amount} />
      </Layout>
    </PaperComponent>
  );
}

export default TicketId;
