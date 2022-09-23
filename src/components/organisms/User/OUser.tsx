import MUser from 'components/molecules/User/MUser';
import React, { FC, useEffect, useState } from 'react'
import { useAppDispatch } from 'redux/hooks/hooks';
import { setUser } from 'redux/slices/userSlice';
import { getUser } from 'redux/thunks/userThunk';
import { User } from 'utils/interfaces/User/IUser';

interface IProps {
  userInf: User;
}

const OUser: FC= ({ }) => {
  const [user, setUserView]=useState<User>();
  const dispatch=useAppDispatch();

  useEffect(()=>{
    getUser().then(data=>{
      dispatch(setUser(data));//Se trae de redux el reducer
      setUserView(data);//Se asigna a la variable la data que trae la petición
    })
  },[dispatch])
  
  return (
    <div>
      {
        <MUser nameUser={user?.display_name} imgUser={user?.images[0].url} />
      }
    </div>
  )
}

export default OUser