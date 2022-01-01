import React from 'react'
import { ButtonLogout } from './styles'
import LogoutIcon from '@mui/icons-material/Logout';
import { api } from '../../services/api';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import Cookie from 'js-cookie';

import { Loading } from '../Loading';
import { IconBtn } from '../SideBar/styles';

type LogoutType = {
  name: string
}

export const Logout = ({ name }: LogoutType) => {
  const handleLogout = async() => {
    return await api.post(`/auth/logout`)
  }

  const {isLoading, mutate} = useMutation(handleLogout, {
    onSuccess: () => {
      Cookie.remove('isLogged');
      window.location.href = '/'
    },
    onError: () => {
      toast.error('Não foi possível encerrar sessão')
    }
  })

  if(isLoading){
    <Loading />
  }

  const handleClick = (e: React.MouseEvent<HTMLElement>, mutate: any) => {
    mutate()
  }


  return (
    <>
      {name === 'Navbar' ? (

        <ButtonLogout
          variant="outlined"
          startIcon={<LogoutIcon />}
          onClick={(e) => handleClick(e, mutate)}
        >
          Sair
        </ButtonLogout>
      ) : (

        <IconBtn
          onClick={(e) => handleClick(e, mutate)}
        >
          <LogoutIcon
            color='secondary'
            sx={{
              transform: 'scale(1.7)',
              bottom: 60,
              position: 'fixed'
            }}
          />
        </IconBtn>
      )}
    </>
  )
}
