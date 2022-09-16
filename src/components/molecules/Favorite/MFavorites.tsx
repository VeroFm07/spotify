import { icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AButton from 'components/atoms/AButton/AButton';
import AImage from 'components/atoms/AImage/AImage';
import AName from 'components/atoms/AName/AName';
import React, { FC } from 'react';
import { putFavoritesC, putFavoritesD } from 'services';
import 'components/molecules/PlayList/MPlaylist.scss';
import 'components/organisms/Playlist/OPlaylist.scss';

interface Iprops {
    nameSong: string;
    img: string;
    nameArtist: string;
    icon?: IconDefinition;
    id: string;
    isFavorite: any;
}

const MFavorites: FC<Iprops>= ({nameSong, img, nameArtist, icon, id, isFavorite}) => {
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

export default MFavorites