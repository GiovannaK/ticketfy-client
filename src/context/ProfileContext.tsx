import React, { createContext, useEffect, useState } from "react";
import { IProfile } from "../interfaces/IProfile";
import { api } from "../services/api";
import { useQuery } from "react-query";
import { Loading } from "../components/Loading";
import { CircularProgress } from "@mui/material";

export type ProfileContextType = {
  userProfile?: IProfile
}

export const ProfileContext = createContext({} as ProfileContextType);

const getProfile = async() => {
  const {data} = await api.get(`/user`)
  return data;
}


export const ProfileProvider = ({children}: any): JSX.Element => {
  const [userProfile, setUserProfile] = useState<IProfile>();

  const {data, error, isLoading} = useQuery("profile", getProfile)

  if(error){
    console.log(error)
  }

  if(isLoading){
    <CircularProgress />
  }

  useEffect(() => {
    if(data){
      setUserProfile(data)
    }
  }, [data])

  return (
    <ProfileContext.Provider value={{ userProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}
