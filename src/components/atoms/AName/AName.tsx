import React, { FC } from 'react'

interface Iprops{
    name:string;
}

const AName: FC<Iprops> = ({name}) => {
  return (
    <p>{name}</p>
  )
}

export default AName