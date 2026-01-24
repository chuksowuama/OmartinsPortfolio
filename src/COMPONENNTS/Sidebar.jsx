import React from 'react'

const Sidebar = ({closeNav}) => {
  return (
    <>
    <div className='absolute top-0 left-0 slideinNav z-50 h-dvh w-1/2 bg-primary '>
     <i class="fa-solid fa-xmark" onClick={closeNav}></i>
       hello
    </div>
    </>
  )
}

export default Sidebar
