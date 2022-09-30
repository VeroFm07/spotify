import React, { FC, useEffect, useState } from 'react'
import { faHeart, faHeartCircleCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import AName from 'components/atoms/AName/AName'
import 'components/atoms/AButton/AButton.scss';
import AImage from 'components/atoms/AImage/AImage';
import 'components/molecules/PlayList/MPlaylist.scss';
import AButton from 'components/atoms/AButton/AButton';
import Swal from 'sweetalert2'
import { useAppDispatch } from 'redux/hooks/hooks';
import { setCreateFav, setDeleteFav } from 'redux/slices/favoritesSlice';
import { createFavorites, deleteFavorites } from 'redux/thunks/favoritesThunk';
import { Item } from 'utils/interfaces/Playlist/IPlaylist';

interface Iprops {
  item: Item;
}

const MPlaylist = ({ item }: Iprops) => {
  const dispatch = useAppDispatch();
  const { isFavorite, track } = item;
  const { album, artists, id, name } = track; //pasa los elementos del track
  const [updatePlaylist, setPlaylist]=useState<boolean>(item.isFavorite!)
 
  const createFavorite = () => { //Función para hacer la petición del id de la canción
    //llamado a la petición para crear un favorito por medio del id
    createFavorites(id).then(() => {
      dispatch(setCreateFav({ id }))
      setPlaylist(true)
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
    })
    //DESPACHAR FAV ASYNC EN EL PLAYLISTSLICE
    //Alerta de que se ha añadido a favoritos Y DENTRO DEL THEN DISPARO LA ALERTA--ENCADENAMIENTO DE PROMESAS O PROMISE ALL


  }

  const deleteFavorite = () => { //Función para hacer la petición del id de la canción
    deleteFavorites(id).then(() => {
      dispatch(setDeleteFav({ id }))//Se envia a redux
      setPlaylist(false)
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
        icon: 'success',
        title: 'Eliminado de favoritos'
      })
     
    })

  }
  const handleClicks = () => {
    updatePlaylist ?
      deleteFavorite() :
      createFavorite()
  }

  return (
    <main className={'main'}>
      <AImage urlImg={album.images[0].url} className={"main__img"} />
      <AName className={'main__name main__name--M'} name={name} />
      <AName className={'main__name'} name={artists[0].name || ""} />
      <AButton className={"btn__heart"} onClick={handleClicks} icon={updatePlaylist ? faHeartCircleCheck : faHeart} isIcon={true} />
    </main>
  )
}

export default MPlaylist