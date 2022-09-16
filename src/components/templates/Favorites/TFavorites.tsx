import React, { useEffect, useState } from 'react'
import { getFavorites } from 'services';
import { Item } from 'utils/interfaces/favoritesList.interface';
import OFavoritesList from 'components/organisms/FavoritesList/OFavoritesList';

const TFavorites = () => {
  
  const [songsF, setSongsFav] = useState<Item[]>();
  useEffect(() => {
    getFavorites()
      .then(({ data }) => {
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