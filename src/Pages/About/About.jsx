import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useState } from "react";
import { ButtonAbout } from "../../components/Button";
import { FirstAboutCard } from "../../components/AboutCard";
import { SecondAboutCard } from "../../components/AboutCard";


export default function About(){

    const [showFirstData , setFirstData] = useState(false);
    const [showSecondData , setSecondData] = useState(false);


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
        <div className="text-white h-screen mt-10 flex-col relative">
            <div className="flex items-center justify-center">
                <div className="bg-[url('/images/wood-bg.png')] bg-contain bg-center w-fit h-fit bg-no-repeat hover:opacity-80 cursor-pointer">
                <h1 className="text-[2rem] p-6">About Me</h1>
                </div>
            </div>
            <div className="h-[29rem] w-full bg-[url('/images/bg-about.jpg')] bg-contain bg-center rounded-2xl">
            {showFirstData && (
                <FirstAboutCard/>
            )}
            {showSecondData && (
                <SecondAboutCard/>
            )}
            </div>
        <div className="flex flex-row gap-10 bottom-20 absolute left-1/2 -translate-x-1/2">
                    <ButtonAbout
                   image={"/images/Left.png"}
                   onAction={() => {setFirstData(true);  setSecondData(false);}}
                   />
                   <ButtonAbout
                   image={"/images/Right.png"}
                   onAction={() => {setSecondData(true); setFirstData(false);}}
                   />
                </div>
        </div>
    );
}