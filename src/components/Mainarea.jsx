import { useEffect, useState } from 'react';
import  {useRef} from'react'
import './ma.css'
import reflogo from '../assets/refbutton.svg'
import db from '../assets/db.svg'
const Mainarea=()=>{
    const searchstring=useRef();
    const obj=[{
        user_id:1,
        repo:[
            {Name:"hello world",
            Tag:"public",
            Lang:"c++",
            Size:"250",
            Time:"1"},
            {Name:"hello world",
                Tag:"public",
                Lang:"c++",
                Size:"250",
                Time:"1"},
            {Name:"hello world",
                Tag:"Public",
                Lang:"c++",
                Size:"250",
                Time:"1"},
            {Name:"hello world",
                Tag:"public",
                Lang:"c++",
                Size:"250",
                Time:"1"},
            {Name:"hello world",
                Tag:"public",
                Lang:"c++",
                Size:"250",
                Time:"1"}],
        aicodereview:[{}],
        settings:[{}]
    }];
    const[objt,stopbj]=useState(obj);
    const check =async(value)=>{
        const p=(obj[0].repo.filter(ind=>
            ind.Name.includes(value)
        ))
        return p;
    }
    const change= (e)=>{
         e.preventDefault();
         const value=e.target.value;
         const p=obj[0].repo.filter(ind=>ind.Name.toLowerCase().includes(value.toLowerCase()))
         //console.log(p);
         stopbj([{
            user_id:1,
            repo:p,
            aicodereview:[{}],
            settings:[{}]
        }]);
        }
return(
    <>
        <div className="right-banner">
            <div className="total">
            <div className="heading">
                <div className="title">
                     <div className="title-box">
                        <div className="tit">Repositories</div>
                        <div className="info">33 total repositories</div>
                     </div>
                     <div className="buttons">
                        <div className="b1"><img src={reflogo}></img>Refresh All</div>
                        <div className="b2"> <div className="plus">+</div> Add Repository</div>
                     </div>
                </div>
                <div className="search-container">
                <input ref={searchstring} type="text" placeholder="Search..." className="search-input" onChange={change}/> 
                </div>
            </div>
            <div className="content">
                {objt[0].repo.map((curr)=>{
                    return(
                    <div className="card">
                         <div className="upper">
                            <div className="title2">{curr.Name}</div>
                            <div className="tag">{curr.Tag}</div>
                         </div>
                         <div className="lower">
                            <div className="lang">{curr.Lang} <div className="dot">&#128309;</div>
                            </div>
                            <div className="size"><img src={db}></img>{curr.Size}KB</div>
                            <div className="time">updated {curr.Time} days ago</div>
                         </div>
                    </div>)
                })}
            </div>
            </div>
            
        </div>
    </>
)
}
export default Mainarea;