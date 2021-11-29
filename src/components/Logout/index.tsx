import React from 'react'
import { ButtonLogout } from './styles'
import LogoutIcon from '@mui/icons-material/Logout';
import { api } from '../../services/api';
import { useMutation } from 'react-query';
import { toast } from 'react-toastify';
import Cookie from 'js-cookie';
import { useRouter } from 'next/router';
import { Loading } from '../Loading';

export const Logout = () => {
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
    <ButtonLogout
      variant="outlined"
      startIcon={<LogoutIcon />}
      onClick={(e) => handleClick(e, mutate)}
    >
      Sair
    </ButtonLogout>
  )
}
