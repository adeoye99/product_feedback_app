import React, { ReactElement } from 'react'
import Tab from './tab'

interface Props {
    
}

function Feedback({}: Props): ReactElement {
    return (
        <div className='w-[100%] bg-white p-5 md:p-0 md:h-[150px] mt-[5%] rounded-lg flex justify-center'>
            <div className='w-[100%] h-[80%] grid md:grid-cols-8 my-auto '>
                <div className='flex justify-center hidden md:block w-[50%] mx-auto'>
                    <div className='rounded-xl   flex flex-col justify-center items-center text-sm font-semibold h-[50px] bg-[#F2F4FF] px-4 text-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                             <path d="M1.33447 6L5.33447 2L9.33447 6" stroke="#4661E6" stroke-width="2"/>
                         </svg>
                       112
                    </div>

                </div>
                <div className='col-span-6'>
                    <p className='font-semibold text-black'>Add tags for solutions</p>
                    <p className='text-[#647196] mt-2'>Easier to search for solutions based on a specific stack.</p>
                   <div className='rounded-xl text-sm w-[30%] h-[30px] flex justify-center items-center font-semibold text-[#4661E6] bg-[#F2F4FF] px-4 text-center mt-3'>
                       Enhancement
                    </div>
                </div>
                <div className=' hidden md:block my-auto gap-x-2'>
                    <div className='flex flex-row justify-center items-center'>
                     <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                        <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE"/>
                     </svg>
                     2
                   </div>
                </div>
                <div className='flex block md:hidden  gap-x-2'>
                    <div className='rounded-xl  text-center flex flex-col justify-center items-center text-sm font-semibold h-[50px] bg-[#F2F4FF] px-4 text-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                             <path d="M1.33447 6L5.33447 2L9.33447 6" stroke="#4661E6" stroke-width="2"/>
                         </svg>
                       112
                    </div>
                    <div>
                         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                              <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE"/>
                         </svg>
                          2
                    </div>
                  
                </div>

            </div>
            
        </div>
    )
}

export default Feedback
