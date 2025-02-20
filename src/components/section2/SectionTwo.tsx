import React, { useEffect, useRef } from 'react'
// import 'sectionTwo.scss'
import './SectionTwo.scss'
import { gsap } from "gsap";
import ScrollTrigger from 'gsap';
import useIntersectionObserver from '../../hooks/useIntersectionObserver';
gsap.registerPlugin(ScrollTrigger)



const SectionTwo = () => {
  const pageRef = useRef<HTMLDivElement | null>(null)
  

  // const isIntersecting = useIntersectionObserver(pageRef,0.1)
  // console.log(isIntersecting)


  // useEffect(() => {
  //      const sectionTwoTl = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: pageRef.current,
  //       start: "top center",
  //     end: "top +=10",
  //     // markers:true,
  //     scrub: 0.7,
  //     },
  //   })

  //   sectionTwoTl.from('#box', {
  //     y:200,
  //     opacity:0,
  //     ease:"power3.inOut",
  //     duration:2.1
  //   })
    
  // })

  


  useEffect(() => {
    console.log('current',pageRef.current)
    const ctx = gsap.context(() => {
    const sectionTwoTl = gsap.timeline({
      scrollTrigger: {
        trigger: pageRef.current,
        start: "top center",
      end: "top +=10",
      // markers:true,
      scrub: 0.7,
      },
    })
     sectionTwoTl.to(pageRef.current, {
      backgroundColor: 'purple',
      duration:1.2,
      color:'white',
      ease:"power4.inOut"
    }).fromTo('.title',{opacity:0},{ y: 0, opacity: 1, duration:1.5, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)" },'<0.1')
    .from('.box1',{y:200,opacity:0,ease:"power3.inOut",duration:1.2})

    sectionTwoTl.fromTo('#box',{opacity:0},{ y: 0, opacity: 1, duration:1.5, clipPath: "polygon(0 100%, 100% 100%, 100% 0, 0 0)", ease:"power3.inOut" },'<0.1')

    return () => ctx.revert();

    
  })
  })


  return (
    <div className='sectionTwo'  data-scroll-section data-scroll ref={pageRef}>
      
      <p className='title'>SectionTwo</p>


      <div className='sectionTwo-box-container'>
      <div className='sectionTwo-box-container__box1 box1' id="box"></div>
      </div>


      </div>
  )
}

export default SectionTwo