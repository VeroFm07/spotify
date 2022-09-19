import MUser from 'components/molecules/User/MUser';
import React, { FC } from 'react'
import { User } from 'utils/interfaces/User/IUser';

interface IProps {
  userInf: User;
}

const OUser: FC<IProps> = ({ userInf }) => {
  return (
    <div>
      {
        <MUser nameUser={userInf?.display_name} imgUser={userInf?.images[0].url} />
      }
    </div>
  )
}

export default OUser