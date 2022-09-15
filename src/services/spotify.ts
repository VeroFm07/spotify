import axios from 'axios';
import { headers, scopes, urlApi, urlPlaylist, urlPlaylistFav, urlUser } from 'utils/global';
import { User} from 'utils/interfaces/user.interface';
import { Playlist, Track, Tracks } from 'utils/interfaces/playlist.interface';
import { Favorites } from 'utils/interfaces/favoritesList.interface';

//Construcción de la URL
export const autorizeURL = `${process.env.REACT_APP_END_POINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${scopes?.join("%20")}&show_dialog=true`;


//Petición para traer la playlist
export const getPlaylist = async () => {
    return await axios.get<Playlist>(urlPlaylist, { headers })
}

//Petición para traer datos del usuario
export const getUser=async()=>{
    return await axios.get<User>(urlUser, {headers})
}

//Petición para mostrar la lista de favoritos
export const getFavorites=async()=>{
    return await axios.get<Favorites>(urlPlaylistFav, {headers})
}