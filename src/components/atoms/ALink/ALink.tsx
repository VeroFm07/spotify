import { FC } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import 'components/atoms/ALink/ALink.scss';

interface IProps {
    type: 'NavLink' | 'a';
    isIcon?: boolean;
    icon?: IconDefinition;
    name: string;
    link: string;
}

//Función para traer los props y validar en el return si existen para saber que mostrará la interfaz
export const ALink: FC<IProps> = ({ type, isIcon, icon, name, link }) => {
    if (type === 'a') {
        return (
            <a href={link} className='link__login' >{name}</a>
        )
    } else {
        return (
            <NavLink to={link} className='navLink'>
                {
                    isIcon
                        ?
                        <>
                            <FontAwesomeIcon icon={icon!} /> {name}
                        </>
                        :
                        <>
                            {name}
                        </>
                }
            </NavLink>
        )
    }
}

export default ALink