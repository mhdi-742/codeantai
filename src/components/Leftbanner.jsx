import './lb.css'
import logo from '../assets/logo.svg'
import book from '../assets/book.svg'
import codelogo from '../assets/codelogo.svg'
import cloudlogo from '../assets/cloudlogo.svg'
import homelogo from '../assets/homelogo.svg'
import settings from '../assets/settings.svg'
import login from '../assets/login.svg'
import phone from '../assets/phone.svg'
import Hamburger from 'hamburger-react'
import { useEffect, useState } from "react";
import { AppContext, useGlobalContext } from '../context'
import { NavLink } from 'react-router-dom'

const Leftbanner=()=>{
    let username="UtkarshDhairyaPanwar";
    let newname=username;
    if(username.length>12){
       username.substring(0,12)+"...";
    }
    const [isOpen,setOpen]=useState(false);
    const [name,setname]=useState('on');
    const {index,setindex}=useGlobalContext();
    var arr=["not-sel","not-sel","not-sel","not-sel","not-sel"];
    //var b=arr;
    const[b,changeb]=useState(arr);
    useEffect(() => {
       var c=arr;
       c[index]='sel';
       changeb(c);
    } ,[index])
    useEffect(() => {
        if(isOpen) setname('on');
        else setname('off')
     } ,[isOpen])

return(
    <>
        <div className="left-banner">
            <div className={"left-banner-inside m"+name}>
            
           <div className="lb-upper">
            <div className="ut"><div className="logo-text">
                <div className="logo"> <img src={logo}></img> </div>
                <div className="text"> CodeAnt AI</div>
            </div>
            <div className="hamber">
            <Hamburger toggled={isOpen} toggle={setOpen} />
             </div>
             </div>
            
            
            
            <div className={"name-pannel "+name}>
            <form>
              <select name="name" id="name">
                <option value={username}>{newname}</option>
                <option value="guest">GUEST</option>
               </select>
            </form>
            </div>
            <div className={"options "+name}>
            <div className={`repo v1 `+b[0]} onClick={()=>setindex(0)}><img src={homelogo} ></img>Repositories</div>
            <div className={`aicode v1 `+b[1]} onClick={()=>setindex(1)}><img src={codelogo} ></img>AI Code Review</div>
            <div className={`cloud-sec v1 `+b[2]} onClick={()=>setindex(2)}><img src={cloudlogo} ></img>Cloud Security</div>
            <div className={`how-to-use v1 `+b[3]} onClick={()=>setindex(3)}><img src={book} ></img>How to Use</div>
            <div className={`settings v1 `+b[4]} onClick={()=>setindex(4)}><img src={settings} ></img>Settings</div>
            </div>
            
            </div> 
            <div className={"lb-lower "+name}>
                <div className="lc">
                <div className="contact not-sel v1"><img src={phone}></img>Support</div>
                <NavLink to="/signin"><div className="logout not-sel v1"><img src={login}></img>Logout/Signin</div></NavLink>
                </div>
            
            </div>
            
            
            
            
            
            </div>
            </div>
    </>
)
}
export default Leftbanner;
