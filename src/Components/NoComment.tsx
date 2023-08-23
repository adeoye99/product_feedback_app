import React, { ReactElement } from 'react'
import NoCommentIcon from "../assets/Group 16.png"
import AddFeedBackButton from './AddFeedBackButton'

interface Props {
    
}

function NoComment({}: Props): ReactElement {
    return (
        <div className='w-[100%] bg-white py-7 p-5 md:p-0  mt-[1%] md:h-[80%] rounded-lg flex justify-center '>
            <div className='flex flex-col justify-center items-center'>
                 <img className='w-[160px] h-50' src = {NoCommentIcon }/>
                 <p>There is no feedback yet.</p>
                  <p className='text-[#647196] text-[15px]' >  Got a suggestion? Found a bug that needs to be squashed?<br/> We love hearing about new ideas to improve our app.</p>
                  {/* <button className='bg-[#AD1FEA] text-white p-3 font-semibold rounded-lg lg:mt-[80px]'>
                        Add Feedback  +
                  </button> */}
                  <AddFeedBackButton
                    marginTop='mt-[80px]'
                  />
            </div>
        </div>
    )
}

export default NoComment
