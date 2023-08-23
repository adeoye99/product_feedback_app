import React, { ReactElement } from 'react'

interface Props {
    bordertopColor ?: string,
    status ?: string,
    title ?: string,
    description ?: string,
    category ?: string,
    amountOfComment ?: string,
    upVotes ?: string    
}

function Roadmapcomp({ bordertopColor , status , title , description , category , amountOfComment ,  upVotes }: Props): ReactElement {
    return (
        <div className={`${bordertopColor} border-t-4 rounded-sm  bg-white p-6`}>
             <div>
                <div className='grid md:grid-cols-2 '>
                     <div className='flex items-center gap-2 text-[#647196] text-sm'>
                        { 
                           status === "Planned" ?
                           <svg className='border' xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                 <circle cx="4" cy="4" r="4" fill="#F49F85"/>
                             </svg>:
                             status === "In Progress" ?
                                <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                    <circle cx="4" cy="4" r="4" fill="#AD1FEA"/>
                                </svg>:
                                status === "Live" ?
                                   <svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8" fill="none">
                                     <circle cx="4" cy="4" r="4" fill="#62BCFA"/>
                                   </svg>
                                   :null

                        }
                          
                         {status}
                     </div>  
                 </div>
                 <div>
                    <h1>{title}</h1>
                    <p>{description}</p>
                 </div>
                   <div className='rounded-xl text-sm w-[30%] h-[30px] flex justify-center items-center font-semibold text-[#4661E6] bg-[#F2F4FF] px-4 text-center mt-3'>
                       {category}
                    </div>
                    <div className='grid grid-cols-2 mt-[5%] gap-x-2'>
                    <div className='rounded-xl  text-center flex flex-row gap-2 justify-center items-center text-sm font-semibold h-[50px] w-[40%] bg-[#F2F4FF] px-4 text-center '>
                        <svg xmlns="http://www.w3.org/2000/svg" width="11" height="7" viewBox="0 0 11 7" fill="none">
                             <path d="M1.33447 6L5.33447 2L9.33447 6" stroke="#4661E6" stroke-width="2"/>
                         </svg>
                       {upVotes}
                    </div>
                    <div className='flex  gap-x-2 justify-center items-center text-left'>
                         <svg xmlns="http://www.w3.org/2000/svg" width="18" height="16" viewBox="0 0 18 16" fill="none">
                              <path d="M2.62074 16H1.34534L2.24718 15.0895C2.73344 14.5986 3.0371 13.9601 3.11873 13.2674C1.03637 11.8878 0 9.88917 0 7.79388C0 3.92832 3.51913 0 9.0305 0C14.8692 0 18 3.61479 18 7.45522C18 11.321 14.8361 14.9333 9.0305 14.9333C8.0135 14.9333 6.95226 14.7963 6.00478 14.5448C5.10787 15.4735 3.89262 16 2.62074 16Z" fill="#CDD2EE"/>
                         </svg>
                          {amountOfComment}
                    </div>
                  
                </div>


             </div>
            
        </div>
    )
}

export default Roadmapcomp
