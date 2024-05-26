import axios from 'axios';


export default async function fetchSongs(){
    let url = "https://qtify-backend-labs.crio.do/albums/top";
    try{
        let response = await axios.get(url);
        return response.data;
    }catch(err){
        console.log(err);
    }
}