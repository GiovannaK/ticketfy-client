import { Box, Card, CardContent, CircularProgress, Grid } from '@mui/material'
import React from 'react'
import { useQuery } from 'react-query';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ICategory } from '../../interfaces/ICategory';
import { api } from '../../services/api';
import { CategoryTitle, CustomCard } from './styles';

const getCategory = async () => {
  const categories = await api.get<ICategory>('/category')
  return categories.data
}

export const CardCategory = () => {
  const {data, error, isLoading} = useQuery("category", getCategory)

  if(error){
    console.log(error)
  }

  if(isLoading){
    <CircularProgress />
  }
  return (
    <Box mt={3}>
      <Grid
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        <Grid item xs={11} sm={11} md={11} lg={11} xl={11}>
          <Swiper spaceBetween={25} navigation={true} breakpoints={{
            640: {
              slidesPerView: 1,
              slidesPerGroup: 1
            },
            768: {
              slidesPerView: 2,
              slidesPerGroup: 2,
            },
            928: {
              slidesPerView: 4,
              slidesPerGroup: 4,
            },
          }}>
            {data && data?.map((category) => (

              <SwiperSlide key={category.id}>
                <CustomCard>
                  <CardContent>
                    <CategoryTitle key={category.id}>{category.title}</CategoryTitle>
                  </CardContent>
                </CustomCard>
              </SwiperSlide>
            ))}
          </Swiper>
        </Grid>
      </Grid>
    </Box>
  )
}
