import React, { ReactElement , useState } from 'react'
import oval from "../assets/Oval.svg"


interface Props {
    onClick: () => void;
    
}


function MobileNavbar({ onClick }: Props): ReactElement {
   
    
    return (
        <div className='z-50  flex items-center fixed top-0 left-0 right-0 block md:hidden bg-center bg-cover top-0 w-[100%] h-[70px] pl-2' style = {{ backgroundImage : `url(${oval})`}} >

               <div className=' text-white'>
                   <p className='text-sm'>Frontend Mentor</p>
                   <p className='text-sm'>Feedback Board</p>
                </div>
               <svg onClick={onClick} className='absolute right-5 ' xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                     <rect width="20" height="3" fill="white"/>
                     <rect y="7" width="20" height="3" fill="white"/>
                     <rect y="14" width="20" height="3" fill="white"/>
                </svg>
        </div>
    )
}

export default MobileNavbar
