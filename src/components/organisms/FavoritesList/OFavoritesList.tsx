import { faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import MFavorites from 'components/molecules/Favorite/MFavorites';
import React, { FC } from 'react'
import { Item } from 'utils/interfaces/Favorite/IFavorite';
import 'components/organisms/Playlist/OPlaylist.scss';

interface IProps {
  songListFav: Item[];
}

//Función que recibe la lista de canciones de favoritos y las recorre por medio del map
const OFavoritesList: FC<IProps> = ({ songListFav }) => {
  return (
    <section className='section__MPlaylist'> 
      {
        songListFav?.map(({ track }, index) => {
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