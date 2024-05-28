import style from './Section.module.css';
import fetchIt from './../../apis/fetchApis'; 
import { useEffect,useState } from 'react';
import Card from "./../Card/Card";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation, Mousewheel, Keyboard} from 'swiper/modules';
// import 'swiper/swiper-bundle.css';

import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
// import TabPanel from '@mui/lab/TabPanel';


export default function Section({albumName}){
    let [albumsLst, changeAlbumsList] = useState([]);
    let [albumDisplay, changeAlbumDisplay] = useState("Show all");
    let [value, changeValue] = useState("All");

    let setAlbumDisplay = ()=>{
        //Switch between collaps view and showall view
        if(albumDisplay === "Collapse"){
            changeAlbumDisplay("Show all");
        }else{
            changeAlbumDisplay("Collapse");
        }
    }

    let handleChange = async (event, value)=>{
        // console.log("handlechange event value ",event,value);
        let allSongs = await fetchIt("songs");
        if(value !== "All"){
            allSongs = allSongs.filter((album)=> {
                return album.genre.label === value});
            // console.log("filtered albums list is ",filteredAlbumsLst);
        }
        changeAlbumsList(allSongs);
        changeValue(value);
    }

    // useEffect(()=>{
    //     console.log("songs list is  ",songsList);
    // },[songsList]);

    useEffect(()=>{
        // console.log("running useeffect");
        let getAlbums = async()=>{
            //Based on albumName change section settings
            // console.log("running get albums");
            let albums = [];
            // console.log("albumName ",albumName);
            if(albumName === "Top Albums"){
                // albums = await fetchTopAlbums();
                albums = await fetchIt('top');
                // console.log("fetchtopalbums albums list is  ",albums);
                changeAlbumDisplay("Collapse");
                changeAlbumsList(albums);
            }
            if(albumName === "New Albums"){
                // albums = await fetchNewAlbums();
                albums = await fetchIt('new');
                // console.log("fetch new albums albums list is  ",albums);
                changeAlbumsList(albums);
            }
            if(albumName === "Songs"){
                albums = await fetchIt('songs');
                // console.log("fetch songs ",albums);
                changeAlbumsList(albums);
            }
        }
        getAlbums();
        if(albumDisplay !== "Collapse"){
            const swiper = document.querySelector('.swiper-container').swiper;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    },[albumDisplay, albumName])

    return(
        <div class={style.wrapper}>
            <div class={style.header}>
                <div class={style.heaad}>{albumName}</div>
                {albumName !== "Songs" && 
                    <button onClick={setAlbumDisplay} class={style.buton}>{albumDisplay}</button>
                }
            </div>
            {albumName === "Songs" && 
                <div class={style.filters}>
                    <Box sx={{ width: '100%', typography: 'body1' }}>
                        <TabContext value={value}>
                            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChange} aria-label="lab API tabs example" textColor="white" sx={{
                                '& .MuiTabs-indicator': {
                                    backgroundColor: 'var(--primaryColor)',
                                }
                                }}>
                                <Tab label="All" value="All" />
                                <Tab label="Rock" value="Rock" />
                                <Tab label="Pop" value="Pop" />
                                <Tab label="Jazz" value="Jazz" />
                                <Tab label="Blues" value="Blues" />
                            </TabList>
                            </Box>
                            {/* <TabPanel value="All">All</TabPanel>
                            <TabPanel value="Rock">Rock</TabPanel>
                            <TabPanel value="Pop">Pop</TabPanel>
                            <TabPanel value="Jazz">Jazz</TabPanel>
                            <TabPanel value="Blues">Blues</TabPanel> */}
                        </TabContext>
                    </Box>
                </div>
            }
            <div>
                {albumDisplay === "Collapse"?
               <div class={style.albumsList}>
                    {albumsLst.map((album)=>{
                   let conditionalProps = albumName === "Songs"? {likes:album.likes}:{follows:album.follows, Songs:album.songs.length}; 
                    return <Card {...conditionalProps} image={album.image} bottomtext={album.title}/>})}
                </div> 
                :
                <div class={style.swiperContainer}>
                    <Swiper 
                        class="swiper-container"
                        navigation={{
                            nextEl: `.${style.swiperButtonNext}`,
                            prevEl: `.${style.swiperButtonPrev}`,
                        }}
                        keyboard={true} 
                        cssMode={true}
                        mousewheel={true}
                        modules={[Navigation,Keyboard,Mousewheel]} 
                        className='mySwiper' 
                        spaceBetween={18}
                        slidesPerView={3}
                        breakpoints={{
                            320: {
                            slidesPerView: 2,
                            spaceBetween: 10
                            },
                            // when window width is >= 480px
                            480: {
                            slidesPerView: 3,
                            spaceBetween: 15
                            },
                            // when window width is >= 640px
                            640: {
                            slidesPerView: 4,
                            spaceBetween: 20
                            },
                            // when window width is >= 1024px
                            1024: {
                            slidesPerView: 5,
                            spaceBetween: 25
                            }
                        }}
                    >
                        {albumsLst.map((album)=>{
                        let conditionalProps = albumName === "Songs"? {likes:album.likes}:{follows:album.follows, Songs:album.songs.length}; 
                        return <SwiperSlide ><Card {...conditionalProps} image={album.image} bottomtext={album.title}/></SwiperSlide>})}
                        <div style={{color:'white',width:"32px",height:"32px",'--swiper-navigation-size':"22px"}} className={`${style.swiperButtonNext} swiper-button-next ${style.swiperButtonHover}`} >i</div>
                        <div style={{color:'white',width:"32px",height:"32px",'--swiper-navigation-size':"22px"}} className={`${style.swiperButtonPrev} swiper-button-prev ${style.swiperButtonHover}`} />
                    </Swiper>
                </div>
                }
            </div>
        </div>
    )
}