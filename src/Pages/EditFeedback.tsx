import React, { ReactElement } from 'react'
import Gobackbutton from '../Components/Gobackbutton'


interface Props {
    
}

function EditFeedback({}: Props): ReactElement {
    return (
        <div className='pt-6 pb-6 bg-[#F7F8FD]'>
            <div className='md:w-[35%] mx-auto'>
                <Gobackbutton
                  name = "Go Back"
                />
                <div className='w-[100%] h-auto py-[40px] bg-white   rounded-lg mt-[10%] relative '>
               
                    
                    <div className='w-[80%] mx-auto '>
                    <svg  className='absolute top-[-30px] ' xmlns="http://www.w3.org/2000/svg" width="56" height="56" viewBox="0 0 56 56" fill="none">
                         <circle cx="28" cy="28" r="28" fill="url(#paint0_radial_0_1978)"/>
                           <path fill-rule="evenodd" clip-rule="evenodd" d="M29.0825 19.4809L32.8315 16L39.345 22.2719L35.7969 25.952L29.0825 19.4809ZM16 39.5949C16.9207 35.6533 19.4867 25.5743 19.4867 25.5743L27.6895 20.7535L34.5209 27.1499L29.3017 34.97L16.313 40L22.4703 34.2104C23.513 34.5998 24.9857 34.2478 25.7818 33.3736C26.8328 32.2255 26.7539 30.4423 25.605 29.3914C24.456 28.3404 22.5848 28.3404 21.5339 29.4885C20.751 30.3444 20.4812 31.8544 20.9287 32.8498L16 39.5949Z" fill="white"/>
                             <defs>
                               <radialGradient id="paint0_radial_0_1978" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(58.184 -5.81647) rotate(129.411) scale(93.4169)">
                                   <stop stop-color="#E84D70"/>
                                   <stop offset="0.530886" stop-color="#A337F6"/>
                                    <stop offset="1" stop-color="#28A7ED"/>
                                </radialGradient>
                             </defs>
                        </svg>
                    
                       <p className='text-[#3A4374] font-bold text-[24px]'>Editing ‘Add a dark theme option’</p>
                       <div className='flex flex-col mt-10'>
                          <p className='text-[#3A4374] text-[14px] font-bold '>Feedback Title</p>
                           <p className='text-[#647196] text-[14px]  '>Add a short, descriptive headline</p>
                           <input
                             className=' w-[100%] bg-[#F7F8FD] rounded-lg h-[48px] mt-2 p-4 '
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
                          <p className='text-[#3A4374] text-[14px] font-bold'>Update Status</p>
                           <p className='text-[#647196] text-[14px]'>Change feedback state</p>
                           <select
                             className=' w-[100%] bg-[#F7F8FD] rounded-lg h-[48px] mt-2'
                            >

                            </select>
                        </div>
                        <div className='flex flex-col mt-10'>
                          <p className='text-[#3A4374] text-[14px] font-bold '>Feedback Detail</p>
                           <p className='text-[#647196] text-[14px]  '>Include any specific comments on what should be improved, added, etc.</p>
                           <textarea
                             className=' w-[100%] bg-[#F7F8FD] rounded-lg h-[98px] mt-2 px-4 py-2'
                           / >

                         
                        </div>
                        <div className='grid grid-cols-1 lg:grid-cols-3 mt-4'>
                            <div className='text-left'>
                                  <button className='bg-[#D73737] text-white p-3 font-semibold w-[80%] rounded-lg text-[14px] mr-4 '>
                                     Delete
                                   </button>


                            </div>
                            
                            <div className='text-right col-span-2 gap-2 grid grid-cols-2'>
                                <button className='bg-[#3A4374] text-white p-3 font-semibold w-[100%] lg:w-[100%] rounded-lg text-[14px] mr-4 '>
                                     Cancel
                                   </button>
                                 <button className='bg-[#AD1FEA] text-white p-3 font-semibold lg:w-[100%] rounded-lg text-[14px]'>
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

export default EditFeedback

