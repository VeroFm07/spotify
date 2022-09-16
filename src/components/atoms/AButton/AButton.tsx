import { FC } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import 'components/atoms/AButton/AButton.scss';


interface IProps {
    isIcon: boolean;
    onlyIcon?: boolean;
    icon?: IconDefinition;
    onClick: any;
    className: string;
    name?: string;
}

export const AButton: FC<IProps> = ({ isIcon, onlyIcon, icon, onClick, className, name }) => {
    return (
        <button
            onClick={onClick}
            className={className}
        >
            {
                isIcon
                    ?
                    onlyIcon
                        ? <FontAwesomeIcon icon={icon!} />
                        :
                        <>
                            <FontAwesomeIcon icon={icon!} />
                            {name}
                        </>
                    : <>{name}</>
            }
        </button>
    )
}

export default AButton