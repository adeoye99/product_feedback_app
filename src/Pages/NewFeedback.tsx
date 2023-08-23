import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'
import Gobackbutton from '../Components/Gobackbutton'

interface Props {
    
}

function NewFeedback({}: Props): ReactElement {
  const navigate = useNavigate()
    return (
        <div className='pt-6 bg-[#F7F8FD] h-screen '>
            <div className='md:w-[35%] mx-auto'>
               <Gobackbutton
                 name = "Go Back"
               />
                <div className='w-[100%] h-auto py-[40px] bg-white   rounded-lg mt-[10%] relative '>
               
                    
                    <div className='w-[80%] mx-auto '>
                    <svg className='absolute top-[-30px] ' xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                          <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_2017)"/>
                           <path d="M30.3425 36V30.1657H36.0295V25.8637H30.3425V20H25.7459V25.8637H20V30.1657H25.7459V36H30.3425Z" fill="white"/>
                              <defs>
                                       <radialGradient id="paint0_radial_0_2017" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)">
                                           <stop stop-color="#E84D70"/>
                                           <stop offset="0.530886" stop-color="#A337F6"/>
                                           <stop offset="1" stop-color="#28A7ED"/>
                                        </radialGradient>
                               </defs>
                    </svg>
                    
                       <p className='text-[#3A4374] font-bold text-[24px]'>Create New Feedback</p>
                       <div className='flex flex-col mt-10'>
                          <p className='text-[#3A4374] text-[14px] font-bold '>Feedback Title</p>
                           <p className='text-[#647196] text-[14px]  '>Add a short, descriptive headline</p>
                           <input
                             className=' w-[100%] bg-[#F7F8FD] rounded-lg h-[48px] mt-2 '
                            />
                        </div>
                        <div className='flex flex-col mt-10'>
                          <p className='text-[#3A4374] text-[14px] font-bold '>Category</p>
                           <p className='text-[#647196] text-[14px]  '>Choose a category for your feedback</p>
                           <select
                             className=' w-[100%] bg-[#F7F8FD] rounded-lg h-[48px] mt-2 px-6 '
                            >

                            </select>
                        </div>
                        <div className='flex flex-col mt-10'>
                          <p className='text-[#3A4374] text-[14px] font-bold '>Feedback Detail</p>
                           <p className='text-[#647196] text-[14px]  '>Include any specific comments on what should be improved, added, etc.</p>
                           <textarea
                             className=' w-[100%] bg-[#F7F8FD] rounded-lg h-[98px] mt-2 px-6 '
                           />   
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 mt-4'>
                            <div className=''>


                            </div>
                            
                            <div className='col-span-2 grid grid-cols-2 gap-2'>
                                <button className='bg-[#3A4374] text-white p-3 font-semibold w-[100%]  rounded-lg text-[14px] mr-4 '>
                                     Cancel
                                   </button>
                                 <button className='bg-[#AD1FEA] text-white p-3 font-semibold rounded-lg text-[14px]'>
                                     Add Feedback
                                   </button>
                                 

                            </div>
                        </div>
                    </div>
                    

                </div>
            </div>
        </div>
    )
}

export default NewFeedback
