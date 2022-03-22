import React from 'react';
import { useEffect } from 'react';
import {gsap} from 'gsap';
import {ScrollTrigger} from 'gsap/ScrollTrigger'

function FirstBox(){
    return(
        <>
        <div className='box'>
            <img src={"https://freesvg.org/img/pointing_hand.png"} alt="pointer"/>
        </div>

        <div className='box2'>
            <img src={"https://freesvg.org/img/drawn_womans_face_002.png" } alt="Woman"/>
        </div>

        <div className='box3'>
            <img src={"https://freesvg.org/img/Unknown-Black.png"} alt="Man"/>
        </div>

        <div className='box4'>
            <img src={"https://freesvg.org/img/tonlima_Olho_Azul_Blue_Eye.png"} alt="Eye"/>
        </div>

        </>
        
    )
}




function Animation(){

    gsap.registerPlugin(ScrollTrigger)

    useEffect(()=>{
        gsap.fromTo(
            '.box', {rotation: 0},{rotation: 45,  scrollTrigger:{
                start: "top center",
                end: "bottom center",
                scrub:true, 
                duration:4,
                trigger: ".box",
                x:400,
                markers:true
            }}
            
            )
    

    gsap.fromTo(
        '.box2', {rotation: 0},{rotation: 45,  scrollTrigger:{
            start: "top center",
            end: "bottom center",
            scrub:true, 
            duration:4,
            trigger: ".box2",
            x:400,
            markers:true
        }}
        
        )

        gsap.fromTo(
            '.box4', {opacity: 0},{opacity: 100,  scrollTrigger:{
                start: "top center",
                end: "+=300",
                scrub:true, 
                duration:4,
                trigger: ".box4",
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