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
import { toast } from 'react-toastify';
import { useMutation } from 'react-query';
import { ILogin } from '../interfaces/ILogin';
import { api } from '../services/api';

const Login = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const postUser = (user: ILogin) => {
    return api.post('/auth/login', user);
  }

  const {isLoading, mutate} = useMutation(postUser, {
    onSuccess: () => {
      toast.info('Acesse seu e-mail para fazer login')
    },
    onError: () => {
      toast.error('Não foi possível enviar e-mail de login, verifique sua conexão')
    }
  })

  const onSubmit = (values: ILogin) => {
    mutate(values)
  }

  return (
    <PaperComponent>
      <Navbar />
      <Layout title="login">
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
              <Grid item xs={12} sm={12} md={4} lg={6} xl={6}>
                <img src="login_image.jpg" style={{
                  height: '100%',
                  width: '100%',
                  filter: 'brightness(50%)'
                }}/>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={8} lg={6} xl={6}>
              <CardStyled square>
                <CardContent>
                  <form  onSubmit={handleSubmit(onSubmit)}>
                    <Title textAlign="center" variant="h4">Login</Title>
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
                    <LoginButton
                      variant="contained"
                      type="submit"
                      disabled={isLoading}
                    >
                      Login
                    </LoginButton>
                  </form>
                  <Link href="/register">
                    <ActionLinks>Não tem uma conta?</ActionLinks>
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

export default Login
