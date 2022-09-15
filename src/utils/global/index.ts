import { getTokenLocalStorage } from '../helpers/token';

//Permisos a la API
export const scopes = ['user-read-recently-played',
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

//Variables que contienen las url para las peticiones a la API
export const urlApi = 'https://api.spotify.com/v1/browse/new-releases/'
export const urlPlaylist = 'https://api.spotify.com/v1/playlists/37i9dQZF1DWZjqjZMudx9T'
export const urlUser = 'https://api.spotify.com/v1/me'
export const urlPlaylistFav= 'https://api.spotify.com/v1/me/tracks'
export const headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + getTokenLocalStorage() }
