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
import Sidebar from "./COMPONENNTS/Sidebar";
import Product from "./WebPages/Product";
import Blog from "./WebPages/Blog";

const Portfolio = () => {
  const[webpage, setwebpage]=useState("About")
  const [theme, SetTheme] = useState("light");
  const mobile = useMediaQuery({ query: "(min-width:275px)" });
   const tablet = useMediaQuery({ query: "(min-width:635px)" });
   const laptop = useMediaQuery({ query: "(min-width:1200px)" });
   const[navControl,setNavControl]=useState(false)

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

  function openNav(){{
    setNavControl(true)
  }}

  function closeNav(){
    setNavControl(false)
  }

  function ChangeTheme(){
    const newTheme= theme==="light"?"dark":"light"
    SetTheme(newTheme)
    document.documentElement.classList.toggle("dark",newTheme==="dark")
  }

 

  return (
    <>
      <div className={`relative min-h-screen w-full lg:overflow-hidden`}>
        <video
          src={videobg}
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover filter brightness-30"
          type="video/mp4"
        ></video>
        
        <div className="absolute inset-0 bg-black/60"></div>

        <div className="relative lg:flex justify-center items-center z-40 w-full min-h-screen md:px-10 sm:pl:2 lg:pl-6">
          <section className="relative flex sm:flex-col md:flex-row gap-2 md:p-10 lg:p-0">
            <nav className="sm:bg-primary md:bg-transparent flex flex-col justify-center md:gap-3 item-center sm:z-50 sm:fixed sm:top-0 sm:left-0 sm:w-full lg:static md:w-18 md:top-10 md:left-1 lg:top-0 lg:left-0">
              <Navigation openTheNav={openNav} navTheme={theme} ChangeTheme={ChangeTheme}/>
              <Category onpage={handlecategoryClick} cateTheme={theme}/>
            </nav>
            {
               laptop?<main className="lg:grid lg:grid-cols-5 not-last-of-type:lg:ml-0">
              <div className="lg:col-span-2 lg:transform scale-y-103 ">
                <Herosection heroTheme={theme} onpage={handlecategoryClick}/>
              </div>
              <div className="lg:col-span-3 bg-primary overflow-y-scroll h-[85vh] custom-scrollbar">
               {webpage==="About" && <About aboutTheme={theme}/>}
                {webpage==="Resume" && <Resume resumeTheme={theme}/>}
                 {webpage==="Contact" && <Contact contactTheme={theme} />} 
                 {webpage==="Works" && <Workd workTheme={theme} />} 
                 {webpage==="Blog" && <Blog/>} 
                 {webpage==="Product" && <Product/>} 
              </div>
            </main>:
              <main className="sm:mt-33 md:mt-0 sm:w-full md:ml-5 ">
              <div className="">
                 <section id="Home"><Herosection onpage={handlecategoryClick} heroTheme={theme} /></section>
                 <section id="About"><About aboutTheme={theme} /></section>
                 <section id="Resume"><Resume resumeTheme={theme}/></section>
                 <section id="Works"><Workd workTheme={theme}/></section>
                 <section id="Contact"> <Contact contactTheme={theme} /> </section>
                 {/* <section id="Product"> <Product /> </section>
                 <section id="Blog"> <Blog /> </section> */}
              </div>
            </main>
            }
          </section>
        </div>
      </div>
      {
        navControl && <Sidebar closeTheNav={closeNav} slideNavTheme={theme} onpage={handlecategoryClick}/>
      }
    </>
  );
};

export default Portfolio;
