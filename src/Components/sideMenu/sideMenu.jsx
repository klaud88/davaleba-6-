import React, { useState } from 'react';
import './sideMenu.css'

const SideMenu=()=>{

    const [sideMenu, setSideMenu]=useState("menuHide")
    const handleMenu=()=>{
        sideMenu === "menuHide" ? setSideMenu('menuShow') : setSideMenu("menuHide")
    }   
    return(
        <>     
<div className='sideMenuOrderA'>
    <div className='headerOrderLeft'>
<img onClick={handleMenu}  className='sideMenuIcon2'/><img className='mainlogo'/><span className='mainlogoText'>YouTube </span>  
</div>
<div className='headerOrder'>
<input className='searchInput' type='search'  placeholder='Search'/>
<span className='searchBtn1'><img type='button' className='searchBtn2'/></span>
<span className='mic1'><img className='mic2'/></span>
<span className='videoCall'></span>
<span className='bell'></span>
</div>
</div>
<div className={sideMenu} >
    <nav  className='nav'>
    <a className='sideMenuOrder'> 
        <img className='home'/><span className='sideMenuText'>Home</span>
    </a>
    <a className='sideMenuOrder'>
    <img className='short'/><span className='sideMenuText'>Shorts</span>
    </a>
    <a className='sideMenuOrder'>
        <img className='subs'/><span className='sideMenuText'>Subscriprions</span>
    </a>
    <hr className='line'/>
    <a className='sideMenuOrder'>
    <p className='sideMenuYou'>You &#62;</p>
    </a>
    <a className='sideMenuOrder'>
        <img className='yourchannel'/><span className='sideMenuText'>Your channel</span>
    </a>
    <a className='sideMenuOrder'>
        <img className='history'/><span className='sideMenuText'>History</span>
    </a>
    <hr className='line'/>
    <a className='sideMenuOrder'>
    <p className='sideMenuYou'>Explore</p>
    </a>
    <a className='sideMenuOrder'>
        <img className='trending'/><span className='sideMenuText'>Trending</span>
    </a>
    <a className='sideMenuOrder'>
        <img className='music'/><span className='sideMenuText'>Music</span>
    </a>
    <a className='sideMenuOrder'>
        <img className='gaming'/><span className='sideMenuText'>Gaming</span>
    </a>
    <hr className='line'/>
    <a className='sideMenuOrder'>
        <img className='setting'/><span className='sideMenuText'>Settings</span>
    </a>
    <a className='sideMenuOrder'>
        <img className='help'/><span className='sideMenuText'>Help</span>
    </a>
    <hr className='line'/>
    <div className='links'>
    <a>About</a> <a>Press</a> <a>Copyright</a><br/>
    <a>Contact us</a> <a>Creators</a><br/>
    <a>Advertise</a> <a>Developers</a>
    <br/>
    <br/>
    <a>Terms</a> <a>Privancy</a> <a>Policy & Safety</a>
    <br/>
    <a>How YouTube works</a>
    <br/>
    <a>Test new features</a>
    </div>
    <p className='copyright'>&copy; 2023 Google LLC</p>
    </nav>
</div>
       
        </>
    )
}

export default SideMenu