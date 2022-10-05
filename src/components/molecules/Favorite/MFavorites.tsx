import { faCircleCheck, faHeart, faHeartCircleCheck } from '@fortawesome/free-solid-svg-icons';
import AButton from 'components/atoms/AButton/AButton';
import AImage from 'components/atoms/AImage/AImage';
import AName from 'components/atoms/AName/AName';
import 'components/molecules/PlayList/MPlaylist.scss';
import 'components/organisms/Playlist/OPlaylist.scss';
import Swal from 'sweetalert2';
import { useAppDispatch, useAppSelector } from 'redux/hooks/hooks';
import { deleteFavorites, getFavorites } from 'redux/thunks/favoritesThunk';
import { selectFavoritesInfo, setDeleteFavSucess } from 'redux/slices/favoritesSlice';
import { Item } from 'utils/interfaces/Favorite';
import { useState } from 'react';


interface Iprops {
  item: Item;
}

const MFavorites = ({item }: Iprops) => {
  const dispatch = useAppDispatch();
  const { track} = item;
  const { album, artists, id, name } = track; 
  const [updateFavorites, setNewFavorites] = useState<string>(item.track.id!)
  const {favorites} = useAppSelector(selectFavoritesInfo);
  

  const deleteFavorite = () => {
    deleteFavorites(id).then(() => {
      //dispatch(setDeleteFav({ id }))//Se envia a redux
      dispatch(setDeleteFavSucess({ id }))//Se envia a redux
      setNewFavorites("")

      //Alerta de que se ha eliminado de favoritos
      const Toast = Swal.mixin({
        toast: true,
        position: 'bottom-end',
        showConfirmButton: false,
        timer: 1500,
        timerProgressBar: true,
        background: '#6c3430',
        color: '#fff',
        didOpen: (toast) => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

      Toast.fire({
        icon: 'success',
        title: 'Eliminado de favoritos'
      })
    })

  }
 
  return (
    <main className={'main'}>
      <AImage urlImg={album.images[0].url} className={"main__img"} />
      <AName className={'main__name main__name--M'} name={name} />
      <AName className={'main__name'} name={artists[0].name || ""} />
      <AButton className={"btn__heart"} onClick={deleteFavorite} icon={faHeartCircleCheck} isIcon={true} />
    </main>
  )
}

export default MFavorites