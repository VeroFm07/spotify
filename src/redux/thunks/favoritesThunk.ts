import axios from "axios";
import { apiUrl } from "redux/api/apiUrl";
import { headers } from "utils/global";
import {Favorites} from "utils/interfaces/Favorite";

export const getFavorites = async () => {
    let tracksResponseFav: Favorites = {
        href: "", items: [], limit: 0, next: null, offset: 0, previous: null, total: 0
    };
    await apiUrl.get<Favorites>('me/tracks', { headers })
        .then(({ data }) => {
            tracksResponseFav = data;
        });
    return tracksResponseFav;
}

export const createFavorites = async (id: string) => {
    const urlCreateFav = 'https://api.spotify.com/v1/me/tracks';
    await axios.put<Favorites>(urlCreateFav + `?ids=${id}`, null, { headers })
   
}

export const deleteFavorites = async (id: string) => {
    const urlDeleteFav = 'https://api.spotify.com/v1/me/tracks';
    await axios.delete<Favorites>(urlDeleteFav + `?ids=${id}`, { headers })
}