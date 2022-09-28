import React, { FC, useEffect, useState } from 'react'
import { faHeart, faHeartCircleCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import AName from 'components/atoms/AName/AName'
import 'components/atoms/AButton/AButton.scss';
import { deleteFavorites} from 'redux/thunks/deleteFavThunk'
import AImage from 'components/atoms/AImage/AImage';
import 'components/molecules/PlayList/MPlaylist.scss';
import AButton from 'components/atoms/AButton/AButton';
import { createFavorites } from 'redux/thunks/createFavThunk';

import Swal from 'sweetalert2'

// CommonJS
interface Iprops {
  nameSong: string;
  img: string;
  nameArtist: any;
  icon?: IconDefinition;
  id: string;
  isFavorite?: any;
}
const MPlaylist: FC<Iprops> = ({ nameSong, img, nameArtist, id, isFavorite }) => {

  const createFav = () => { //Función para hacer la petición del id de la canción
    createFavorites(id); //llamado a la petición para crear un favorito por medio del id
    //Alerta de que se ha añadido a favoritos
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
      title: 'Añadido a favoritos'
    })
  }
  
  const deleteFav = () => { //Función para hacer la petición del id de la canción
    deleteFavorites(id); //llamado a la petición para eliminar el id de favoritos
    //Alerta de que se ha eliminado de favoritos
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
      icon: 'error',
      title: 'Añadido a favoritos'
    })
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