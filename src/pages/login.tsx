import { Card, CardContent, Grid, Hidden, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link';
import React from 'react'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { PaperComponent } from '../components/PaperComponent'
import { ActionLinks, CardStyled, Input, LoginButton, Title } from '../pageStyles/login'

const Login = () => {
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
                  <form>
                    <Title textAlign="center" variant="h4">Login</Title>
                    <Input placeholder="Digite seu e-mail"/>
                    <LoginButton variant="contained" type="submit">Login</LoginButton>
                  </form>
                  <Link href="/register">
                    <ActionLinks>Não tem uma conta?</ActionLinks>
                  </Link>
                </CardContent>
                <Hidden lgDown>
                  <CardContent sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <img src="svg_login.svg" style={{
                        maxWidth: '50%',
                    }}/>
                  </CardContent>
                </Hidden>
              </CardStyled>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  )
}

export default Login
