import axios from 'axios';
import { headers, scopes, urlApi, urlUser } from 'utils/global';
import { Data } from '../utils/interfaces/songs.interface';
import { User} from 'utils/interfaces/user.interface';
//Construcción de la URL
export const autorizeURL = `${process.env.REACT_APP_END_POINT}?client_id=${process.env.REACT_APP_CLIENT_ID}&response_type=token&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}&scope=${scopes?.join("%20")}&show_dialog=true`;

//Petición para traer el album
export const getSongs = async () => {
    return await axios.get<Data>(urlApi, { headers })
}

export const getUser=async()=>{
    return await axios.get<User>(urlUser, {headers})
}