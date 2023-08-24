import React, { ReactElement , useState } from 'react'
import oval from "../assets/Oval.svg"


interface Props {
    onClick: () => void;
    isOpen : boolean
    
}


function MobileNavbar({ onClick , isOpen }: Props): ReactElement {
   
    
    return (
        <div className='z-50  flex items-center fixed top-0 left-0 right-0 block md:hidden bg-center bg-cover top-0 w-[100%] h-[70px] pl-2' style = {{ backgroundImage : `url(${oval})`}} >

               <div className=' text-white'>
                   <p className='text-sm'>Frontend Mentor</p>
                   <p className='text-sm'>Feedback Board</p>
                </div>
                {
                    isOpen ?
                      <svg  onClick={onClick} className='absolute right-5 ' xmlns="http://www.w3.org/2000/svg" width="18" height="17" viewBox="0 0 18 17" fill="none">
                          <path fill-rule="evenodd" clip-rule="evenodd" d="M8.99989 6.37857L2.98948 0.368164L0.868164 2.48948L6.87857 8.49989L0.868164 14.5103L2.98948 16.6316L8.99989 10.6212L15.0103 16.6316L17.1316 14.5103L11.1212 8.49989L17.1316 2.48948L15.0103 0.368164L8.99989 6.37857Z" fill="white"/>
                     </svg>:
                       <svg onClick={onClick} className='absolute right-5 ' xmlns="http://www.w3.org/2000/svg" width="20" height="17" viewBox="0 0 20 17" fill="none">
                             <rect width="20" height="3" fill="white"/>
                             <rect y="7" width="20" height="3" fill="white"/>
                              <rect y="14" width="20" height="3" fill="white"/>
                      </svg>
                }
               
        </div>
    )
}

export default MobileNavbar
