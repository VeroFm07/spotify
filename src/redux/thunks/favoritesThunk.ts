import { apiUrl } from "redux/api/apiUrl";
import { headers } from "utils/global";
import { Track, Favorites, Item } from "utils/interfaces/Favorite";

export const getFavorites = async () => {
    let tracksResponseFav: Favorites = {
        href: "", items: [], limit: 0, next: "", offset: 0, previous: null, total: 0
    };
    await apiUrl.get<Favorites>('me/tracks', { headers })
        .then(({ data }) => {
            tracksResponseFav = data;
        });
    return tracksResponseFav;

}