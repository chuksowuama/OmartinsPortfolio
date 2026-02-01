import React, { useEffect, useState } from 'react'
import Accordion from './Accordion'
import { socialMedia } from '../assets/Data'
import Blogcards from './Blogcards'
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../Firebase';
import { useSelector } from 'react-redux';
const PORTFOLIOID="tK6b1sApDYThYpar7EwbIE3EtoB3";

const Sidebar = ({closeTheNav,slideNavTheme,onpage}) => {
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
      {/* Sidebar */}
      <div className={`fixed top-0 left-0 h-screen w-72 z-50 shadow-lg slideinNav overflow-x-scroll custom-scrollbar
        ${slideNavTheme==="light"?"bg-secondary text-primary shadow-primary bg:darkmode":"bg-primary text-secondary shadow-secondary"} `}>
        <div className="p-6 flex flex-col justify-between h-full">

          {/* Top Section */}
          <div>
            {/* Header */}

             {
              displayDetails && <div className='flex gap-1.5 items-center mb-4'>
              <img src={displayDetails.profilePic} alt="" className='w-14 h-14 rounded-full shadow-lg' />
              <div>
                <h2 className='textbody font-bold'>{displayDetails.ProfileName}</h2>
                <p className='text-sm'>{displayDetails.occupation}</p>
              </div>
             </div>
             }

            <div className="my-4 border-b border-gray-300 dark:border-gray-700"></div>

            {/* Nav Links */}
            
            <nav className="flex flex-col gap-4 text-lg font-medium">
              <a href="/" className="hover:text-yellow-500 transition">Home</a>
               <Accordion/>
            </nav>
            <div className="my-2 border-b border-gray-300 dark:border-gray-700"></div>
          </div>
          {/*Blog post*/}
            <div>
              <h2 className="smallHeader font-bold mb-1">Recent Blogs</h2>
              {
                <Blogcards item={""}/>
              }
            </div>

          {/* Bottom Section */}
          <div>
            {/* Socials */}
            <div className="flex gap-4 mb-4 text-xl">
            {socialMedia.map(item=>( <a href={item.link} > <i className={`${item.icon}`}></i> </a> ))}
            </div>

            {/* Button */}
            <button className="w-full py-2 border border-tertiary text-tertiary rounded
             hover:bg-yellow-500 hover:text-primary transition" onClick={()=>onpage("Contact")}>
              Contact Me
            </button>
          </div>
        </div>

        {/* Close Button */}
        <button
          onClick={closeTheNav}
          className="absolute top-4 right-4 text-xl cursor-pointer"
        >
          ✕
        </button>
      </div>
    </>
  )
}

export default Sidebar


            // <div>
            //   <h3 className="text-sm uppercase tracking-wide  mb-2">
            //     Core Skills
            //   </h3>
            //   <div className="flex flex-wrap gap-2">
            //     <span className="px-3 py-1 text-sm border rounded-full border-gray-400 dark:border-gray-600">
            //       React
            //     </span>
            //     <span className="px-3 py-1 text-sm border rounded-full border-gray-400 dark:border-gray-600">
            //       Firebase
            //     </span>
            //     <span className="px-3 py-1 text-sm border rounded-full border-gray-400 dark:border-gray-600">
            //       Tailwind
            //     </span>
            //   </div>
            // </div>