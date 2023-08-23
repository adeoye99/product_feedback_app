import React, { ReactElement } from 'react'
import { useNavigate } from 'react-router-dom'

interface Props {
    name : string
    
}

function Gobackbutton({ name }: Props): ReactElement {
    const navigate = useNavigate()
    return (
        <div onClick={() => navigate(-1)} className='flex items-center  gap-4 text-[#647196] font-bold'>
                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="10" viewBox="0 0 6 10" fill="none">
                      <path d="M4.33447 9L0.334473 5L4.33447 1" stroke="#4661E6" strokeWidth="2"/>
                </svg>
                     {name}
         </div>
    )
}

export default Gobackbutton
