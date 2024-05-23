import style from "./button.module.css";

export default function Bone({text}){
    return(
        <div >
            <button class={style.button}>{text}</button>
        </div>
    )
}