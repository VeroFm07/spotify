import MFavorites from 'components/molecules/Favorites/MFavorites';
import MSong from 'components/molecules/Song/MSong';
import React, { FC } from 'react'
import { Item } from 'utils/interfaces/favoritesList.interface';


interface IProps{
    songListFav: Item[];
}
const OFavoritesList: FC<IProps>= ({songListFav}) => {
  return (
    <div>
        {
                songListFav?.map(({track}, index) => (
                    <div key={index} >
                        <MFavorites nameSong={track.name} img={track.album.images[0].url} nameArtist={track.artists[0].name}/>
                    </div>
                ))
            }
    </div>
  )
}

export default OFavoritesList