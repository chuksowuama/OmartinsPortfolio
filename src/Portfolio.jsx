import React, { useEffect, useState } from "react";
import videobg from "./assets/6915808_Motion_Graphics_Motion_Graphic_3840x2160.mp4";
import Navigation from "./COMPONENNTS/Navigation";
import Category from "./COMPONENNTS/Category";
import Herosection from "./COMPONENNTS/Herosection";
import About from "./WebPages/About";
import Resume from "./WebPages/Resume";
import Contact from "./WebPages/Contact";
import { useMediaQuery } from "react-responsive";
import Workd from "./WebPages/Workd";

const Portfolio = () => {
  const[webpage, setwebpage]=useState("About")
  const [theme, SetTheme] = useState(true);
  const mobile = useMediaQuery({ query: "(min-width:275px)" });
   const tablet = useMediaQuery({ query: "(min-width:635px)" });
   const laptop = useMediaQuery({ query: "(min-width:1200px)" });

  function handlecategoryClick(title){
    if(laptop){
      setwebpage(title)
    }else{
      const section= document.getElementById(title)
      if(section){
        section.scrollIntoView({behavior:"smooth"})
      }
    }
  }

  return (
    <>
      <div className={`relative h-screen w-full lg:overflow-hidden`}>
        <video
          src={videobg}
          autoPlay
          muted
          loop
          playsInline
          className="absolute w-full h-full object-cover top-0 left-0 filter brightness-30"
          type="video/mp4"
        ></video>
        
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative lg:flex justify-center items-center z-40 w-full h-screen md:px-10">
          <section className="relative flex sm:flex-col md:flex-row gap-2 md:p-10 lg:p-0">
            <nav className="sm:bg-primary md:bg-transparent flex flex-col justify-center md:gap-3 item-center sm:z-50 sm:fixed sm:top-0 sm:left-0 sm:w-full lg:static md:w-18 md:top-10 md:left-1 lg:top-0 lg:left-0">
              <Navigation/>
              <Category onpage={handlecategoryClick} />
            </nav>
            {
               laptop?<main className="lg:grid lg:grid-cols-5 not-last-of-type:lg:ml-0">
              <div className="lg:col-span-2 lg:transform scale-y-103 ">
                <Herosection/>
              </div>
              <div className="lg:col-span-3 bg-primary overflow-y-scroll h-[85vh] custom-scrollbar">
               {webpage==="About" && <About/>}
                {webpage==="Resume" && <Resume/>}
                 {webpage==="Contact" && <Contact/>} 
                 {webpage==="Works" && <Workd/>} 
              </div>
            </main>:
              <main className="sm:mt-33 md:mt-0 sm:w-full md:ml-5 ">
              <div className="">
                 <section id="Home"><Herosection/></section>
                 <section id="About"><About/></section>
                 <section id="Resume"><Resume/></section>
                 <section id="Works"><Workd/></section>
                 <section id="Contact"><Contact/></section>
              </div>
            </main>
            }
          </section>
        </div>
      </div>
    </>
  );
};

export default Portfolio;
