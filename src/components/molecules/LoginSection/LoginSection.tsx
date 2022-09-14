import React from 'react'
import { ALink } from 'components/atoms/ALink/ALink.component'
import { autorizeURL } from 'services'
import '../LoginSection/LoginSection.scss';
import ImagesComponent from 'components/atoms/images/imagesComponent';

export const LoginSection = () => {
  return (
    <section className='section__login'>
      <ImagesComponent url={'https://ipadizate.com/hero/2018/05/Spotify-Portada.jpg?width=768&aspect_ratio=16:9&format=nowebp'} />
      <ALink type='a' isIcon={false} name="Login" link={autorizeURL} />
    </section>
  )
}

export default LoginSection