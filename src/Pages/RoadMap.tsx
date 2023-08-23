import React, { ReactElement } from 'react'
import Roadmapcomp from '../Components/Roadmapcomp'
import jsonData from "../data.json"
import planned from '../Constants/RoadMapdata'
import Live from '../Constants/Live'
import inProgress from '../Constants/InProgress'
import { useNavigate } from 'react-router-dom'

interface Props {
    
}

function RoadMap({}: Props): ReactElement {

    const navigate = useNavigate()
    console.log(jsonData)
    return (
        <div className='pt-6 bg-[#F7F8FD]'>
              <header className='bg-[#373F68] w-[80%] mx-auto h-[80px] flex items-center rounded-lg gap-x-6 text-white px-5 relative'>
                <div className='flex flex-col items-center  text-white  font-bold'>
                    <div onClick = { () => navigate(-1) } className='flex items-center  gap-2 text-white  font-bold'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                                 <path d="M4.33447 9L0.334473 5L4.33447 1" stroke="#CDD2EE" strokeWidth="2"/>
                          </svg>
                      Go back


                    </div>
                     <p>Roadmap</p>
                </div>
                      
                    
                      <button className='bg-[#AD1FEA] p-3 font-semibold rounded-lg absolute right-2'>
                        Add Feedback  +
                      </button>
                        
                    </header>
                    <body className='grid md:grid-cols-3 gap-6 mt-[5%] h-100 w-[80%] mx-auto'>
                        <div>
                            <div>
                                <p className='text-[#3A4374] font-bold text-[14px]'>Planned (2)</p>
                                <p className='text-[#647196] text-[13px]'>Ideas priortized for research</p>
                            </div>
                            <div className='grid grid-cols-1 gap-y-6'>
                                {
                                  planned.map((item)=>{
                                    return(
                                        <Roadmapcomp
                                        bordertopColor =  "border-t-[#F49F85]"
                                        title ={item?.title}
                                        description = {item?.description}
                                        category = {item?.category}
                                        amountOfComment = {item?.noOfComment}
                                        upVotes = {item?.upvotes}
                                        status = {item?.status}
                                        />
                                    )
                                  })
                                }
                             

                            </div>

                        </div>
                        <div>
                            <div>
                                <p className='text-[#3A4374] font-bold text-[14px]'>In-Progress (3)</p>
                                <p  className='text-[#647196] text-[13px]'>Currently being developed</p>
                            </div>
                            <div className='grid grid-cols-1 gap-y-6'>
                                {
                                  inProgress.map((item)=>{
                                    return (
                                        <Roadmapcomp
                                            bordertopColor =  "border-t-[#AD1FEA]"
                                            title ={item?.title}
                                           description = {item?.description}
                                           category = {item?.category}
                                           amountOfComment = {item?.noOfComment}
                                           upVotes = {item?.upvotes}
                                           status = {item?.status}
                                        />

                                    )
                                  })
                                }
                               
                            </div>
                            
                        </div>
                        <div>
                            <div>
                                <p className='text-[#3A4374] font-bold text-[14px]'>Live (1)</p>
                                <p  className='text-[#647196] text-[13px]'>Released features</p>
                            </div>
                            <div className='grid grid-cols-1 gap-y-6'>
                                {
                                    Live.map((item)=>{
                                        return(
                                            <Roadmapcomp
                                            bordertopColor =  "border-t-[#62BCFA]"
                                            title ={item?.title}
                                            description = {item?.description}
                                            category = {item?.category}
                                            amountOfComment = {item?.noOfComment}
                                            upVotes = {item?.upvotes}
                                            status = {item?.status}
                                            />
                                        )
                                    })
                                }
                               
                            </div>
                            
                        </div>

                    </body>
            
        </div>
    )
}

export default RoadMap
