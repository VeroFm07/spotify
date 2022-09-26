import { faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React, { FC, useEffect, useState } from 'react'
import 'components/organisms/Playlist/OPlaylist.scss';
import { Favorites, Item, Track } from 'utils/interfaces/Favorite';
import { useAppDispatch } from 'redux/hooks/hooks';
import { getFavorites } from 'redux/thunks/favoritesThunk';
import { setFavorites } from 'redux/slices/favoritesSlice';
import MFavorites from 'components/molecules/Favorite/MFavorites';

//Función que recibe la lista de canciones de favoritos y las recorre por medio del map
const OFavoritesList: FC = () => {
  const [playlistFav, setPlaylistFavView]=useState<Favorites>()
  const dispatch=useAppDispatch();

  useEffect(()=>{
    getFavorites().then(data=>{
      dispatch(setFavorites(data))
      setPlaylistFavView(data);

    })
  },[dispatch]);

  return (
    <section className='section__MPlaylist'> 
      {
        playlistFav?.items.map(({track}, index) => {
          return (
            <article key={index} className='section__playlist'>
              <MFavorites isFavorite={track.isFavorite} id={track.id} img={track.album.images[0].url} nameSong={track.name} nameArtist={track.artists[0].name} icon={faHeartCircleCheck} /> 
            </article>
          )
        })
      }
    </section>
  )
}

export default OFavoritesList