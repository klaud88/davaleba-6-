import React, { useEffect, useState } from 'react';
import './wall.css';

const Wall=()=>{

const [like, setLike]=useState(0)
const [deslike, setDeslike]=useState("deslikeIcon")

 const handleLike=()=>{
    setLike(like+1)
}
useEffect(()=>{
    like > 1 ? setDeslike('deslikeIcon') : setDeslike("deslikeIconFocus")
},[like])


console.log(deslike)
    return(
     <>
        <div className='bottomIcons'> 
        <iframe className='youTubeVideo'  
        src="https://www.youtube.com/embed/V5DABZ5MPqQ?si=fVn9gOw79XFcH5Hh" 
        title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <h3 className='videoTitle'>BMW XM - ექსკლუზივი!!! დეტალური განხილვა</h3>
        <div className='orderLogoUsername'><img className='videoLogo'/><span className='userName'>Nika's Autoblog <br/>
        <span className='subscribesCount' >subscribers</span></span><button className='subscribeBtn'>Subscribe</button>
        <div className='iconsOrder'>
        <span className='likeIconBorder'><button type='button' onClick={handleLike} className='likeIcon'></button>{like}</span>
        <span className='deslikeIconBorder'><button type="button" onClick={()=> setDeslike("deslikeIconFocus")} className={deslike}></button></span>
        <button  className='share'><span className='shareIcon'></span>Share</button>
        <span className='dots'></span>
        </div>
        </div>
        </div>
        <div className='bottomOrder'>
        <iframe className='bottomyouTubeVideo'  
        src="https://www.youtube.com/embed/V5DABZ5MPqQ?si=fVn9gOw79XFcH5Hh" 
        title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <span className='bottomvideoTitle'>BMW XM - ექსკლუზივი!!! დეტალური განხილვა</span>
        </div>
        <div className='bottomOrder'>
        <iframe className='bottomyouTubeVideo'  
        src="https://www.youtube.com/embed/V5DABZ5MPqQ?si=fVn9gOw79XFcH5Hh" 
        title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <span className='bottomvideoTitle'>BMW XM - ექსკლუზივი!!! დეტალური განხილვა</span>
        </div>
        <div className='bottomOrder'>
        <iframe className='bottomyouTubeVideo'  
        src="https://www.youtube.com/embed/V5DABZ5MPqQ?si=fVn9gOw79XFcH5Hh" 
        title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <span className='bottomvideoTitle'>BMW XM - ექსკლუზივი!!! დეტალური განხილვა</span>
        </div>
        <div className='bottomOrder'>
        <iframe className='bottomyouTubeVideo'  
        src="https://www.youtube.com/embed/V5DABZ5MPqQ?si=fVn9gOw79XFcH5Hh" 
        title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <span className='bottomvideoTitle'>BMW XM - ექსკლუზივი!!! დეტალური განხილვა</span>
        </div>
        <div className='bottomOrder'>
        <iframe className='bottomyouTubeVideo'  
        src="https://www.youtube.com/embed/V5DABZ5MPqQ?si=fVn9gOw79XFcH5Hh" 
        title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
        <span className='bottomvideoTitle'>BMW XM - ექსკლუზივი!!! დეტალური განხილვა</span>
        </div>
     </>
    )
}
export default Wall