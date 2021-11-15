import { CardContent, Grid } from '@mui/material'
import React from 'react'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { AvatarUser, ButtonData, CardProfile, ProfileTitle } from './styles'
import { Box } from '@mui/system';
import Link from 'next/link';

export const UserProfileCard = () => {
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
              <ProfileTitle textAlign="center">User Name</ProfileTitle>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
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
