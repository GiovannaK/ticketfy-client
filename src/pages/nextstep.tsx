import { CardContent, Grid } from '@mui/material'
import { Box } from '@mui/system'
import { useRouter } from 'next/router'
import React from 'react'
import { useQuery } from 'react-query'
import { toast } from 'react-toastify'
import { Layout } from '../components/Layout'
import { Navbar } from '../components/Navbar'
import { PaperComponent } from '../components/PaperComponent'
import { ButtonData, CardStyled } from '../pageStyles/nextstep'
import { api } from '../services/api'

type AccountLink = {
  object: string,
  created: number
  expires_at: number,
  url: string
}

const nextstep = () => {
  const generateAccountLink = async () => {
    return await api.get<AccountLink>(`/stripe/accountLinks`)
  }

  const {data, error, isLoading, refetch} = useQuery("accountLink", () =>
    generateAccountLink(),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  )

  if(data){
    window.location.href = data.data.url
  }

  if(error){
    toast.error('Não foi possível redirecionar, verifique sua conexão')
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>, refetch: any) => {
    refetch()
  }
  return (
    <PaperComponent>
      <Navbar />
      <Layout title="Ticketfy | Próximos passos">
        <Box mt={5}>
          <Grid
            container
            justifyContent="center"
          >
            <Grid item xs={12} sm={12} md={10} lg={8} xl={8}>
              <CardStyled>
                <CardContent>
                <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <img src="./nextstep.svg" style={{
                      maxWidth: '70%',
                      marginBottom: '2rem'
                    }}/>
                </Box>
                <ButtonData
                  variant="outlined"
                  onClick={(e) => handleClick(e, refetch)}
                  disabled={isLoading}
                >
                  Adicionar dados bancários
                </ButtonData>
                </CardContent>
              </CardStyled>
            </Grid>
          </Grid>
        </Box>
      </Layout>
    </PaperComponent>
  )
}

export default nextstep
