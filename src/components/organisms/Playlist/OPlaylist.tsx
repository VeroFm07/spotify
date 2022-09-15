import MSong from 'components/molecules/Song/MSong';
import React, { FC } from 'react'
import { Item } from 'utils/interfaces/playlist.interface'

interface IProps{
    songList: Item[];
}
const OPlaylist: FC<IProps>= ({songList}) => {
  return (
    <div>
        {
                songList?.map(({ track}, index) => (
                    <div key={index} >
                        <MSong nameSong={track.name} img={track.album.images[0].url} nameArtist={track.artists[0].name}/>
                    </div>
                ))
            }
    </div>
   
    
   
  )
}

export default OPlaylist