
import * as React from 'react';
// import AppBar from '@mui/material/AppBar';
// import Box from '@mui/material/Box';
// import Toolbar from '@mui/material/Toolbar';
// import IconButton from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import SerachIcon from '@mui/icons-material/Search';
// import Menu from '@mui/material/Menu';
// import MenuIcon from '@mui/icons-material/Menu';
// import Container from '@mui/material/Container';
// // import Avatar from '@mui/material/Avatar';
// import Button from '@mui/material/Button';
// import Tooltip from '@mui/material/Tooltip';
// import MenuItem from '@mui/material/MenuItem';
// import AdbIcon from '@mui/icons-material/Adb';
import logo from './../assets/logo.png';
// import Buttonone from './button/Buttonone';
import style from './Appbar.module.css';
import Bone from './button/Bone';

export default function Appbar(){
    return(
        <div>
            {/* <AppBar position="static" sx={{height:"74px"}}>
            </AppBar>  */}
            <nav style={{display:'flex',justifyContent:"space-between",alignItems:"center",width:"91.5vw",height:"74px",flexDirection:"row",padding:"0px 40px 0px 40px"}}>
                <div style={{width:"67px",height:"34px"}}>
                    <img src={logo} alt="qtify logo" style={{width:"100%",height:"100%"}} />
                </div>
                <div style={{width:"568px",height:"48px",display:"flex",justifyContent:"flex-start"}}>
                    {/* <input type="text" style={{borderRadius:"8px 0px 0px 8px",border:"1px solid black",height:"100%",width:"502px",padding:"0px"}} /> */}
                    <input type="text" placeholder="Search a album of your choice" class={style.searchBox}  />
                    <div style={{width:"66px",height:"100%",border:"1px solid black",backgroundColor:"white",borderRadius:"0px 8px 8px 0px"}}>
                        {/* <img src="../assets/Search-icon.svg" alt="search" /> */}
                        <div style={{height:"100%",display:"flex",alignItems:"center",justifyContent:"center"}}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M14.3257 12.8987L19.7057 18.2787C19.8948 18.468 20.001 18.7246 20.0009 18.9921C20.0008 19.2596 19.8945 19.5161 19.7052 19.7052C19.516 19.8943 19.2594 20.0005 18.9919 20.0004C18.7244 20.0003 18.4678 19.894 18.2787 19.7047L12.8987 14.3247C11.2905 15.5704 9.26802 16.1566 7.24287 15.9641C5.21772 15.7716 3.34198 14.8148 1.99723 13.2884C0.652477 11.7619 -0.0602651 9.78056 0.00399633 7.74729C0.0682577 5.71402 0.904695 3.7816 2.34315 2.34315C3.7816 0.904695 5.71402 0.0682577 7.74729 0.00399633C9.78056 -0.0602651 11.7619 0.652477 13.2884 1.99723C14.8148 3.34198 15.7716 5.21772 15.9641 7.24287C16.1566 9.26802 15.5704 11.2905 14.3247 12.8987H14.3257ZM8.00074 13.9997C9.59204 13.9997 11.1182 13.3676 12.2434 12.2424C13.3686 11.1172 14.0007 9.59104 14.0007 7.99974C14.0007 6.40845 13.3686 4.88232 12.2434 3.7571C11.1182 2.63189 9.59204 1.99974 8.00074 1.99974C6.40944 1.99974 4.88332 2.63189 3.7581 3.7571C2.63289 4.88232 2.00074 6.40845 2.00074 7.99974C2.00074 9.59104 2.63289 11.1172 3.7581 12.2424C4.88332 13.3676 6.40944 13.9997 8.00074 13.9997Z" fill="#121212"/>
                            </svg>
                        </div>
                    </div>
                </div>
                <Bone text={"Give Feedback"} />
            </nav>

            {/* <div style={{disply:'flex',justifyContent:"space-between",alignItems:"center",border:"3px solid blue",width:"100vw",height:"74px",flexDirection:"row"}}>
                <div style={{border:"2px solid red",width:"67px",height:"34px"}}>
                    <img src={logo} alt="qtify logo" style={{width:"100%",height:"100%"}} />
                </div>
                <div style={{border:"2px solid blue",width:"568px",height:"48px"}}>
                    <input type="text" />
                </div>
                <div style={{width:"40px",border:"2px solid purple"}}>feedback buttton</div>
            </div> */}
        </div>
    )
}

//input
// width: 568px;
// height: 48px;
// top: 13px;
// left: 436px;
// gap: 0px;
// border-radius: 0px 8px 8px 0px;
// border: 1px 0px 0px 0px;
// opacity: 0px;
