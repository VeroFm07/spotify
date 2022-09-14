import { faHouse, faHeart, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ALink from 'components/atoms/ALink/ALink.component';
import 'components/molecules/HomeSection/HomeSection.scss';

export const HomeSection = () => {

  return (
    <>
      <nav className='nav'>
        <ALink type='NavLink' isIcon={true} icon ={faHouse} name="Inicio" link='/home' />
        <ALink type='NavLink' isIcon={true} icon ={faHeart} name="Favoritos" link='/favorites' />
        <ALink type='NavLink' isIcon={true} icon ={faCircleXmark} name="Salir" link='/login' />
      </nav>
    </>
  )
}

export default HomeSection