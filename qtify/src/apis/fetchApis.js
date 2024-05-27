// import axios from 'axios';


// export default async function fetchSongs(){
//     let url = "https://qtify-backend-labs.crio.do/albums/top";
//     try{
//         let response = await axios.get(url);
//         return response.data;
//     }catch(err){
//         console.log(err);
//     }
// }


import axios from 'axios';


export async function fetchTopAlbums(){
    let url = "https://qtify-backend-labs.crio.do/albums/top";
    try{
        let response = await axios.get(url);
        // console.log("response data from fetchtopalbums ",response.data);
        return response.data;
    }catch(err){
        console.log(err);
    }
}


export async function fetchNewAlbums(){
    let url = "https://qtify-backend-labs.crio.do/albums/new";
    try{
        let response = await axios.get(url);
        // console.log("response data from fetchnewalbums ",response.data);
        return response.data;
    }catch(err){
        console.log(err);
    }
}