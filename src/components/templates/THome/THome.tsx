import OSongs from 'components/organisms/Playlist/OPlaylist';
import React, { useEffect, useState } from 'react'
import { getPlaylist } from 'services';
import { Item } from 'utils/interfaces/playlist.interface';
import { Track, Tracks } from 'utils/interfaces/playlist.interface';

const THome = () => {
    let canciones: Item[]= [];
    const [songs, setSongs] = useState<Item[]>();
    useEffect(() => {
      getPlaylist()
            .then(({ data }) => {
                
                setSongs(data.tracks.items)
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