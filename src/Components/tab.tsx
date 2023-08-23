import React, { ReactElement } from 'react'

interface Props {
    tag : string
    
}

function Tab({ tag }: Props): ReactElement {
    return (
        <div className='rounded-lg text-sm font-semibold text-[#4661E6] bg-[#F2F4FF] px-4 w-auto text-center hover:bg-[#4661E6]'>
            {tag}
        </div>
    )
}

export default Tab
