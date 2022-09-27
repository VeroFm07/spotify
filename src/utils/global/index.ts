import { getTokenLocalStorage } from '../helpers/token';

//Permisos a la API
export const scopes = ['ugc-image-upload',
    'user-read-recently-played',
    'user-top-read',
    'user-read-playback-position',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'app-remote-control',
    'streaming',
    'playlist-modify-public',
    'playlist-modify-private',
    'playlist-read-private',
    'playlist-read-collaborative',
    'user-follow-modify',
    'user-follow-read',
    'user-library-modify',
    'user-library-read',
    'user-read-email'
];

//Url para hacer las peticiones a la api
// export const urlUser = 'https://api.spotify.com/v1/me';
// export const urlPlaylist = 'https://api.spotify.com/v1/playlists/7FvZlu4uQ1kCbBRxsgpkA2';
// export const urlPlaylistFav= 'https://api.spotify.com/v1/me/tracks';
// export const urlCreateFav= 'https://api.spotify.com/v1/me/tracks';

export const urlComprobationFav ='https://api.spotify.com/v1/me/tracks/contains';

//Variable con los headers de cada petición
export const headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + getTokenLocalStorage() }
