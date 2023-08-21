import React, { ReactElement } from 'react'

interface Props {
    
}

function AddComment({}: Props): ReactElement {
    return (
        <div className='w-[90%] md:w-[40%] mx-auto flex flex-col gap-y-6 py-4 bg-white mt-6 h-[30%] rounded-md'>
             <div className='w-[80%] mx-auto'>
                <p className='text-[#3A4374] font-bold'>Add Comment</p>
                <input
                 className='h-[100px] w-[100%] bg-[#F7F8FD] mt-6 '
                
                /> 
                <div className='grid grid-cols-2 mt-6'>
                       <div className='flex items-center '>
                           <p className='text-[#647196]'>250 Characters left</p>
                       </div>
                       <div className='text-right'>
                          <button  className='bg-[#AD1FEA] w-[80%] md:w-[60%] h-[50px] rounded-lg text-white font-bold'>
                            Post Comment
                          </button>
                        </div>
                </div>

             </div>
            
        </div>
    )
}

export default AddComment
