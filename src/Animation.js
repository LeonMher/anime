import React from 'react';
import { useEffect } from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

function FirstBox(){
    return(
        <div className='box'>

        </div>
    )
}




function Animation(){

    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{
        gsap.fromTo(
            '.box', {rotation: 0},{rotation: 360,  scrollTrigger:{
                start: "top center",
                end: "bottom center",
                scrub:true,
                duration:4,
                trigger: ".box",
                x:400,
                markers:true
            }}
            
            )
    },[])

    return(
        <>
            <h1>Animation</h1>
            <FirstBox />

        </>
    )
}

export default Animation