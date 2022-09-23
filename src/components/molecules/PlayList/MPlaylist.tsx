import React, { FC } from 'react'
import { faHeart, faHeartCircleCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import AName from 'components/atoms/AName/AName'
import 'components/atoms/AButton/AButton.scss';
import { deleteFavorites, putFavoritesC} from 'services';
import AImage from 'components/atoms/AImage/AImage';
import 'components/molecules/PlayList/MPlaylist.scss';
import AButton from 'components/atoms/AButton/AButton';


interface Iprops {
  nameSong: string;
  img: string;
  nameArtist: any;
  icon?: IconDefinition;
  id: string;
  isFavorite: any;
}

const MPlaylist: FC<Iprops> = ({ nameSong, img, nameArtist, id, isFavorite }) => {
  const createFav = () => { //Función para hacer la petición del id de la canción
    putFavoritesC(id); //llamado a la petición para crear un favorito por medio del id
  }
  
  const deleteFav = () => { //Función para hacer la petición del id de la canción
    deleteFavorites(id); //llamado a la petición para eliminar el id de favoritos
  }

  return (
    
    <main className={'main'}>
      <AImage urlImg={img} className={"main__img"} />
      <AName className={'main__name main__name--M'} name={nameSong} />
      <AName className={'main__name'} name={nameArtist} />
      <AButton className={"btn__heart"} onClick={isFavorite?deleteFav : createFav} icon={isFavorite?faHeartCircleCheck: faHeart} isIcon={true} />
    </main>
  )
}

export default MPlaylist