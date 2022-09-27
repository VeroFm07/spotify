import { apiUrl } from "redux/api/apiUrl";
import { headers } from "utils/global";
import {User} from 'utils/interfaces/User';

export const getUser =async()=>{
let tracksResponse: User= {display_name: "", external_urls:[], followers: [], href: "",id: "",images: [],type: "",uri: ""};
await apiUrl.get<User>('/me', {headers})
.then(({data})=>{
    tracksResponse= data;
});
return tracksResponse;
}