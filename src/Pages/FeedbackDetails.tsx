import React, { ReactElement } from 'react'
import Feedback from '../Components/Feedback'
import Comments from '../Components/Comments'
import AddComment from '../Components/AddComment'
import Gobackbutton from '../Components/Gobackbutton'
interface Props {
    
}

function FeedbackDetails({}: Props): ReactElement {
    return (
        <div className='bg-[#F7F8FD] pt-8 pb-[10%]'>
          <div className='w-[90%] md:w-[40%] mx-auto '>
            <div className='grid grid-cols-2'>
               <Gobackbutton
                 name = "Go Back"
               />
                <div className='text-right'>
                   <button className='bg-[#4661E6] text-white p-3 font-semibold rounded-lg md:w-[50%]'>
                     Edit Button
                   </button>
                </div>
                
            </div>
            <Feedback/>
        </div>
        <div className='bg-white w-[90%] md:w-[40%]  px-4 mx-auto md:py-8  mt-[5%] rounded-xl'>
            <p className='font-bold'>4 Comments</p>
            <Comments/>
            <hr className=' mx-auto'/>
            <div className='w-[90%] md:border-l ml-auto mt-[10%]'>
              <Comments/> 
              <Comments/> 
              


            </div>
           
           
           
        </div>
        <AddComment/>

        </div>
       
    )
}

export default FeedbackDetails
