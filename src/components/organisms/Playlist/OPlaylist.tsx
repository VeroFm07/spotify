import React, { FC, useEffect } from 'react'
import MPlaylist from 'components/molecules/PlayList/MPlaylist';
import { Item } from 'utils/interfaces/playlist.interface'
import { faHeartCircleCheck} from '@fortawesome/free-solid-svg-icons';
import 'components/organisms/Playlist/OPlaylist.scss';

interface IProps {
  songList: Item[];
}
const OPlaylist: FC<IProps> = ({ songList }) => {

  return (
    <section className='section__MPlaylist'>
      {
        songList?.map(({ track }, index) => {
          return (
            <article key={index} className='section__playlist'>
              <MPlaylist isFavorite={track.isFavorite} id={track.id} img={track.album.images[0].url} nameSong={track.name} nameArtist={track.artists[0].name} icon={faHeartCircleCheck} />
            </article>
          )
        })
      }
    </section>
  )
}

export default OPlaylist