import React from 'react'
import { AppBar, Tabs, Tab, CircularProgress } from '@mui/material'
import { AppBarCategory, TabCategory } from './styles';
import { useQuery } from 'react-query';
import { api } from '../../services/api';
import {ICategory} from '../../interfaces/ICategory'

const getCategory = async () => {
  const categories = await api.get<ICategory>('/category')
  return categories.data
}

export const Categories = () => {
  const [value, setValue] = React.useState(0);
  const handleChange = (event: any, newValue: any) => {
    setValue(newValue);
  };

  const {data, error, isLoading} = useQuery("category", getCategory)

  if(error){
    console.log(error)
  }

  if(isLoading){
    <CircularProgress />
  }

  return (
    <AppBarCategory
      position="sticky"
    >
      <Tabs
        value={value}
        onChange={handleChange}
        scrollButtons="auto"
        variant="scrollable"
      >
        {data && data?.map((category) => (
          <TabCategory key={category.id} label={category.title}/>
        ))}
      </Tabs>
    </AppBarCategory>
  )
}
