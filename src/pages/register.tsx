import { CardContent, Grid, Hidden } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link';
import React from 'react'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { PaperComponent } from '../components/PaperComponent'
import { ActionLinks, CardStyled, Input, LoginButton, Title } from '../pageStyles/login'
import { useForm } from "react-hook-form";
import { FormError } from '../pageStyles/global';
import { IRegister } from '../interfaces/IRegister';

const Register = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const onSubmit = (values: IRegister) => {
    console.log(values)
  }

  return (
    <PaperComponent>
      <Navbar />
      <Layout title="Ticketfy | Registre-se">
        <Box mt={3} mb={5}>
          <Grid
            container
            sx={{
              minHeight: '70vh',
              maxWidth: '100%',
              justifyContent: 'center',
            }}
          >
            <Hidden lgDown>
              <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                <img src="online.png" style={{
                  height: '100%',
                  width: '100%',
                  filter: 'brightness(50%)'
                }}/>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
              <CardStyled square>
                <CardContent>
                  <form onSubmit={handleSubmit(onSubmit)}>
                    <Title textAlign="center" variant="h4">Registre-se</Title>
                    <Input
                      placeholder="Digite seu nome completo"
                      type="text"
                      {...register("fullName", {
                        required: true,
                        maxLength: 200
                      })}
                    />
                    {errors.fullName && errors.fullName.type === "required" && (
                      <FormError>Nome completo é requerido</FormError>
                    )}
                    {errors.fullName && errors.fullName.type === "maxLength" && (
                      <FormError>Nome completo deve ter até 200 caracteres</FormError>
                    )}
                    <Input
                      placeholder="Digite seu e-mail"
                      type="email"
                      {...register("email", {
                        required: "E-mail é requerido",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "E-mail inválido"
                        }
                      })}
                    />
                    {errors.email && errors.email.message && (
                      <FormError>{errors.email.message}</FormError>
                    )}
                    <LoginButton variant="contained" type="submit">Registre-se</LoginButton>
                  </form>
                  <Link href="/login">
                    <ActionLinks>Já tem uma conta?</ActionLinks>
                  </Link>
                </CardContent>
              </CardStyled>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  )
}

export default Register
