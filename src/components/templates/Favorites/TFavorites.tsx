import React, { useEffect, useState } from 'react'
import { getFavorites } from 'services';
import { Item } from 'utils/interfaces/Favorite/IFavorite';
import OFavoritesList from 'components/organisms/FavoritesList/OFavoritesList';

const TFavorites = () => {
  
  //Función que devuelve los data de la lista de canciones
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