import React, { FC } from 'react'
import 'components/atoms/AName/AName.scss';

interface Iprops{
  name:string;
  className: string;
}

const AName: FC<Iprops> = ({name, className}) => {
  return (
    <div role="contenedor">
      <p className={className}>{name}</p>
    </div>
  )
}

export default AName