import axios from 'axios';
import { headers, scopes, urlComprobationFav, urlCreateFav, urlDeleteFav, urlPlaylist, urlPlaylistFav, urlUser } from 'utils/global';
import { User} from 'utils/interfaces/user.interface';
import { Playlist, Track, Tracks } from 'utils/interfaces/playlist.interface';
import { Favorites } from 'utils/interfaces/favoritesList.interface';

//Construcción de la URL
export const autorizeURL = `${process.env.REACT_APP_END_POINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${scopes?.join("%20")}&show_dialog=true`;


//Petición para traer la playlist
export const getPlaylist = () => {
    return axios.get<Playlist>(urlPlaylist, { headers })
}

//Petición para traer datos del usuario
export const getUser=()=>{
    return axios.get<User>(urlUser, {headers})
}

//Petición para mostrar la lista de favoritos
export const getFavorites=()=>{
    return axios.get<Favorites>(urlPlaylistFav, {headers})
}

export const putFavoritesC= (id:string)=>{
    return axios.put<Favorites>(urlCreateFav+`?ids=${id}`, null, {headers})
}

export const putFavoritesD= (id:string)=>{
    return axios.delete<Favorites>(urlDeleteFav+`?ids=${id}`, {headers})
}
export const getComprobation=(ids:string[])=>{
    const concatIds=ids.toString();
    return axios.get<Array<boolean>>(urlComprobationFav+`?ids=${concatIds}`, {headers})
}