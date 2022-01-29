import { CardContent, CircularProgress, FormControlLabel, Grid, MenuItem, Select } from '@mui/material'
import React from 'react'
import { CardCreateEvent, CheckBoxInput, FormButton, FormTitle, InputCreate, Label, SelectCreate, StyledTextField } from './styles'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { MobileDatePicker, MobileTimePicker} from '@mui/lab';
import brLocale from 'date-fns/locale/pt-BR';
import { Controller, useForm } from 'react-hook-form'
import { useMutation, useQuery } from 'react-query';
import { api } from '../../services/api';
import { ICategory } from '../../interfaces/ICategory';
import { FormError } from '../../pageStyles/global';
import { ITicket } from '../../interfaces/ITicket';
import { toast } from 'react-toastify';
import moment from 'moment'

const getCategory = async () => {
  const categories = await api.get<ICategory>('/category')
  return categories.data;
}


export const CreateTicketForm = (): JSX.Element => {
  const { handleSubmit, register, setValue, getValues, control, formState: { errors } } = useForm();
  const [date, setDate] = React.useState<Date | null>(null);
  const [hour, setHour] = React.useState<Date | null>(null);
  const [isFree, setIsFree] = React.useState<boolean>(false)
  const dateValue = getValues('date') as Date;
  const hourValue = getValues('hour') as Date;

  const {data, error, isLoading} = useQuery("category", getCategory)

  if(error){
    console.log(error)
  }

  if(isLoading){
    <CircularProgress />
  }

  React.useEffect(() => {
    register('date');
    register('hour');
  }, [register]);
  React.useEffect(() => {
    setDate(dateValue || null);
  }, [setDate, dateValue]);
  React.useEffect(() => {
    setDate(hourValue || null);
  }, [setDate, hourValue]);

  const postTicket = async(ticket: ITicket) => {
    const newTicket = {...ticket,
      date: moment.utc(ticket.date).local().format(),
      hour: moment.utc(ticket.hour).local().format(),
      price: ticket.price === "" ? 0 : Number(ticket.price),
      quantity: Number(ticket.quantity)
    }
    console.log(newTicket)
    return await api.post('/ticket', newTicket)
  }

  const {isLoading: loading, mutate} = useMutation(postTicket, {
    onSuccess: () => {
      toast.info('Ticket criado com sucesso!')
    },
    onError: (error) => {
      toast.error('Não foi possível criar ticket.')
    }
  })

  const onSubmit = (values: ITicket) => {
    mutate(values)
  }

  return (
    <>
      <Grid container
        sx={{
          minHeight: '70vh',
          maxWidth: '100%',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <CardCreateEvent>
            <CardContent>
              <FormTitle>Adicionar evento</FormTitle>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Nome do evento *</Label>
                    <InputCreate
                      fullWidth
                      placeholder="Nome do evento"
                      {...register("title", {
                        required: "Nome do evento é requerido",
                        maxLength: 200
                      })}
                    />
                    {errors.title && errors.title.message && (
                      <FormError>{errors.title.message}</FormError>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Categoria *</Label>
                    <SelectCreate
                      fullWidth
                      disabled={isLoading}
                      defaultValue=""
                      inputProps={
                        {...register("category", {
                          required: "Categoria é requerida",
                        })}
                      }
                    >
                      {data && (
                        data.map((category) => (
                          <MenuItem key={category.id} value={category.id}>{category.title}</MenuItem>
                        ))
                      )}
                    </SelectCreate>
                    {errors.category && errors.category.message && (
                      <FormError>{errors.category.message}</FormError>
                    )}
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Label>Venda Ativa</Label>
                    <FormControlLabel
                      label=''
                      control={
                        <Controller
                          name={'isActive'}
                          control={control}
                          render={(props) => (
                            <CheckBoxInput
                              {...props}
                              checked={props.field.value}
                              onChange={(e) => props.field.onChange(e.target.checked)}
                            />
                          )}
                        />
                      }
                    />
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Label>Gratuito</Label>
                    <FormControlLabel
                      label=''
                      control={
                        <Controller
                          name={'isFree'}
                          control={control}
                          render={(props) => (
                            <CheckBoxInput
                              {...props}
                              checked={props.field.value}
                              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                setIsFree(e.target.checked);
                                props.field.onChange(e.target.checked)
                              }}
                            />
                          )}
                        />
                      }
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={4} lg={4} xl={4}>
                    <Label>Quantidade de tickets *</Label>
                    <InputCreate
                      fullWidth placeholder="Quantidade"
                      {...register("quantity", {
                        required: "Quantidade é requerida",
                        pattern: {
                          value: /^[0-9]*$/,
                          message: "Quantidade deve ser um número inteiro"
                        }
                      })}
                      defaultValue={1}
                    />
                    {errors.quantity && errors.quantity.message && (
                      <FormError>{errors.quantity.message}</FormError>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Preço ({isFree ? 'Não disponível' : '*'})</Label>
                    <InputCreate
                      {...register("price", {
                        pattern: {
                          value: /^-?[0-9]\d*\.?\d*$/,
                          message: "Preço inválido"
                        }
                      })}
                      fullWidth placeholder="Preço"
                      disabled={isFree}
                      defaultValue={0}
                    />
                    {errors.price && errors.price.message && (
                      <FormError>{errors.price.message}</FormError>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Link do evento *</Label>
                    <InputCreate
                      fullWidth
                      placeholder="Link do evento"
                      {...register("link", {
                        required: "Nome do evento é requerido",
                        maxLength: 200,
                        minLength: 3,
                      })}
                    />
                    {errors.link && errors.link.type === "maxLength" && (
                      <FormError>Link deve ter até 200 caracteres</FormError>
                    )}
                    {errors.link && errors.link.type === "required" && (
                      <FormError>Link do evento é requerido</FormError>
                    )}
                    {errors.link && errors.link.type === "minLength" && (
                      <FormError>Link deve ter pelo menos 3 caracteres</FormError>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Data *</Label>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
                      <MobileDatePicker
                        value={date}
                        minDate={new Date()}
                        onChange={(newValue) => {
                          setDate(newValue);
                          setValue('date', date, { shouldValidate: true, shouldDirty: true});
                        }}
                        renderInput={(params) =>
                          <StyledTextField
                            {...params} fullWidth />}
                      />
                    </LocalizationProvider>
                    {errors.date && errors.date.message && (
                      <FormError>{errors.date.message}</FormError>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Hora *</Label>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
                      <MobileTimePicker
                        value={hour}
                        onChange={(newValue: Date | any) => {
                          setHour(newValue);
                          setValue('hour', hour, { shouldValidate: true, shouldDirty: true});
                        }}

                        renderInput={(params: any) => <StyledTextField {...params} fullWidth />}
                      />
                    </LocalizationProvider>
                    {errors.hour && errors.hour.message && (
                      <FormError>{errors.hour.message}</FormError>
                    )}
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Label>Descrição (max: 5000)</Label>
                    <InputCreate
                      fullWidth placeholder="Sobre o que é seu evento"
                      multiline
                      maxRows={4}
                      {...register("description", {
                        required: "Descrição do evento é requerido",
                        maxLength: 5000
                      })}
                    />
                    {errors.description && errors.description.message && (
                      <FormError>{errors.description.message}</FormError>
                    )}
                  </Grid >
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <FormButton variant="outlined" disabled={loading} type="submit">Adicionar</FormButton>
                  </Grid>
                  </Grid>
              </form>
            </CardContent>
          </CardCreateEvent>
        </Grid>
      </Grid>
    </>
  )
}
