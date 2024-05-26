import style from './Section.module.css';
// import Button from '@mui/material/Button';
import fetchSongs from './../../apis/fetchApis'; 
import { useEffect,useState } from 'react';
import Card from "./../Card/Card";
import {Swiper, SwiperSlide} from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import {Navigation, Pagination, Mousewheel, Keyboard} from 'swiper/modules';
// import 'swiper/swiper-bundle.css';

export default function Section(){
    let [songsList, changeSongsList] = useState([]);
    let [albumDisplay, changeAlbumDisplay] = useState("Collapse");

    let getSongs = async()=>{
        let songs = await fetchSongs();
        changeSongsList(songs);
        // console.log("songs list is  ",songsList);
    }

    let setAlbumDisplay = ()=>{
        if(albumDisplay == "Collapse"){
            changeAlbumDisplay("Show all");
        }else{
            changeAlbumDisplay("Collapse");
        }
    }

    // useEffect(()=>{
    //     console.log("songs list is  ",songsList);
    // },[songsList]);

    useEffect(()=>{
        getSongs();
        if(albumDisplay !== "Collapse"){
            const swiper = document.querySelector('.swiper-container').swiper;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    },[])

    return(
        <div class={style.wrapper}>
            <div class={style.header}>
                <div class={style.heaad}>Top Albums</div>
                <button onClick={setAlbumDisplay} class={style.buton}>{albumDisplay}</button>
            </div>
            <div>
                {albumDisplay == "Collapse"?
               <div class={style.albumsList}>
                    {/* <Card follows={100} image="img" bottomtext='bottomtxt'/> */}
                    {songsList.map((album)=><Card follows={album.follows} image={album.image} bottomtext={album.title}/>)}
                </div> 
                :
                <div class={style.swiperContainer} style={{border:"2px solid yellow"}}>
                    <Swiper 
                        class="swiper-container"
                        // navigation={true}
                        // navigation={{
                        //     nextEl:`.${style.swiperbuttonnext}`,
                        //     prevEl:`.${style.swiperbuttonprevious}`,
                        // }} 
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
                        {songsList.map((album)=><SwiperSlide><Card follows={album.follows} image={album.image} bottomtext={album.title}/></SwiperSlide>)}
                        {/* <div className={`${style.swiperButtonNext} `} />
                        <div className={`${style.swiperButtonPrevious} `} /> */}
                        <div style={{color:'white',width:"50px",height:"50px"}} className={`${style.swiperButtonNext} swiper-button-next ${style.swiperButtonHover}`} />
                        <div style={{color:'white',width:"50px",height:"50px"}} className={`${style.swiperButtonPrev} swiper-button-prev ${style.swiperButtonHover}`} />
                    </Swiper>
                </div>
                }
            </div>
        </div>
    )
}