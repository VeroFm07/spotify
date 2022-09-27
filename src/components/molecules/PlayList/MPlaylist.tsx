import React, { FC, useEffect, useState } from 'react'
import { faHeart, faHeartCircleCheck, IconDefinition } from '@fortawesome/free-solid-svg-icons';
import AName from 'components/atoms/AName/AName'
import 'components/atoms/AButton/AButton.scss';
import { deleteFavorites} from 'redux/thunks/deleteFavThunk'
import AImage from 'components/atoms/AImage/AImage';
import 'components/molecules/PlayList/MPlaylist.scss';
import AButton from 'components/atoms/AButton/AButton';
import { createFavorites } from 'redux/thunks/createFavThunk';
import { getPlaylists } from 'redux/thunks/playlistThunk';
import { setPlaylist } from 'redux/slices/playlistSlice';
import { Tracks } from 'utils/interfaces/Playlist';
import { useAppDispatch } from 'redux/hooks/hooks';
import { Favorites } from 'utils/interfaces/Favorite';
import { getFavorites } from 'redux/thunks/favoritesThunk';
import { setFavorites } from 'redux/slices/favoritesSlice';


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
  }
  
  const deleteFav = () => { //Función para hacer la petición del id de la canción
    deleteFavorites(id); //llamado a la petición para eliminar el id de favoritos
  }
  const [playlist, setPlaylistView] = useState<Tracks>()
    const dispatch= useAppDispatch();
  
    var [playlistFav, setPlaylistFavView]=useState<Favorites>()
    let [varPlaylist]:ReadonlyArray<any>=[];
    let [varPlaylistFav]:ReadonlyArray<any>=[];
useEffect(() => {
    getPlaylists().then(data =>{
      dispatch(setPlaylist(data)) //Se trae de redux el reducer
    varPlaylist=data;
      setPlaylistView(data); //Se asigna a la variable la data que trae la petición
      console.log('PLAYLIST', varPlaylist)
    })

    getFavorites().then(data =>{
      dispatch(setFavorites(data))
      varPlaylistFav=data;
      setPlaylistFavView(data);
      console.log('FAVORITOS', varPlaylistFav)
    })

}, [dispatch]);
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