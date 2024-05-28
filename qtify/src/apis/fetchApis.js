import axios from 'axios';

export default async function fetchIt(target){
    let url = `https://qtify-backend-labs.crio.do/albums/${target}`;
    if(target === "songs"){
        url = `https://qtify-backend-labs.crio.do/${target}`; 
    }
    try{
        let response = await axios.get(url);
        // console.log("response data from fetchtopalbums ",response.data);
        return response.data;
    }catch(err){
        console.log(err);
    }
}

// export async function fetchTopAlbums(){
//     let url = "https://qtify-backend-labs.crio.do/albums/top";
//     try{
//         let response = await axios.get(url);
//         // console.log("response data from fetchtopalbums ",response.data);
//         return response.data;
//     }catch(err){
//         console.log(err);
//     }
// }


// export async function fetchNewAlbums(){
//     let url = "https://qtify-backend-labs.crio.do/albums/new";
//     try{
//         let response = await axios.get(url);
//         // console.log("response data from fetchnewalbums ",response.data);
//         return response.data;
//     }catch(err){
//         console.log(err);
//     }
// }

// export async function fetchAllSongs(){
//     let url = "https://qtify-backend-labs.crio.do/songs";
//     try{
//         let response = await axios.get(url);
//         return response.data;
//     }catch(err){
//         console.log(err);
//     }
// }