import React, { FC } from 'react'
import 'components/atoms/AName/AName.scss';

interface Iprops{
  name:string;
  className: string;
}

const AName: FC<Iprops> = ({name, className}) => {
  return (
    <p className={className}>{name}</p>
  )
}

export default AName