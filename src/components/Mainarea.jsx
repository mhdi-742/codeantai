import { useEffect, useState } from 'react';
import './ma.css'
import reflogo from '../assets/refbutton.svg'
import db from '../assets/db.svg'
import { AppContext, useGlobalContext } from '../context'
import {useRef } from "react";
const Mainarea=()=>{
    const {index,setindex}=useGlobalContext();
    const searchstring=useRef();
    
    const obj=[{
        user_id:1,
        Repositories:[
            {Name:"A*",
            Tag:"Public",
            Lang:"Java",
            Size:"290",
            Time:"2"},
            {Name:"hello world",
                Tag:"Public",
                Lang:"c++",
                Size:"250",
                Time:"1"},
            {Name:"Tower of Hanoi",
                Tag:"Public",
                Lang:"JavaScript",
                Size:"700",
                Time:"0"},
            {Name:"git-ext",
                Tag:"Private",
                Lang:"Python",
                Size:"22",
                Time:"1"},
            {Name:"gool",
                Tag:"Private",
                Lang:"GO",
                Size:"780",
                Time:"12"}],
        cloudsec:[],
        htu:[],
        aicodereview:[],
        settings:[]
    }];
    const pp=["Repositories","AI Code Review","Cloud Security","How to Use","Settings"];
    
    const[objt,stopbj]=useState(obj);
    //const [pp1,setpp1]=useState([objt[0].Repositories,objt[0].aicodereview,objt[0].cloudsec,objt[0].htu,objt[0].settings]);
    const check =async(value)=>{
        const p=(obj[0].Repositories.filter(ind=>
            ind.Name.includes(value)
        ))
        return p;
    }
    const change= (e)=>{
         e.preventDefault();
         const value=e.target.value;
         const p=obj[0].Repositories.filter(ind=>ind.Name.toLowerCase().includes(value.toLowerCase()))
         //console.log(p);
         stopbj([{
            user_id:1,
            Repositories:p,
            cloudsec:[],
            htu:[],
            aicodereview:[],
            settings:[]
        }]);
        //setpp1([objt[0].Repositories,objt[0].aicodereview,objt[0].cloudsec,objt[0].htu,objt[0].settings]);
        }
if(index==0)
return(
    <>
        <div className="right-banner">
            <div className="total">
            <div className="heading">
                <div className="title">
                     <div className="title-box">
                        <div className="tit">{pp[index]}</div>
                        <div className="info">{obj[0].Repositories.length} total repositories</div>
                     </div>
                     <div className="buttons">
                        <div className="b1"><img src={reflogo} className='iii'></img>Refresh All</div>
                        <div className="b2"> <div className="plus">+</div> Add Repository</div>
                     </div>
                </div>
                <div className="search-container">
                <input ref={searchstring} type="text" placeholder="Search Repositories." className="search-input" onChange={change}/> 
                </div>
            </div>
            <div className="content">
                {objt[0].Repositories.map((curr)=>{
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
else if(index==1)
    return(
<>
        <div className="right-banner">
            <div className="total">
            <div className="heading">
                <div className="title">
                     <div className="title-box">
                        <div className="tit">{pp[index]}</div>
                        <div className="info">{obj[0].aicodereview.length} total aicodereviews</div>
                     </div>
                     <div className="buttons">
                        <div className="b1"><img src={reflogo} className='iii'></img>Refresh All</div>
                        <div className="b2"> <div className="plus">+</div> Add Repository</div>
                     </div>
                </div>
                <div className="search-container">
                <input ref={searchstring} type="text" placeholder="Search Repositories." className="search-input" onChange={change}/> 
                </div>
            </div>
            <div className="content">
                {objt[0].aicodereview.map((curr)=>{
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
if(index==2) return(
    <>
        <div className="right-banner">
            <div className="total">
            <div className="heading">
                <div className="title">
                     <div className="title-box">
                        <div className="tit">{pp[index]}</div>
                        <div className="info">Cloud Security Features</div>
                     </div>
                     <div className="buttons">
                        <div className="b1"><img src={reflogo} className='iii'></img>Refresh All</div>
                        <div className="b2"> <div className="plus">+</div> Add Repository</div>
                     </div>
                </div>
                <div className="search-container">
                <input ref={searchstring} type="text" placeholder="Search Repositories." className="search-input" onChange={change}/> 
                </div>
            </div>
            <div className="content">
                {objt[0].cloudsec.map((curr)=>{
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
if(index==3)
    return(
<>
        <div className="right-banner">
            <div className="total">
            <div className="heading">
                <div className="title">
                     <div className="title-box">
                        <div className="tit">{pp[index]}</div>
                        <div className="info">USE CASES</div>
                     </div>
                     <div className="buttons">
                        <div className="b1"><img src={reflogo} className='iii'></img>Refresh All</div>
                        <div className="b2"> <div className="plus">+</div> Add Repository</div>
                     </div>
                </div>
                <div className="search-container">
                <input ref={searchstring} type="text" placeholder="Search Repositories." className="search-input" onChange={change}/> 
                </div>
            </div>
            <div className="content">
                {objt[0].htu.map((curr)=>{
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
if(index==4)
    return (
<>
        <div className="right-banner">
            <div className="total">
            <div className="heading">
                <div className="title">
                     <div className="title-box">
                        <div className="tit">{pp[index]}</div>
                        <div className="info">all Settings</div>
                     </div>
                     <div className="buttons">
                        <div className="b1"><img src={reflogo} className='iii'></img>Refresh All</div>
                        <div className="b2"> <div className="plus">+</div> Add Repository</div>
                     </div>
                </div>
                <div className="search-container">
                <input ref={searchstring} type="text" placeholder="Search Repositories." className="search-input" onChange={change}/> 
                </div>
            </div>
            <div className="content">
                {objt[0].settings.map((curr)=>{
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
    </>)
}
export default Mainarea;