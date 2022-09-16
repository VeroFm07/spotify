import { faHouse, faHeart, faCircleXmark } from '@fortawesome/free-solid-svg-icons';
import ALink from 'components/atoms/ALink/ALink';
import { MHome } from 'components/molecules/Home/MHome'
import TFavorites from 'components/templates/Favorites/TFavorites';
import TUser from 'components/templates/User/TUser';

export const Favorites = () => {
  return (
    <>
      <MHome />
      <TUser/>
      <TFavorites />
    </>
  )
}

export default Favorites