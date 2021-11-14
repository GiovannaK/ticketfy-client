import { CardContent, Grid } from '@mui/material'
import React from 'react'
import { CardCreateEvent, CheckBoxInput, FormButton, FormTitle, InputCreate, Label, StyledTextField, UploadButton } from './styles'
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import { MobileDatePicker, MobileTimePicker} from '@mui/lab';
import brLocale from 'date-fns/locale/pt-BR';
import { DropzoneDialog } from 'react-mui-dropzone';

export const UpdateTicketForm = (): JSX.Element => {
  const [value, setValue] = React.useState<Date | null>(null);
  const [hour, setHour] = React.useState<Date | null>(null);
  const [online, setOnline] = React.useState<boolean>(false)
  const [isActive, setIsActive] = React.useState<boolean>(false)
  const [isFree, setIsFree] = React.useState<boolean>(false)
  const [openUpload, setOpenUpload] = React.useState<boolean>(false);
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
              <FormTitle>Atualizar Evento</FormTitle>
              <form>
                <Grid container spacing={2}>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Nome do evento *</Label>
                    <InputCreate fullWidth placeholder="Nome do evento"/>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Link do evento *</Label>
                    <InputCreate fullWidth placeholder="Link do evento"/>
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Label>Evento Online</Label>
                    <CheckBoxInput
                      checked={online}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setOnline(e.target.checked);
                      }}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Label>Venda Ativa</Label>
                    <CheckBoxInput
                      checked={isActive}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setIsActive(e.target.checked);
                      }}
                    />
                  </Grid>
                  <Grid item xs={4} sm={4} md={4} lg={4} xl={4}>
                    <Label>Evento Gratuito</Label>
                    <CheckBoxInput
                      checked={isFree}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                        setIsFree(e.target.checked);
                      }}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Quantidade de tickets *</Label>
                    <InputCreate
                      fullWidth placeholder="Quantidade"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Preço ({isFree ? 'Não disponível' : '*'})</Label>
                    <InputCreate
                      fullWidth placeholder="Preço"
                      disabled={isFree}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Data *</Label>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
                      <MobileDatePicker
                        value={value}
                        onChange={(newValue) => {
                          setValue(newValue);
                        }}
                        renderInput={(params) => <StyledTextField {...params} fullWidth />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Hora *</Label>
                    <LocalizationProvider dateAdapter={AdapterDateFns} locale={brLocale}>
                      <MobileTimePicker
                        value={hour}
                        onChange={(newValue: Date | any) => {
                          setHour(newValue);
                        }}

                        renderInput={(params: any) => <StyledTextField {...params} fullWidth />}
                      />
                    </LocalizationProvider>
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Endereço ({online ? 'Não disponível' : '*'})</Label>
                    <InputCreate
                      fullWidth placeholder="Endereço do evento"
                      disabled={online}
                    />
                  </Grid>
                  <Grid item xs={12} sm={12} md={6} lg={6} xl={6}>
                    <Label>Imagem</Label>
                    <UploadButton
                      onClick={() => setOpenUpload(true)}
                    >
                      Adicionar imagem
                    </UploadButton>
                  </Grid>
                  <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
                    <Label>Descrição (max: 5000)</Label>
                    <InputCreate
                      fullWidth placeholder="Sobre o que é seu evento"
                      multiline
                      maxRows={4}
                    />
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
      <DropzoneDialog
        /* acceptedFiles={['.pdf', '.xls', '.doc', '.docx', '.csv']} */
        cancelButtonText="cancelar"

        submitButtonText="enviar"
        maxFileSize={3145728}
        open={openUpload}
        dropzoneText="Arraste a imagem aqui ou clique"
        filesLimit={1}
        onClose={() => setOpenUpload(false)}
        onSave={(files) => {
          const file = files[0];
          console.log(file);
          /* uploadFile({ variables: { file, id: taskId, workspaceId: id } }); */
          setOpenUpload(false);
        }}
        showPreviews
        showFileNamesInPreview
      />
    </>
  )
}
