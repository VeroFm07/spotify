import { faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import React, { FC, useEffect, useState } from 'react'
import 'components/organisms/Playlist/OPlaylist.scss';
import { Favorites } from 'utils/interfaces/Favorite';
import { useAppSelector } from 'redux/hooks/hooks';
import { selectFavoritesInfo, setFavorites } from 'redux/slices/favoritesSlice';
import MFavorites from 'components/molecules/Favorite/MFavorites';

//Función que recibe la lista de canciones de favoritos y las recorre por medio del map
const OFavoritesList: FC = () => {
  const{ favorites}  = useAppSelector(selectFavoritesInfo);//TRAE LA PLAYLIST-SELECTOR
  console.log( favorites)

  return (
    <section className='section__MPlaylist'>
      <article className='section__playlist'>
      {/* {
          favorites.map((item, index) => (
            <MFavorites key={index} item={item} />
          ))
        } */}
      </article>
    </section>
  )
}

export default OFavoritesList