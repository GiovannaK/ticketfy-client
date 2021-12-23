import { Grid, Card, CardContent } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Layout } from '../../../components/Layout'
import { Navbar } from '../../../components/Navbar'
import { PaperComponent } from '../../../components/PaperComponent'
import LocalAtmIcon from '@mui/icons-material/LocalAtm';
import DateRangeIcon from '@mui/icons-material/DateRange';
import ViewQuiltIcon from '@mui/icons-material/ViewQuilt';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import {
  BuyButton,
  CardStyled, Date,
  Description,
  Hour, InputTicket, Locale,
  Premiun, Price, Standard, Title
} from '../../../pageStyles/ticket/TicketId'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ModalCheckout } from '../../../components/ModalCheckout'
import { useForm } from 'react-hook-form'

type TicketIdType = {
  amount: string;
}

const TicketId = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [total, setTotal] = React.useState(0)

  const handleAmount = (data: TicketIdType) => {
    console.log(data);
    const parseAmount = parseInt(data.amount);
    setTotal(20 * parseAmount)
  }
  return (
    <PaperComponent>
      <Navbar />
      <Layout title="event name">
        <Box mt={3}>
          <Grid
            container
            spacing={0}
            sx={{
              minHeight: '70vh',
              maxWidth: '100%',
              justifyContent: 'center',
            }}
          >
            <Grid item xs={12} sm={12} md={6} lg={8} xl={8}>
              <img src="/event.png" style={{height: '80%', width: '100%'}} />
            </Grid>
            <Grid item xs={12} sm={12} md={6} lg={4} xl={4}>
              <CardStyled square>
                <CardContent>
                  <Title
                    textAlign="center"
                    variant="h5"
                  >
                    Event Name
                  </Title>
                  <Grid
                    container mt={1.5}
                    spacing={2}
                  >
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                      <Premiun><LocalAtmIcon /> R$ 20,00</Premiun>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                      <Hour><AccessTimeIcon /> 19:00</Hour>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                      <Date><DateRangeIcon /> 20/10/2021</Date>
                    </Grid>
                    <Grid item xs={6} sm={6} md={6} lg={6} xl={6}>
                      <Standard><ViewQuiltIcon /> Tecnologia</Standard>
                    </Grid>
                    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                      <Locale>
                        <LocationOnIcon /> Lorem ipsum dolor sit amet, consectetur adipisicing
                      </Locale>
                    </Grid>
                  </Grid>
                  <form onSubmit={handleSubmit(handleAmount)}>
                    <InputTicket
                      placeholder="quantidade"
                      type="number"
                      defaultValue={1}
                      {...register("amount", {required: 'Quantidade não pode ser nula'})}
                    />
                    <BuyButton
                      variant="contained"
                      onClick={handleOpen}
                      type="submit"
                    >
                      Comprar
                    </BuyButton>
                  </form>
                </CardContent>
              </CardStyled>
            </Grid>
          </Grid>
          <Grid container mb={5}>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
              <CardStyled>
                <CardContent>
                  <Title variant="h6" textAlign="center">Descrição</Title>
                  <Description>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat atque eligendi expedita eum dolores inventore possimus! Rerum laborum laudantium quas est quam consequuntur alias corrupti vitae fugiat enim assumenda itaque, ratione non, eligendi magnam nihil ut nostrum nisi necessitatibus! Dignissimos et accusantium quaerat quis nobis quam sequi molestias officiis deleniti?
                  </Description>
                </CardContent>
              </CardStyled>
            </Grid>
          </Grid>
        </Box>
      </Layout>
      <ModalCheckout open={open} handleClose={handleClose} total={total}/>
    </PaperComponent>
  )
}

export default TicketId
