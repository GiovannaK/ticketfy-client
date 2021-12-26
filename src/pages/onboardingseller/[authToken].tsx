import { CardContent, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import { Layout } from '../../components/Layout'
import { Navbar } from '../../components/Navbar'
import { PaperComponent } from '../../components/PaperComponent'
import { AccessButton, Title } from '../../pageStyles/auth'
import { CardStyled } from '../../pageStyles/login'
import { useRouter } from 'next/router';
import { api } from '../../services/api'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import Cookie from 'js-cookie';

const SellerOnboarding = () => {
  const router = useRouter();
  const {authToken} = router.query as any

  const sendAuthToken = async (authToken: any) => {
    return await api.get(`/auth/${authToken}`)
  }

  const {data, error, isLoading, refetch} = useQuery(["authToken", authToken], () =>
    sendAuthToken(authToken),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  )

  if(data){
    Cookie.set('isLogged', 'true', {
      expires: 7,
    });
    router.push('/nextstep')
  }

  if(error){
    toast.error('Não foi possível efetuar o login')
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>, refetch: any) => {
    refetch()
  }

  return (
    <PaperComponent>
      <Navbar />
      <Layout title="Ticektfy | Acessar minha conta">
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
                    <img src="../seller_access.svg" style={{
                      maxWidth: '70%',
                      marginBottom: '2rem'
                    }}/>
                  </Box>
                  <form>
                    <AccessButton
                      variant="outlined"
                      disabled={isLoading}
                      type="submit"
                      onClick={(e) => handleClick(e, refetch)}
                    >
                      {isLoading ? 'Carregando...' : 'Acessar'}
                    </AccessButton>
                  </form>
                </CardContent>
              </CardStyled>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  )
}

export default SellerOnboarding

