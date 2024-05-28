import Chip from '@mui/material/Chip';
// import Card from '@mui/material/Card';
import Tooltip from '@mui/material/Tooltip';
import style from './Card.module.css';

export default function Card({follows=[],image,bottomtext = "New English Songs",likes=[],Songs=0}){
    let followLabel = `${follows} Follows`;
    let tooltipText = Songs+" songs";
    if(follows.length === 0){
        followLabel = `${likes} Likes`;
    }
    
    return(
        <div class={style.wrapperdiv}>
            {Songs>0?
                <Tooltip title={tooltipText} arrow placement="top">
                <div class={style.cardComponent}>
                    <div class={style.styleimg}>
                        <img style={{height:"100%",width:"100%"}} src={image} alt="music album" /> 
                    </div>
                    <Chip  class={style.chipStyle} label={followLabel} variant="outlined"/>
                    <div class={style.bottomtext}>
                        {bottomtext}
                    </div>
                </div>
                </Tooltip>
            :
                <div class={style.cardComponent}>
                    <div class={style.styleimg}>
                        <img style={{height:"100%",width:"100%"}} src={image} alt="music album" /> 
                    </div>
                    <Chip  class={style.chipStyle} label={followLabel} variant="outlined"/>
                    <div class={style.bottomtext}>
                        {bottomtext}
                    </div>
                </div>
            }
        </div>
    )
}