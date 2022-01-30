import { Grid, Card, CardContent, CircularProgress, CardMedia, Icon } from '@mui/material'
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
  Finished,
  Hour,
  InputTicket,
  Premiun, Price, Standard, Title
} from '../../../pageStyles/ticket/TicketId'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { ModalCheckout } from '../../../components/ModalCheckout'
import { useForm } from 'react-hook-form'
import { useQuery } from 'react-query'
import {useRouter} from 'next/router'
import { api } from '../../../services/api'
import { ITicket } from '../../../interfaces/ITickets'
import moment from 'moment'
import { SideBar } from '../../../components/SideBar'

type TicketIdType = {
  amount: string;
}

const getTicket = async (id: string | string[] | undefined) => {
  const ticket = await api.get<ITicket>(`/ticket/${id}`)
  return ticket.data
}

const TicketId = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [total, setTotal] = React.useState(0)
  const router = useRouter()
  const {id} = router.query

  const {data, error, isLoading} = useQuery(["ticket", id], () =>
    getTicket(id),
  )

  const handleAmount = (amount: TicketIdType) => {
    const parseAmount = parseInt(amount.amount);
    if(data){
      setTotal(data.price * parseAmount)
    }
  }


  if(error){
    console.log(error)
  }

  if(isLoading){
    <CircularProgress />
  }
  return (
    <PaperComponent>
      <Navbar />
      <SideBar />
      <Layout title="event name">
        <Box mt={3}>
          <Grid
            container
            spacing={0}
            sx={{
              justifyContent: 'center',
              zIndex: -2
            }}
          >
            <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
              <Card>
                <CardMedia image="../../event.png" sx={{
                    minWidth: '100%',
                    height: 350,
                    position: 'relative',
                  }}
                />
              </Card>
            </Grid>
            <Grid item xs={12} sm={10} md={10} lg={10} xl={10}>
              <CardStyled square sx={{background: 'transparent', maxHeight: '60vh'}}>
                <Grid
                  container
                >
                  <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CardStyled square>
                      <CardContent>
                        <Grid
                          container
                          spacing={2}
                          direction="row"
                          justifyContent="center"
                          alignItems="center"
                          sx={{textAlign: 'center'}}
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
                          </Grid>
                        </Grid>
                      </CardContent>
                    </CardStyled>
                  </Grid>
                  <Grid xs={12} sm={12} md={6} lg={6} xl={6}>
                    <CardStyled square>
                      <CardContent>
                        slsdk
                      </CardContent>
                    </CardStyled>
                  </Grid>
                </Grid>
              </CardStyled>
            </Grid>
          </Grid>
        </Box>
        <ModalCheckout open={open} handleClose={handleClose} total={total}/>
      </Layout>
    </PaperComponent>
  )
}

export default TicketId
