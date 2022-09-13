import { getTokenLocalStorage } from '../helpers/token';
export const scopes = ["user-read-currently-playing",
    "user-read-playback-state",
    "user-read-recently-played",
    "user-top-read",
    "user-modify-playback-state"];

export const urlApi = 'https://api.spotify.com/v1/browse/new-releases/'

export const headers = { 'Content-Type': 'application/json', Authorization: 'Bearer ' + getTokenLocalStorage() }