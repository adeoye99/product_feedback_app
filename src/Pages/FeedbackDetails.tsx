import React, { ReactElement } from 'react'
import Feedback from '../Components/Feedback'
import Comments from '../Components/Comments'
import { Comment } from 'postcss'
interface Props {
    
}

function FeedbackDetails({}: Props): ReactElement {
    return (
        <div className='bg-[#F7F8FD] h-[100%] pt-8'>
          <div className='w-[40%] mx-auto '>
            <div className='relative flex'>
                <div className='flex justify-center items-center  gap-4'>
                   <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M4.33447 9L0.334473 5L4.33447 1" stroke="#4661E6" stroke-width="2"/>
                   </svg>
                     Go back 
                </div>
                <div className='absolute right-2'>
                   <button className='bg-[#4661E6] text-white p-3 font-semibold rounded-lg w-[100%]'>
                     Edit Button
                   </button>
                </div>
                
            </div>
            <Feedback/>
        </div>
        <div className='bg-white w-[40%] px-4 mx-auto md:py-8  mt-[5%] rounded-lg'>
            <Comments/>
            <Comments/>
            <Comments/>
            <Comments/>
        </div>

        </div>
       
    )
}

export default FeedbackDetails
