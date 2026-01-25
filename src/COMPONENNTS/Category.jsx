import React from 'react'
import { Navdata } from '../assets/Data'

const Category = ({onpage,cateTheme}) => {
   return (
   <>
   <div className={`${cateTheme==="light"?"bg-secondary text-primary":"bg-primary text-secondary"} bg:primary flex md:flex-col md:items-center overflow-x-auto overflow-y-hidden  md:overflow-x-hidden sm:py-1 divide divide-x divide-neutral-700  md:divide-x-0 md:divide-y custom-scrollbar `}>
    {
      Navdata && Navdata.map((cate)=>(
                <div id={cate.id} className='flex md:flex-col  items-center gap-0.5 sm:w-25 md:w-20 sm:p-2 lg:p-2 button' onClick={()=>onpage(cate.title)}> 
                    <i className={`fa-solid ${cate.icon} sm:text-3xl  md:text-2xl`}></i>
                    <span>{cate.title}</span>
            </div>
      ))
    }
   </div>
   </>
   )
}

export default Category
