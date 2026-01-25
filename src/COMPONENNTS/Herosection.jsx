import React from "react";
import profileimg from "../assets/IMG_E0712.JPG";
import CV from "../assets/MAlN Chukwuweikem Owuama General CV.pdf"
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade,Pagination,Autoplay  } from "swiper/modules";
import heroimg1 from "../assets/Greenlife.png"
import heroimg2 from "../assets/Cinemax.png"
import heroimg3 from "../assets/HouseMe.png"
import heroimg4 from "../assets/NaijaWings.png"
import heroimg5 from "../assets/ShopZone.png"
import heroimg6 from "../assets/AnglicanModal.png"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Link } from "react-router-dom";

const heroimg=[heroimg1,heroimg2,heroimg3,heroimg4,heroimg5,heroimg6]


const Herosection = ({ heroTheme }) => {
  return (
    <>
      <div className={` h-full ${heroTheme==="light"?"bg-secondary text-primary lg:shadow-md lg:shadow-zinc-700":"bg-primary text-secondary lg:shadow-md lg:shadow-zinc-100"}`}>
        <div className="relative h-90 ">
        <Swiper
        spaceBetween={30}
        autoplay={{ delay: 10000 }}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[EffectFade, Pagination,Autoplay]}
        className="w-full h-full"
      >
        {
          heroimg.length && heroimg.map(imgsrc=>(
        <SwiperSlide>
          <img src={imgsrc} className="w-full h-full object-fit" />
        </SwiperSlide>
          ))
        }
      </Swiper>
          {/* <img src={heroimg} alt="" className="w-full h-full object-cover" /> */}
          <div className={`absolute bottom-0 w-full h-15 ${heroTheme==="light"?"bg-secondary":"bg-primary"} rounded-t-full p-10 z-30 dark:bg-primary dark:text-secondary`}></div>
          <img src={profileimg} alt="" className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-30 h-30 z-40 rounded-full object-cover shadow-neutral-400" />
        </div>
          <div className="text-center space-y-3 pt-1">
            <h1 className="smallHeader">Martins Owuama</h1>
          <p className="textbody textbody">Front end developer</p>
          <span className="flex gap-4.5 [&>a]:button text-center  justify-center [&>a>i]:text-3xl border-neutral-700 pb-1.5">
            <a href="https://web.facebook.com/chuks.owuama.2025" target="blanck"><i class="fa-brands fa-facebook"></i></a>
            <a href="https://www.instagram.com/owumar8/" target="blanck"><i class="fa-brands fa-instagram"></i></a>
            <a href="https://x.com/ChuksOwuama" target="blanck"><i class="fa-brands fa-x-twitter"></i></a>
            <a href="https://www.linkedin.com/in/owuama-chuks-588b90344/" target="blanck"><i class="fa-brands fa-linkedin-in"></i></a>
          </span>
          <div className="flex divide-x divide-neutral-700 items-center pt-1">
          <a href={CV} download className="button w-1/2 h-15 flex items-center justify-center gap-2 textbody font-serif"><i class="fa-solid fa-download"></i> Download CV</a>
          <button className="button w-1/2 h-15 flex items-center justify-center gap-2 textbody font-serif"><i class="fa-solid fa-location-dot "></i> Contact me</button>
          {/* <Link to={"/login"}><button className="button"><i class="fa-solid fa-location-dot"></i> Contact me</button></Link> */}
        </div>
          </div>
      </div>
    </>
  );
};

export default Herosection;



      
 
 