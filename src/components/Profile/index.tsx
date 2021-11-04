import { CardContent, Grid } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AvatarUser, ButtonData, ButtonStripe, CardProfile, ProfileTitle } from './styles'
import { Box } from '@mui/system';

export const Profile = () => {
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
              <ProfileTitle variant="h5" textAlign="center">Company Name</ProfileTitle>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <ButtonStripe
                variant="outlined"
                endIcon={<ArrowForwardIosIcon/>}
              >
                faturamento
              </ButtonStripe>
            </Grid>
            <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
              <ButtonData
                variant="outlined"
                endIcon={<ArrowForwardIosIcon/>}
              >
                Atualizar Dados
              </ButtonData>
            </Grid>
          </Grid>
        </CardContent>

      </CardProfile>
    </Grid>
  )
}
