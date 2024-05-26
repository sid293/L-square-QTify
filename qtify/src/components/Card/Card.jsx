import Chip from '@mui/material/Chip';
// import Card from '@mui/material/Card';
import style from './Card.module.css';

export default function Card({follows,image,bottomtext = "New English Songs"}){
    let followLabel = `${follows} Follows`;
    
    return(
        <div class={style.wrapperdiv}>
            <div class={style.cardComponent}>
                <div class={style.styleimg}>
                    <img style={{height:"100%",width:"100%"}} src={image} alt="music album" /> 
                </div>
                <Chip  class={style.chipStyle} label={followLabel} variant="outlined"/>
                <div class={style.bottomtext}>
                    {bottomtext}
                </div>
            </div>
        </div>
    )
}