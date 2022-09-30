import axios from 'axios';
import MHome from 'components/molecules/Home/MHome';
import OPlaylist from 'components/organisms/Playlist/OPlaylist';
import React, { useEffect} from 'react'
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { setPlaylist } from 'redux/slices/playlistSlice';
import { getPlaylists } from 'redux/thunks/playlistThunk';
import { getFavorites } from 'redux/thunks/favoritesThunk';
import { selectFavoritesInfo, setFavorites } from 'redux/slices/favoritesSlice';
import { getPlaylistRedux } from 'utils/helpers';
import OFavoritesList from 'components/organisms/FavoritesList/OFavoritesList';

const THome = () => {
  const dispatch = useAppDispatch();
  //PRIMERO FAVORITOS, LUEGO PLAYLIST
  // const { favorites: { favorites } } = useAppSelector(selectFavoritesInfo);

  
    getFavorites().then(dataFV => {
      dispatch(setFavorites(dataFV))
      getPlaylists().then(dataPL => {
        getPlaylistRedux(dataPL.items, dataFV.items).then((data: any) => {
          dispatch(setPlaylist(data))
        })
      });
    });


  

  return (
    <>
      <OPlaylist />
      <MHome />
    </>
  )
}

export default THome