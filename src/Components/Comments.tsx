import React, { ReactElement } from 'react'
import user1 from "../assets/user-images/image-anne.jpg"

interface Props {
    
}

function Comments({}: Props): ReactElement {
    return (
        <div className='grid grid-cols-6  border-b pt-4'>
            <div className='flex justify-center'>
               <img src = {user1} className='rounded-[50%] w-[50px] h-[50px]'/>
            </div>
            <div className='col-span-5'>
                <div className='grid grid-cols-2'>
                 <div>
                   <p className='text-[#3A4374] font-bold text-[14px]'> Elijah Moss</p>
                   <p className='text-[#647196] text-[14px]'> @hexagon.bestagon</p>

                 </div>

                 <p className='text-[#4661E6] text-[13px] text-right'>Reply</p>
                </div>
                <div className='text-[#647196] text-[14px] my-[4%]'>
                Second this! I do a lot of late night coding and reading. Adding a dark theme can be great for preventing eye strain and the headaches that result. It’s also quite a trend with modern apps and  apparently saves battery life.
                </div>

            </div>
            
           
        </div>
    )
}

export default Comments
