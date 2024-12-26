import React, { useState } from 'react'
import './signin.css'
import antlogo from '../assets/biglogo.svg'
import logo from '../assets/logo.svg'
import pie from '../assets/pie.svg'
import azure from '../assets/azure.svg'
import github from '../assets/github.svg'
import gitlab from '../assets/gitlab.svg'
import sso from '../assets/sso.svg'
import arrow from '../assets/arrow.svg'
import bigbucket from '../assets/bigbucket.svg'
import { NavLink } from 'react-router-dom'
export default function Signin() {
    const [one,setone]=useState(0);
    const cont=[[{img:github,text:"Sign in with Github"},{img:bigbucket,text:"Sign in with Bitbucket"},{img:azure,text:"Sign in with Azure Devops"},{img:gitlab,text:"Sign in with GitLab"}],[{img:gitlab,text:"Sign in with GitLab"},{img:sso,text:"Sign in with SSO"}]]
  return (
    <div className='full'>
        <div className="left">
            <div className="upper1">
                <div className="stats">
                    <div className="up"><img src={logo}></img>AI to Detect & Autofix Bad Code</div>
                    <hr></hr>
                    <div className="down">
                        <div className="d1">
                            <div className="d11">30+</div>
                            <div className="d12">Language Support</div>
                        </div>
                        <div className="d1">
                        <div className="d11">10K+</div>
                        <div className="d12">Devlopers</div>
                        </div>
                        <div className="d1">
                        <div className="d11">100K+</div>
                        <div className="d12">Hours Saved</div>
                        </div>
                    </div>
                </div>
                <div className="other">
                    <div className="up1">
                        <div className="left1">
                            <div className="l1"><img src={pie}></img></div>
                            <div className="l2"><div className="l11"> <img src={arrow}></img>14%</div>
                            <div className="l12">This Week</div></div>
                        </div>
                    </div>
                    <div className="down1">
                    <div className="l2"><div className="l15"> Issues Found</div>
                    <div className="l123">500K+</div></div>
                    </div>
                </div>
            </div>
            <div className="lower">
                <div className="img">
                    <img src={antlogo}></img>
                </div>
            </div>
        </div>
        <div className="right">
               <div className="big">
                <div className="s1">
                  <div className="s11"><div className="ut">
                     <NavLink to="/"><div className="logo-text2">
                                  <div className="logo2"> <img src={logo}></img> </div>
                                  <div className="text2
                                  "> CodeAnt AI</div>
                              </div></NavLink></div></div>
                  <div className="s12">Welcome to CodeAnt AI</div>
                  <div className="s13">
                    <div className={"s131 ss1"+one} onClick={()=>{setone(0)}}>
                          SAAS
                    </div>
                    <div className={"s132 ss2"+one} onClick={()=>{setone(1)}}>
                        Self-Hosted
                    </div>
                  </div>
                </div>
                    
                <div className="s2">
                  {
                    cont[one].map((ind)=>{
                        return(
                            <div className="s21">
                                <img src={ind.img}></img>
                                <div className="tex">{ind.text}</div>
                            </div>
                        )
                    })
                  }
                </div>
            
                </div>     
                <div className="not">By signing up you agree to the <b>Privacy Policy</b>.</div>  
        </div>  
          
    </div>
  )
}
