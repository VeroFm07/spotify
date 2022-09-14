import { faHouse, faHeart, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ALink from 'components/atoms/ALink/ALink.component';

export const Favorites = () => {
    return (
        <>
        <section className='nav'>
          <ALink type='NavLink' isIcon={true} icon ={faHouse} name="Inicio" link='/home' />
          <ALink type='NavLink' isIcon={true} icon ={faHeart} name="Favoritos" link='/favorites' />
          <ALink type='NavLink' isIcon={true} icon ={faCircleXmark} name="Salir" link='/login' />
        </section>
      </>
    )
}

export default Favorites