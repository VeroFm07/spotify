import React, { FC } from 'react'
import 'components/atoms/AImage/AImage.component.scss';

interface IProps {
    urlImg: string;
}

export const AImage: FC<IProps> = ({urlImg}) => {
  return (
    <figure className='figure'>
        <img className='figure__img' src={urlImg} alt="spotify" />
    </figure>
  )
}

export default AImage