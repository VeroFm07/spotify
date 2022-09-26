import { icon, IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import AButton from 'components/atoms/AButton/AButton';
import AImage from 'components/atoms/AImage/AImage';
import AName from 'components/atoms/AName/AName';
import React, { FC, useEffect, useState } from 'react';
import { deleteFavorites} from 'redux/thunks/deleteFavThunk';
import 'components/molecules/PlayList/MPlaylist.scss';
import 'components/organisms/Playlist/OPlaylist.scss';
import { useAppDispatch } from 'redux/hooks/hooks';
import { Favorites } from 'utils/interfaces/Favorite';
import { setDeleteFav } from 'redux/slices/deleteFavSlice';

interface Iprops {
  nameSong: string;
  img: string;
  nameArtist: string;
  icon?: IconDefinition;
  id: string;
  isFavorite: any;
}

const MFavorites: FC<Iprops> = ({ nameSong, img, nameArtist, icon, id, isFavorite }) => {
  const [playlist, setPlaylistView] = useState<Favorites>()
  const dispatch= useAppDispatch();
  
  const deleteFav=()=>{
    deleteFavorites(id)
  }
    
      
  return (
    <main className={'main'}>
      <AImage urlImg={img} className={"main__img"} />
      <AName className={'main__name main__name--M'} name={nameSong} />
      <AName className={'main__name'} name={nameArtist} />
      <AButton className={"btn__heart"} onClick={deleteFav} icon={faHeartCircleCheck} isIcon={true} />
    </main>
  )
}

export default MFavorites