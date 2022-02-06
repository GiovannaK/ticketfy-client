import { CardContent, Grid } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AvatarUser, ButtonData, ButtonStripe, CardProfile, ProfileTitle } from './styles'
import { Box } from '@mui/system';
import Link from 'next/link';
import { ProfileContextType } from '../../context/ProfileContext';
import { api } from '../../services/api';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';

type LoginLink = {
  object: string,
  created: number,
  url: string
}

export const Profile = ({userProfile}: ProfileContextType) => {
  const generateLoginLink = async () => {
    return await api.get<LoginLink>(`/stripe/loginLink`)
  }

  const {data, error, isLoading, refetch} = useQuery("loginLink", () =>
    generateLoginLink(),
    {
      enabled: false,
      refetchOnWindowFocus: false,
      refetchOnMount: false
    }
  )

  React.useEffect(() => {
    if(data){
      window.location.href = data.data.url
    }
  }, [data?.data.url])

  if(error){
    toast.error('Não foi possível redirecionar, verifique sua conexão')
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>, refetch: any) => {
    refetch()
  }
  return (
    <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
      <CardProfile>
        <CardContent>
          <Grid container
            spacing={2}
            direction="row"
            alignItems="center"
            justifyContent="center"
          >
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Box display="flex" justifyContent="center">
                <AvatarUser />
              </Box>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <ProfileTitle textAlign="center">{userProfile?.fullName}</ProfileTitle>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <ButtonStripe
                variant="outlined"
                endIcon={<ArrowForwardIosIcon/>}
                onClick={(e) => handleClick(e, refetch)}
                disabled={isLoading}
              >
                faturamento
              </ButtonStripe>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <Link href="/profile">
                <ButtonData
                  variant="outlined"
                  endIcon={<ArrowForwardIosIcon/>}
                >
                  Atualizar Dados
                </ButtonData>
              </Link>
            </Grid>
          </Grid>
        </CardContent>

      </CardProfile>
    </Grid>
  )
}
