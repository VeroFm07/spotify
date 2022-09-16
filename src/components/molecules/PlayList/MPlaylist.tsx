import React, { FC } from 'react'
import { faHeart, faHeartCircleCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import AName from 'components/atoms/AName/AName'
import 'components/atoms/AButton/AButton.scss';
import { putFavoritesC, putFavoritesD } from 'services';
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
    putFavoritesC(id);
  }
  const deleteFav = () => { //Función para hacer la petición del id de la canción
    putFavoritesD(id); //PETICION ELIMINAR //isLike?agregarFav3 : agregarFav
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