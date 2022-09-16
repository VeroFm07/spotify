import MHome from 'components/molecules/Home/MHome';
import OPlaylist from 'components/organisms/Playlist/OPlaylist';
import OUser from 'components/organisms/User/OUser';
import React, { useEffect, useState } from 'react'
import { getComprobation, getPlaylist } from 'services';
import { Item } from 'utils/interfaces/playlist.interface';

const THome = () => {
  const trueOfalse = async (data: Item[]) => {
    const variable = await getComprobation(result.slice(0, 49));
    completeTrack(variable.data, data);
  }

  const [songs, setSongs] = useState<Item[]>();
  const result: any[] = [];

  const completeTrack = (array: boolean[], data: Item[]) => {
    if (data) {
      const complete = data.map((item, index) => {
        let temporalTrack: any = {};
        temporalTrack = item;
        temporalTrack.track.isFavorite = array[index];
        return temporalTrack;
      })
      setSongs(complete);
    }
  }
  useEffect(() => {
    getPlaylist()
      .then(({ data }) => {
        setSongs(data.tracks.items)
        trueOfalse(data.tracks.items);
        data.tracks.items.map((item) => {
          result.push(item.track.id)
        }
        )
      })
      .catch(e => console.log(e, 'ups no cargo '));
  }, [])

  return (
    <>
      <OPlaylist  songList={songs || []} />
      <MHome />
    </>
  )
}

export default THome