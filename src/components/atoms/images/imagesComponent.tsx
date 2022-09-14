import React from 'react'
import '../images/imagesComponent.scss';

interface Props{
  url: string;
}

const imagesComponent = (props:Props) => {
  return (
    <figure className='figure'>
      <img className='figure__img' src={props.url} />
    </figure>
  )
}

export default imagesComponent