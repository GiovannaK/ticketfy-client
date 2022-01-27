import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';
import { Box } from '@mui/material/node_modules/@mui/system';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import {ButtonSlide, Title} from './styles'

export const BestSellers = () => {
  return (
    <Box mt={1}>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
        <Swiper spaceBetween={25} navigation={true} breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            768: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
            928: {
              slidesPerView: 1,
              slidesPerGroup: 1,
            },
          }}
          autoplay={{
            delay: 3000
          }}
          >
            <SwiperSlide>
              <Card>
                <CardMedia image="event.jpeg" sx={{
                  maxWidth: '100%',
                  height: 300,
                  position: 'relative',
                  filter: 'brightness(0.4)'
                }}/>
                <Title variant='h4'>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aspernatur, quibusdam?
                </Title>
                <ButtonSlide variant="outlined">
                  Ver detalhes
                </ButtonSlide>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <CardMedia image="event.jpeg" sx={{
                  maxWidth: '100%',
                  height: 300,
                  position: 'relative',
                  filter: 'brightness(0.4)'
                }}/>
                <Title variant='h4'>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aspernatur, quibusdam?
                </Title>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card>
                <CardMedia image="event.jpeg" sx={{
                  maxWidth: '100%',
                  height: 300,
                  position: 'relative',
                  filter: 'brightness(0.4)'
                }}/>
                <Title variant='h4'>Lorem ipsum dolor sit amet consectetur
                  adipisicing elit. Aspernatur, quibusdam?
                </Title>
              </Card>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  )
};
