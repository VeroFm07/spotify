import axios from "axios";
import { headers } from "utils/global";
import { Favorites } from "utils/interfaces/Favorite";

export const deleteFavorites=async(id:string)=>{
    const urlDeleteFav='https://api.spotify.com/v1/me/tracks';
    await axios.delete<Favorites>(urlDeleteFav+`?ids=${id}`, {headers})
    
}