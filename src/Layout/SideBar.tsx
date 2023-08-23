import React, { ReactElement ,useState , Ref} from 'react'
import Tab from '../Components/tab'
import oval from "../assets/Oval.svg"


interface Props {
    isOpen : boolean,
    sideref ?: Ref<HTMLDivElement>
    
}

function SideBar({ isOpen  , sideref }: Props): ReactElement {
  console.log(isOpen)
    return (
        <div ref = {sideref}  className={`transition-transform transform ${isOpen ? "translate-x-0" : "translate-x-full"} z-30 gap-y-2 w-[70%] right-0 fixed top-0 h-full bg-[#F7F8FD] block md:hidden`}> 
              <div className=' flex-row w-[100%] gap-y-8 md:flex lg:flex-col'>
                    
                    <div className='bg-white mt-[100px] lg:mt-6 h-[200px] w-[80%] mx-auto relative rounded-sm py-6 px-3'>
                      <div className='flex flex-col gap-y-4 '>
                         <div className='flex gap-4'>
                           <Tab
                            tag = "All"
                            />
                             <Tab
                            tag = "UI"
                            />
                             <Tab
                            tag = "UX"
                            />
                         </div>
                         <div className='flex gap-4'>
                           <Tab
                            tag = "Enhancement"
                            />
                             <Tab
                            tag = "Bug"
                            />
                         
                         </div>
                         <div className='flex gap-4'>
                           <Tab
                            tag = "Feature"
                            />
                             
                         </div>
                         
                       </div>
                     
                    </div>
                    <div className='bg-white w-[80%] mx-auto mt-4 lg:mt-6 h-[200px] relative rounded-xl py-6 px-3'>
                      <div className='w-[80%] mx-auto grid grid-cols-1 gap-y-4'>
                        
                        <div className='grid grid-cols-2'>
                           <p className='text-black font-semibold'>RoadMap</p> 
                           <p className='text-right text-[#4661E6] underline hover:cursor'>View</p>
                        </div>
                        <div className='grid grid-cols-2'>
                         <div className='flex items-center gap-2 text-[#647196] text-sm'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="4" fill="#F49F85"/>
                          </svg>
                          Planned
                         </div>
                         
                          <p className='text-right font-semibold'>
                               2
                          </p>
                        </div>
                        <div className='grid grid-cols-2'>
                         <div className='flex items-center gap-2 text-[#647196] text-sm'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                              <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
                         </svg>
                          In-Progress
                         </div>
                         
                          <p className='text-right font-semibold'>
                               3
                          </p>
                        </div>
                        <div className='grid grid-cols-2'>
                         <div className='flex items-center gap-2 text-[#647196] text-sm'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                            <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
                          </svg>
                          Live
                         </div>
                          <p className='text-right font-semibold'>
                               1
                          </p>
                        </div>
                         
                       </div>
                     
                    </div>


             </div>
            
        </div>
    )
}

export default SideBar
