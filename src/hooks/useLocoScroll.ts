import { useEffect } from "react";
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/src/locomotive-scroll.scss";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger)


export default function useLocoScroll() {
   useEffect(() => {
    let locoScroll = new LocomotiveScroll({
        el: document.querySelector("#main-container"),
        smooth: true
      });
      // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
      locoScroll.on("scroll", ScrollTrigger.update);
      
      // tell ScrollTrigger to use these proxy methods for the "#main-container" element since Locomotive Scroll is hijacking things
      ScrollTrigger.scrollerProxy("#main-container", {
        scrollTop(value) {
          return arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.y;
        }, // we don't have to define a scrollLeft because we're only scrolling vertically.
        scrollLeft(value) {
            arguments.length ? locoScroll.scrollTo(value, {duration: 0, disableLerp: true}) : locoScroll.scroll.instance.scroll.x;
        },
        getBoundingClientRect() {
          return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
        },
        // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
        // pinType: document.querySelector("#main-container").style.transform ? "transform" : "fixed"
      });
      
      // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
      ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
      
      ScrollTrigger.defaults({ scroller: "#main-container" });
      
      ScrollTrigger.refresh();


      return() => {
        // if(locoScroll) {
            ScrollTrigger.removeEventListener("refresh", () => locoScroll.update());
            // locoScroll.destroy();
            // locoScroll = null;
            // console.log("Kill", locoScroll);
        // }
      }
   },[])
}