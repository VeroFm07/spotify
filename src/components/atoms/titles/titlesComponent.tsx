import React from 'react'

interface Props{
    text:string
}

const titlesComponent = (props:Props) => {
  return (
    <p>{props.text}</p>
  )
}

export default titlesComponent