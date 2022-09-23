import React, { FC, useEffect, useState } from 'react'
import MPlaylist from 'components/molecules/PlayList/MPlaylist';
import { Tracks } from 'utils/interfaces/Playlist/IPlaylist';
import { faHeartCircleCheck} from '@fortawesome/free-solid-svg-icons';
import 'components/organisms/Playlist/OPlaylist.scss';
import { getPlaylists} from 'redux/thunks/playlistThunk';
import { setPlaylist } from 'redux/slices/playlistSlice';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';


//Función que recibe la lista de canciones y las recorre por medio del map
const OPlaylist: FC = ({  }) => {
  const [playlist, setPlaylistView] = useState<Tracks>()
  const dispatch= useAppDispatch();
  
  useEffect(() => {
    getPlaylists().then(data =>{
      dispatch(setPlaylist(data)) //Se trae de redux el reducer
      setPlaylistView(data); //Se asigna a la variable la data que trae la petición
    })
   
}, [dispatch]);
 
  return (
    <section className='section__MPlaylist'>
      {
        playlist?.items?.map(({ track }, index) => {
          return (
            <article key={index} className='section__playlist'>
              <MPlaylist isFavorite={track.isFavorite} id={track.id} img={track.album.images[0].url} nameSong={track.name} nameArtist={track.artists[0].name} icon={faHeartCircleCheck} /> 
            </article>
          )
        })
      }
    </section>
  )
}

export default OPlaylist