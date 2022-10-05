import React, { FC, useEffect, useState } from 'react'
import MPlaylist from 'components/molecules/PlayList/MPlaylist';
import 'components/organisms/Playlist/OPlaylist.scss';
import { selectPlaylistInfo} from 'redux/slices/playlistSlice';
import {useAppSelector } from 'redux/hooks/hooks';

//Función que recibe la lista de canciones y las recorre por medio del map
const OPlaylist= () => {
  const { playlist } = useAppSelector(selectPlaylistInfo);//TRAE LA PLAYLIST-SELECTOR

  return (
    <section className='section__MPlaylist'>
      <article className='section__playlist'>
        {
          playlist.map((item, index) => (
            <MPlaylist key={index} item={item} />
          ))
        }
      </article>
    </section>
  )
}

export default OPlaylist