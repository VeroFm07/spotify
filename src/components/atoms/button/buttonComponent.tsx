import React, { FC } from 'react'
import {Link} from 'react-router-dom';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import '../button/buttonComponent.scss';

interface Props{
  isIcon: boolean;
  redirect: string;
  icon?: IconDefinition;
  title: string;
}

const buttonsComponent: FC<Props>= ({redirect}) => {
  return (
    <Link className='link__login' to={redirect}>Login</Link>
  )
}

export default buttonsComponent