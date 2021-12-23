import { CardContent, Grid } from '@mui/material'
import React from 'react'
import { CardCreateEvent, FormButton, FormTitle, InputCreate, Label } from './styles'

export const UpdatePersonalDataForm = () => {
  return (
    <>
      <Grid container
        sx={{
          minHeight: '70vh',
          maxWidth: '100%',
          justifyContent: 'center',
        }}
      >
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <CardCreateEvent>
            <CardContent>
              <FormTitle>Atualizar Informações</FormTitle>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Label>Nome completo ou nome da empresa *</Label>
                    <InputCreate fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Label>E-mail *</Label>
                    <InputCreate fullWidth/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <FormButton variant="outlined" type="submit">Atualizar</FormButton>
                  </Grid>
                </Grid>
              </form>
            </CardContent>
          </CardCreateEvent>
        </Grid>
      </Grid>
    </>
  )
}
