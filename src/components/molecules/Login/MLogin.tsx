import React from 'react'
import { ALink } from 'components/atoms/ALink/ALink'
import { autorizeURL } from 'services'
import './MLogin.scss';
import { faSpotify } from '@fortawesome/free-brands-svg-icons';
import {AIcon} from 'components/atoms/AIcon/AIcon';
import AName from 'components/atoms/AName/AName';

export const MLogin = () => {
  return (
    <section className='section__login'>
      <AIcon icon={faSpotify}/>
      <AName className={'title__spotify'} name='¡Bienvenido a Spotify!'/>
      <ALink type='a' isIcon={false} name="Login" link={autorizeURL} />
    </section>
  )
}

export default MLogin