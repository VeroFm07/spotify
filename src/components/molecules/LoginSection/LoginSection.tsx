import React from 'react'
import AImage from 'components/atoms/AImage/AImage.component';
import { ALink } from 'components/atoms/ALink/ALink.component'
import { autorizeURL } from 'services'
import '../LoginSection/LoginSection.scss';

export const LoginSection = () => {
  return (
    <section className='section__login'>
      <AImage urlImg={'https://ipadizate.com/hero/2018/05/Spotify-Portada.jpg?width=768&aspect_ratio=16:9&format=nowebp'} />
      <ALink type='a' isIcon={false} name="Login" link={autorizeURL} />
    </section>
  )
}

export default LoginSection