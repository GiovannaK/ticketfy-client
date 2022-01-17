import { Box, Card, CardContent, Grid } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { CustomCard } from './styles';


export const CardCategory = () => {
  return (
    <Box>
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12} xl={12}>
          <Swiper slidesPerView={4} spaceBetween={25} slidesPerGroup={4} navigation={true} className="mySwiper">
            <SwiperSlide>
              <CustomCard>
                <CardContent>
                  skdj
                </CardContent>
              </CustomCard>
            </SwiperSlide>
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  )
}
