import React from 'react'
import "./Home.css";
import {Link} from "react-router-dom";
import { TypeAnimation } from 'react-type-animation';
function Home() {
  const movetogithub=()=>{
    // window.location.href=props.link;
    window.open('https://github.com/1ntrested','_blank');
  }
  const movetoLinkedin=()=>{
    // window.location.href=props.link;
    window.open('https://www.linkedin.com/in/balraj-singh-06b34326b/','_blank');
  }
  const movetoX=()=>{
    // window.location.href=props.link;
    window.open('https://twitter.com/ibalraj12/','_blank');
  }
  return (
    <div className='content'>
        <div className="class-img">
            <img  className="image"  src="" alt=''></img>
        </div>
        <div className="class-content">
            <h1 className='lists'>welcome start learning<span id='name' className='lists'><TypeAnimation sequence={[``,1000,""]} speed={20}  style={{whiteSpace:'pre-line'}} repeat={Infinity}/></span></h1>
            <h2 className='lists'>Start Learn</h2>
            <ul>
        </ul>
        </div>
    </div>
  )
}

export default Home