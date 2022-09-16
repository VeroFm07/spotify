import React from 'react'
import AImage from 'components/atoms/AImage/AImage';
import { ALink } from 'components/atoms/ALink/ALink'
import { autorizeURL } from 'services'
import './MLogin.scss';

export const MLogin = () => {
  return (
    <section className='section__login'>
      <AImage className={'img__login'} urlImg={'https://ipadizate.com/hero/2018/05/Spotify-Portada.jpg?width=768&aspect_ratio=16:9&format=nowebp'} />
      <ALink type='a' isIcon={false} name="Login" link={autorizeURL} />
    </section>
  )
}

export default MLogin