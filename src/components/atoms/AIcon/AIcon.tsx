import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { FC } from 'react';
import 'components/atoms/AIcon/AIcon.scss';

interface Iprops{
    icon:IconDefinition;
}

export const AIcon=({icon}:Iprops)=>{
    return(
        <div role='contenedor'>
            <FontAwesomeIcon  icon={icon!} className='icon__spotify'/>
        </div>
        )
}

