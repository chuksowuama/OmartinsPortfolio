import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
// import { AccordData } from '../assets/Data'

const Accordion = () => {
     const Newproject=useSelector((state)=>state.stored.workStored)
    const[openAccord,setOpenAccord]=useState(null)
     const[displayProj,setdisplayProj]=useState(null)


     useEffect(()=>{
        const projData=Newproject.length-1
        setdisplayProj(Newproject[projData])
     },[Newproject])
     
    function OpenTheAccord(id){
        if(openAccord===id){
           setOpenAccord(null)
        }else{
            setOpenAccord(id)
        }
    }
  return (
    <>
         <div className='cursor-pointer w-full'>
         <div onClick={()=>OpenTheAccord(displayProj?.id)}> 
            <span className='py-2 hover:text-tertiary'>New Project</span> 
         <ul  className={`${openAccord===displayProj?.id?"max-h-40":"max-h-0"} transition-all duration-500 ease-in-out overflow-hidden`}>
                <a href={displayProj?.projectURL} target='blank' rel="noreferrer">
                    <li className=' p-2 flex gap-2 items-center justify-between'>
                    <span>{displayProj?.projectTitle}</span> <img src={displayProj?.projectimg} alt="" className='w-5 h-5 ' />
                </li>
                </a>
            </ul>
         </div>
     </div>
    </>
  )
}

export default Accordion
