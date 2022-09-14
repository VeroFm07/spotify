import OSongs from 'components/organisms/Songs/OSongs';
import React, { useEffect, useState } from 'react'
import { getSongs } from 'services';
import { Item } from 'utils/interfaces';

const THome = () => {

    const [songs, setSongs] = useState<Item[]>();
    useEffect(() => {
        getSongs()
            .then(({ data }) => {
                setSongs(data.albums.items)
            })
            .catch(e => console.log(e, 'ups no cargo '));
    }, [])

  return (
    <div>
        <OSongs songList={songs || []} />
    </div>
  )
}

export default THome