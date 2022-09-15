import React, { useEffect, useState } from 'react'
import { getFavorites } from 'services';
import { Item } from 'utils/interfaces/favoritesList.interface';
import OSongs from 'components/organisms/Playlist/OPlaylist';
import OFavoritesList from 'components/organisms/FavoritesList/OFavoritesList';

const TFavorites = () => {
  let canciones: Item[] = [];

  const [songsF, setSongsFav] = useState<Item[]>();
  useEffect(() => {
    getFavorites()
      .then(({ data }) => {
        console.log(canciones);
        setSongsFav(data.items)
      })
      .catch(e => console.log(e, 'ups no cargo '));
  }, [])

  return (
    <div>
      <OFavoritesList songListFav={songsF || []} />
    </div>
  )
}

export default TFavorites