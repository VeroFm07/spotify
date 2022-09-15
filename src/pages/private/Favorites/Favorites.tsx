import { faHouse, faHeart, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ALink from 'components/atoms/ALink/ALink.component';
import { HomeSection } from 'components/molecules';
import TFavorites from 'components/templates/TFavorites/TFavorites';

export const Favorites = () => {
    return (
        <>
          <HomeSection/>
          <TFavorites/>
       
      </>
    )
}

export default Favorites