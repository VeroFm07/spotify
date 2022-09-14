import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse, faHeart, faCircleXmark} from '@fortawesome/free-solid-svg-icons'; 

interface Props {
    icon: any
    title: string
}

const buttonsLinkComponent = (props: Props) => {
    return (
        <a><FontAwesomeIcon icon={props.icon}/> {props.title}</a>
    )
}

export default buttonsLinkComponent