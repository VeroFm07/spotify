import MSong from 'components/molecules/Song/MSong';
import React, { FC } from 'react'
import { Item } from 'utils/interfaces'

interface IProps{
    songList: Item[];
}
const OSongs: FC<IProps>= ({songList}) => {
    
  return (
    <div>
        {
                songList?.map(({ name, images, artists}, index) => (
                    
                    <div key={index} >
                        <MSong nameSong={name} img={images[0].url} nameArtist={artists[0].name}/>
                    </div>
                ))
            }
    </div>
   
  )
}

export default OSongs