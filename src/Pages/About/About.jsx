import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect } from "react";


export default function About(){


    // useEffect(() => {
    // gsap.registerPlugin(ScrollTrigger);
    // gsap.set("body", { overflowX: "hidden" });
    //   const tl = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: "#paperplane",
    //       endTrigger: "#home",
    //       start: "-630% 10%",
    //       end: "200% 50%",
    //       scrub: 0.1,
    //     },
    //   });
    //   tl.to("#paperplane", { x: 100, y: -100, rotate: 40 }).to("#paperplane", {
    //     x: 1600,
    //     y: -100,
    //   });
    // });

    return(
        <div className="text-white h-screen mt-10">
            {/* <img 
            id="pigeon"
            src="/images/pigeon_no_bg.gif"
            /> */}
            {/* <h1>About</h1>
             <p className='font-opensans font-bold text-[16px]'>My name is I Made Kaluna Gadyanga, a 22-year-old student from Bali, Indonesia. I am currently pursuing a degree in Information Technology at university, with an expected graduation in 2026. I am an aspiring full-stack developer with a strong passion for building efficient, user-friendly, and scalable web applications. I am continuously learning and improving my skills in both front-end and back-end development, aiming to become a professional in the tech industry and contribute to innovative digital solutions.</p> */}
            <div className="flex flex-col items-center justify-center">
                <div className="bg-[url('/images/wood-bg.png')] bg-contain bg-center w-fit h-fit bg-no-repeat">
                <h1 className="text-[2rem] p-6" >About Me</h1>
                </div>
            </div>

        </div>
    );
}