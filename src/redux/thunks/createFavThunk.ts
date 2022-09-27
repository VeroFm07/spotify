import axios from "axios";
import { headers } from "utils/global";
import { Favorites } from "utils/interfaces/Favorite";

export const createFavorites=async(id:string)=>{
    const urlCreateFav='https://api.spotify.com/v1/me/tracks';
    await axios.put<Favorites>(urlCreateFav+`?ids=${id}`, null, {headers})
}