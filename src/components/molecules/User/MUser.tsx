import AImage from 'components/atoms/AImage/AImage';
import AName from 'components/atoms/AName/AName';
import React, { FC } from 'react'
import 'components/molecules/User/MUser.scss';

interface Iprops {
    nameUser: any;
    imgUser: any;
  }

const MUser: FC<Iprops>= ({nameUser,imgUser}) => {
  return (
    <header className={'header'}>
        <AName className={'header__name'} name={nameUser} />
        <figure className={'header__figure'}>
          <AImage className={'header__img'} urlImg={imgUser} />
        </figure>
    </header>
  )
}

export default MUser