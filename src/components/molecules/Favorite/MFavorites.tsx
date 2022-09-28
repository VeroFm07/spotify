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
import Swal from 'sweetalert2';


interface Iprops {
  nameSong: string;
  img: string;
  nameArtist: string;
  icon?: IconDefinition;
  id: string;
  isFavorite: any;
}

const MFavorites: FC<Iprops> = ({ nameSong, img, nameArtist, icon, id, isFavorite }) => {
  
  const deleteFav=()=>{
    deleteFavorites(id);
    const Toast = Swal.mixin({
      toast: true,
      position: 'bottom-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      background: '#004A4F',
      color: '#fff',
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Eliminado de favoritos'
    })
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