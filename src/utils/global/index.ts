import { getTokenLocalStorage } from '../helpers/token';

//Permisos a la API
export const scopes = ["user-read-currently-playing",
    "user-read-playback-state",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state"]; 

//Variables que contienen las url para las peticiones a la API
export const urlApi = 'https://api.spotify.com/v1/browse/new-releases/'
export const urlUser = 'https://api.spotify.com/v1/me'
export const headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + getTokenLocalStorage() }