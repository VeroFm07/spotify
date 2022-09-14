import React from 'react'
import ButtonComponent from 'components/atoms/button/buttonComponent'
import { autorizeURL } from 'services'
import '../LoginSection/LoginSection.scss';
import ImagesComponent from 'components/atoms/images/imagesComponent';

const LoginSection = () => {
  return (
    <section className='section__login'>
      <ImagesComponent url={'https://ipadizate.com/hero/2018/05/Spotify-Portada.jpg?width=768&aspect_ratio=16:9&format=nowebp'} />
      <ButtonComponent isIcon={false} title="Login" redirect={autorizeURL} />
    </section>
  )
}

export default LoginSection