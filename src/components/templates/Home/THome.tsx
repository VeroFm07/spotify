import MHome from 'components/molecules/Home/MHome';
import OPlaylist from 'components/organisms/Playlist/OPlaylist';
import OUser from 'components/organisms/User/OUser';
import React, { useEffect, useState } from 'react'
import { getComprobation, getPlaylist } from 'services';
import { Item } from 'utils/interfaces/Playlist/IPlaylist';

const THome = () => {
  //Función que va devolver los ids de las canciones por medio del método getComprobation
  const trueOfalse = async (data: Item[]) => {
    const variable = await getComprobation(result.slice(0, 49));
    completeTrack(variable.data, data);
  }

  const [songs, setSongs] = useState<Item[]>();
  const result: any[] = [];

  //Función para almacenar true o false a partir de los ids de las canciones
  //True: si es favorito, False: no se encuentra en favoritos
  const completeTrack = (array: boolean[], data: Item[]) => {
    if (data) {
      const complete = data.map((item, index) => { //Recorre los data
        let temporalTrack: any = {};
        temporalTrack = item;
        temporalTrack.track.isFavorite = array[index]; //Se crea un elemento que va almacenar si es o no favorito
        return temporalTrack;
      })
      setSongs(complete);
    }
  }

  //Función que devuelve los data de la lista de canciones
  useEffect(() => {
    getPlaylist()
      .then(({ data }) => {
        //Llamado a las funciones y se le pasa por parametro los items de las canciones
        setSongs(data.tracks.items)
        trueOfalse(data.tracks.items);

        //Se iteran los data de la lista de canciones
        data.tracks.items.map((item) => {
          result.push(item.track.id) //Agrega los id de las canciones al arreglo
        }
        )
      })
      .catch(e => console.log(e, '¡NO CARGÓ!'));
  }, [])

  return (
    <>
      <OPlaylist songList={songs || []} />
      <MHome />
    </>
  )
}

export default THome