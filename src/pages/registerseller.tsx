import { Card, CardContent, Grid, Hidden, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link';
import React from 'react'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { PaperComponent } from '../components/PaperComponent'
import { ActionLinks, CardStyled, Input, LoginButton, Title } from '../pageStyles/login'

const RegisterSeller = () => {
  return (
    <PaperComponent>
      <Navbar />
      <Layout title="Registre-se">
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
                <img src="register.svg" style={{
                  height: '100%',
                  width: '100%',
                }}/>
              </Grid>
            </Hidden>
            <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
              <CardStyled square>
                <CardContent>
                  <form>
                    <Title textAlign="center" variant="h4">Quero Vender</Title>
                    <Input placeholder="seu nome completo ou nome da empresa"/>
                    <Input placeholder="Digite seu e-mail"/>
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

export default RegisterSeller
