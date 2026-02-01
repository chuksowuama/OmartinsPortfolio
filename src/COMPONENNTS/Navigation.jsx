import React, { useEffect, useState } from "react";
import profileImage from '../assets/IMG_E0712.JPG';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase';
const PORTFOLIOID="tK6b1sApDYThYpar7EwbIE3EtoB3";

const Navigation = ({openTheNav, navTheme, ChangeTheme}) => {
const[displayDetails,setDisplayDetails]=useState(null)
        useEffect(()=>{
         async function fetchDetails(){
          try {
            const detailsData= doc(db,"users",PORTFOLIOID,"details","PortfolioDetails")
            const detailsSnap= await getDoc(detailsData)
            if(detailsSnap.exists()){
             setDisplayDetails(detailsSnap.data())
            }
          } catch (error) {
             console.log("error fetching details",error)
          }
         }
         fetchDetails()
     },[])
     
  return (
    <>
      <div className={`${navTheme==="light"?"bg-secondary text-primary":"bg-primary text-secondary"} px-2 mb-1 flex sm:flex-row md:flex-col sm:justify-between md:items-center  sm:py-3.5 md:py-5 sm:border-b border-neutral-700 `}>
        {
        displayDetails && <div className="flex lg:justify-center gap-1 md:hidden">
        <img src={displayDetails.profilePic} alt="" className='w-14 h-14 rounded-full shadow-lg' />
        <div>
        <h2 className='textbody font-bold'>{displayDetails.ProfileName}</h2>
        <p className='text-sm'>{displayDetails.occupation}</p>
        </div>
        </div>
        }
        <div className="flex md:flex-col-reverse sm:flex-row gap-5.5 sm:text-2xl md:text-2xl">
            <i class="fa-solid fa-sun button" onClick={ChangeTheme}></i>
            <i class="fa-solid fa-bars button" onClick={openTheNav}></i>
        </div>
      </div>
    </>
  );
};

export default Navigation;
 <div className="flex lg:justify-center gap-1.5 md:hidden">
          <img src={profileImage} alt="" className="w-12 h-12 rounded-full" />
          <div>
            <h1>Martins Owuama</h1>
            <p>Frontend developer</p>
          </div>
        </div>