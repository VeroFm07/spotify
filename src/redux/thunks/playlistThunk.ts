import { apiUrl } from "redux/api/apiUrl";
import { headers } from "utils/global";
import { Tracks, Playlist } from "utils/interfaces/Playlist";

export const getPlaylists=async()=>{
    let tracksResponse: Tracks= {href: "", items:[], limit: 0, next: null, previous: null, offset: 0,total: 0};
    await apiUrl.get<Playlist>('/playlists/7FvZlu4uQ1kCbBRxsgpkA2', {headers})
    .then(({data})=>{
        tracksResponse= data.tracks;
       
    });
    return tracksResponse;
}


