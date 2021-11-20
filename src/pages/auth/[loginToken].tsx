import { CardContent, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Layout } from '../../components/Layout'
import { Navbar } from '../../components/Navbar'
import { PaperComponent } from '../../components/PaperComponent'
import { AccessButton, Title } from '../../pageStyles/auth'
import { CardStyled } from '../../pageStyles/login'

const AuthLogin = () => {
  return (
    <PaperComponent>
      <Navbar />
      <Layout title="Criar um evento">
        <Box mt={7} mb={5}>
          <Grid
            container
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={10} lg={8} xl={8}>
              <CardStyled>
                <CardContent>
                  <Title>Acessar minha conta</Title>
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img src="../auth.svg" style={{
                      maxWidth: '70%',
                      marginBottom: '2rem'
                    }}/>
                  </Box>
                  <AccessButton
                    variant="outlined"
                  >
                    Acessar
                  </AccessButton>
                </CardContent>
              </CardStyled>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  )
}

export default AuthLogin
