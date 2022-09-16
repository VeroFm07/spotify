import MUser from 'components/molecules/User/MUser';
import OUser from 'components/organisms/User/OUser';
import { UserInfo, userInfo } from 'os';
import React, { useEffect, useState } from 'react'
import { getUser } from 'services';
import { User } from 'utils/interfaces/user.interface'

const TUser = () => {
  const [user, setUser] = useState<User>();
  useEffect(() => {
    getUser()
      .then(({ data }) => {
        setUser(data)
      })
      .catch(e => console.log(e, 'ups no cargo '));
  }, [])

  return (
   
     <div>
      <OUser userInf={user!}/>
    </div>
  )
}

export default TUser