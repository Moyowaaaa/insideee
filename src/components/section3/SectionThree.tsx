import gsap from 'gsap'
import React, { useEffect, useRef, useState } from 'react'
import './SectionThree.scss'
import scrollTrigger from 'gsap'
import useIntersectionObserver from '../../hooks/useIntersectionObserver'
gsap.registerPlugin(scrollTrigger)

const SectionThree = () => {

const pageRef = useRef<HTMLDivElement | null>(null)
const boxContainerRef = useRef<HTMLDivElement | null>(null)
const boxRef1 = useRef<HTMLDivElement | null>(null)
const boxRef2 = useRef<HTMLDivElement | null>(null)
const boxRef3 = useRef<HTMLDivElement | null>(null)

const [isVisible,setIsVisible] = useState(false)
const [reveal, setReveal] = useState(false);
// const onScreen = useIntersectionObserver(pageRef,0.1)


// useEffect(() => {
//   if (onScreen) setReveal(onScreen)
  
//   console.log(onScreen)
 
// }, [onScreen])



useEffect(() => {
  const ctx = gsap.context(() => {
    const sectionThreeTl = gsap.timeline({
      scrollTrigger:{
        trigger: pageRef.current,
        start: "top center",
      end: "top +=10",
      // markers:true,
      scrub: 0.7,
      }
    })
    sectionThreeTl.fromTo(boxRef1.current,{opacity:0},{ y: 0, opacity: 1, duration:1.5, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", ease:"power3.inOut" },'<0.1')


    return () => ctx.revert();
  })
})
   


  return (
    <div className='sectionThree' data-scroll-section data-scroll-direction="horizontal" ref={pageRef}>SectionThree

<div className='sectionThree-box__box1 box' ref={boxRef1}></div>
    

    </div>
  )
}

export default SectionThree