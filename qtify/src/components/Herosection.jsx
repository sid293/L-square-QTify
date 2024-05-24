import style from './Herosection.module.css';
import headphone from './../assets/headphone.png';

export default function Herosection(){
    
    return(
        <div class={style.outerdiv}>
            <div class={style.text}>
                <p>100 Thousand Songs, ad-free <br />Over thousands podcast episodes</p>
            </div>
            <div class={style.headphone} >
                <img src={headphone} alt="Headphone " />
            </div>
        </div>
    )
}