import axios from "axios";

//Sirve para establecer la base de la url de las peticiones
//Evita estar repitiendo código
export const apiUrl= axios.create({
    baseURL: 'https://api.spotify.com/v1'
})