import { FC } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
interface IProps {
    type: 'NavLink' | 'a';
    isIcon?: boolean;
    icon?: IconDefinition;
    name: string;
    link: string;
}

export const ALink: FC<IProps> = ({ type, isIcon, icon, name, link }) => {
    if (type === 'a') {
        return (
            <a href={link} className='....' >{name}</a>
        )
    } else {
        return (
            <NavLink to={link}>
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