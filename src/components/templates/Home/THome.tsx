import MHome from 'components/molecules/Home/MHome';
import OPlaylist from 'components/organisms/Playlist/OPlaylist';
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux';
import { useAppDispatch } from 'redux/hooks/hooks';
import { setFavorites } from 'redux/slices/favoritesSlice';
import { setPlaylist } from 'redux/slices/playlistSlice';
import { RootState } from 'redux/store/store';
import { getFavorites } from 'redux/thunks/favoritesThunk';
import { getPlaylists } from 'redux/thunks/playlistThunk';
import { getComprobation } from 'services';
import { Favorites } from 'utils/interfaces/Favorite';
// import { getComprobation} from 'services';
import { Item, Tracks } from 'utils/interfaces/Playlist/IPlaylist';

const THome = () => {
//   const [playlist, setPlaylistView] = useState<Tracks>()
//   const dispatch= useAppDispatch();

//   var [playlistFav, setPlaylistFavView]=useState<Favorites>()
//   let [varPlaylist]:ReadonlyArray<any>=[];
//   let [varPlaylistFav]:ReadonlyArray<any>=[];

//   useEffect(() => {
//     getPlaylists().then(data =>{
//       dispatch(setPlaylist(data)) //Se trae de redux el reducer
//       varPlaylist = data;
//       setPlaylistView(data); //Se asigna a la variable la data que trae la petición
//       // console.log('PLAYLIST', varPlaylist)
//     })

//     getFavorites().then(data =>{
//       dispatch(setFavorites(data))
//       varPlaylistFav=data;
//       setPlaylistFavView(data);
//       // console.log('FAVORITOS', varPlaylistFav)
//     })

// }, [dispatch]);



  //  if(varPlaylist==setPlaylistFavView) {
  //     console.log('ES FAV')
  //  }
  // const {playlist=[]}=useSelector((state:RootState)=>state.playlist);
  // const isFavorite=(arrayFav:any, id:string):boolean=>({
  //   return !!arrayFav.map((track:any) =>{ track.track.id=== id})
  // })
  
  // const modificIcon=()=>{
  //  varPlaylist?.map(({track})=>{
  //     track.track.id;
  //     console.log(track.track.id);
  //   })
  // }



  //Función que va devolver los ids de las canciones por medio del método getComprobation
  // const trueOfalse = async (data: Item[]) => {
  //   const variable = await getComprobation(result.slice(0, 49));
  //   completeTrack(variable.data, data);
  // }


  // const [songs, setSongs] = useState<any[]>([]);
  // const result: any[] = [];

  // //Función para almacenar true o false a partir de los ids de las canciones
  // //True: si es favorito, False: no se encuentra en favoritos
  // const completeTrack = (array: boolean[], data: Item[]) => {
  //   if (data) {
  //     const complete = data.map((item, index) => { //Recorre los data
  //       let temporalTrack: any = {};
  //       temporalTrack = item;
  //       temporalTrack.track.isFavorite = array[index]; //Se crea un elemento que va almacenar si es o no favorito
  //       return temporalTrack;
  //     })
  //     setSongs(complete);
  //   }
  // }

  // //Función que devuelve los data de la lista de canciones
  //  useEffect(() => {
  //   getPlaylists()
  //     .then(({ items }) => {
  //       //Llamado a las funciones y se le pasa por parametro los items de las canciones
  //       setSongs(items)
  //       trueOfalse(items);

  //       //Se iteran los data de la lista de canciones
  //       data.tracks.items.map((item) => {
  //         result.push(item.track.id) //Agrega los id de las canciones al arreglo
  //       }
  //       )
  //     })
  //     .catch(e => console.log(e, 'ups no cargo '));
  // }, [])


  return (
    <>
      <OPlaylist  />
      <MHome />
    </>
  )
}

export default THome