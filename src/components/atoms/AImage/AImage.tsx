import React, { FC } from 'react'
import 'components/atoms/AImage/AImage.scss';
import PropTypes from 'prop-types';

interface IProps {
  urlImg: string;
  className: string;
}

export const AImage =({urlImg, className}:IProps) => {
  return (
    <figure className={'main__figure'} role="contenedor">
        <img className={className} src={urlImg} alt="spotify" />
    </figure>
  )
}

export default AImage