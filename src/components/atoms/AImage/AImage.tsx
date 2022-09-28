import React, { FC } from 'react'
import 'components/atoms/AImage/AImage.scss';

interface IProps {
  urlImg: string;
  className: string;
}

export const AImage: FC<IProps> = ({urlImg, className}) => {
  return (
    <figure className={'main__figure'}>
        <img className={className} src={urlImg} alt="spotify" />
    </figure>
  )
}

export default AImage